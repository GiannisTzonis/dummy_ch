// A small synthetic choir for the home page stage: each call sings one chord of C major, in four
// parts (soprano, alto, tenor, bass), three singers to a part, on the vowel "ah", in a stone church.
//
// What makes it sound sung rather than played:
//   - the source: a glottal-like pulse (harmonics falling off as 1/n^1.3), one per singer;
//   - the vowel: five formant resonances per voice type (the standard "a" tables for soprano, alto,
//     tenor and bass: centre frequency, level and bandwidth), as parallel band-pass filters;
//   - the singers: each slightly off pitch, scooping up into the note, with a vibrato of their own
//     that only sets in after the attack; breath noise under the tone; each placed in the stereo field;
//   - the room: a generated impulse response (3.5 s of decaying stereo noise, darker as it fades).
// Everything is created on the first chord (a browser lets audio start only after a click or tap).
//
// Safeguards against a visitor drumming on the stage: a new chord at most every MIN_GAP seconds
// (faster touches still ripple, but stay silent), at most MAX_CHORDS sounding together, and a
// stolen chord fades out smoothly from wherever its envelope is (no jump, so no click) and its
// singers stop as soon as it is silent, so the audio graph never piles up.

type Part = "s" | "a" | "t" | "b";

// vowel "a" formants: [frequency Hz, level dB, bandwidth Hz]
const FORMANTS: Record<Part, [number, number, number][]> = {
  s: [[800, 0, 80], [1150, -6, 90], [2900, -32, 120], [3900, -20, 130], [4950, -50, 140]],
  a: [[800, 0, 80], [1150, -4, 90], [2800, -20, 120], [3500, -36, 130], [4950, -60, 140]],
  t: [[650, 0, 80], [1080, -6, 90], [2650, -7, 120], [2900, -8, 130], [3250, -22, 140]],
  b: [[600, 0, 60], [1040, -7, 70], [2250, -9, 110], [2450, -9, 120], [2750, -20, 130]],
};

const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

// The chords of C major, voiced for four parts (MIDI notes: bass, tenor, alto, soprano), from low
// to high so that the stage plays them left to right.
const CHORDS: [number, number, number, number][] = [
  [48, 55, 64, 72], // C
  [50, 57, 65, 74], // Dm
  [52, 59, 67, 71], // Em
  [53, 60, 65, 69], // F
  [55, 59, 67, 74], // G
  [57, 60, 64, 72], // Am
  [53, 57, 65, 77], // F (high)
  [55, 62, 71, 79], // G (high)
  [48, 64, 72, 79], // C (high, open)
];

const MIN_GAP = 0.22;
const MAX_CHORDS = 2;

// a chord still sounding: its envelope, its sources (to stop them early) and when it ends
type Chord = { env: GainNode; sources: AudioScheduledSourceNode[]; end: number };

let ctx: AudioContext | null = null;
let bus: GainNode; // all voices -> dry + reverb -> limiter
let glottal: PeriodicWave;
let noise: AudioBuffer;
const sounding: Chord[] = [];
let lastAt = -Infinity;

function setup() {
  ctx = new AudioContext();
  const c = ctx;
  const limiter = c.createDynamicsCompressor();
  limiter.threshold.value = -10;
  limiter.knee.value = 6;
  limiter.ratio.value = 8;
  limiter.attack.value = 0.005;
  limiter.release.value = 0.3;
  limiter.connect(c.destination);

  bus = c.createGain();
  bus.gain.value = 0.8;
  const dry = c.createGain();
  dry.gain.value = 0.55;
  bus.connect(dry).connect(limiter);

  // the church: decaying stereo noise, high frequencies fading faster than low ones
  const len = Math.floor(c.sampleRate * 3.5);
  const ir = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / c.sampleRate;
      const k = 0.35 + 0.6 * Math.exp(-t * 1.5); // the filter closes as the tail decays
      lp += k * ((Math.random() * 2 - 1) - lp);
      d[i] = lp * Math.pow(1 - i / len, 2.2) * (i < c.sampleRate * 0.02 ? i / (c.sampleRate * 0.02) : 1);
    }
  }
  const verb = c.createConvolver();
  verb.buffer = ir;
  const wet = c.createGain();
  wet.gain.value = 0.6;
  const pre = c.createDelay(0.1);
  pre.delayTime.value = 0.03; // pre-delay: the first reflections come a moment later
  bus.connect(pre).connect(verb).connect(wet).connect(limiter);

  // the voice source: harmonics falling off like a glottal pulse
  const n = 32;
  const real = new Float32Array(n), imag = new Float32Array(n);
  for (let h = 1; h < n; h++) imag[h] = 1 / Math.pow(h, 1.3);
  glottal = c.createPeriodicWave(real, imag);

  // breath: two seconds of white noise, reused
  noise = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
  const nd = noise.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);

// one part: three voices on one note, through that part's vowel
function part(c: AudioContext, chord: Chord, kind: Part, note: number, now: number, level: number) {
  const { end, sources } = chord;
  // the vowel: parallel formant filters, summed
  const vowel = c.createGain();
  vowel.gain.value = level;
  vowel.connect(chord.env);
  const input = c.createGain();
  for (const [f, db, bw] of FORMANTS[kind]) {
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = f;
    bp.Q.value = f / bw;
    const g = c.createGain();
    g.gain.value = Math.pow(10, db / 20) * 3.2; // a band-pass passes little: make up the level
    input.connect(bp).connect(g).connect(vowel);
  }
  // a little of the plain tone too (the "body" between the formants)
  const body = c.createBiquadFilter();
  body.type = "lowpass";
  body.frequency.value = 1400;
  const bodyGain = c.createGain();
  bodyGain.gain.value = 0.12;
  input.connect(body).connect(bodyGain).connect(vowel);

  const freq = midi(note);
  for (let s = 0; s < 3; s++) {
    const o = c.createOscillator();
    o.setPeriodicWave(glottal);
    o.frequency.value = freq;
    // each singer slightly off, scooping up into the note
    const off = rand(-9, 9);
    o.detune.setValueAtTime(off - rand(25, 45), now);
    o.detune.linearRampToValueAtTime(off, now + rand(0.12, 0.22));
    // vibrato of their own, setting in after the attack
    const lfo = c.createOscillator();
    lfo.frequency.value = rand(4.6, 5.8);
    const depth = c.createGain();
    depth.gain.setValueAtTime(0, now);
    depth.gain.linearRampToValueAtTime(rand(12, 22), now + rand(0.5, 0.9));
    lfo.connect(depth).connect(o.detune);
    // a slow wander in loudness (shimmer)
    const amp = c.createGain();
    amp.gain.value = 0.32;
    const sh = c.createOscillator();
    sh.frequency.value = rand(0.3, 0.9);
    const shDepth = c.createGain();
    shDepth.gain.value = 0.06;
    sh.connect(shDepth).connect(amp.gain);
    // each singer somewhere in the stereo field
    const pan = c.createStereoPanner();
    pan.pan.value = rand(-0.7, 0.7);
    o.connect(amp).connect(pan).connect(input);
    for (const osc of [o, lfo, sh]) { osc.start(now + rand(0, 0.05)); osc.stop(end); sources.push(osc); }
  }
  // breath under the tone, shaped by the same vowel
  const br = c.createBufferSource();
  br.buffer = noise;
  br.loop = true;
  const brFilter = c.createBiquadFilter();
  brFilter.type = "highpass";
  brFilter.frequency.value = 1800;
  const brGain = c.createGain();
  brGain.gain.value = 0.035;
  br.connect(brFilter).connect(brGain).connect(input);
  br.start(now, rand(0, 1.5));
  br.stop(end);
  sources.push(br);
}

// Fade a chord out from wherever its envelope is now, and stop its singers once it is silent.
function silence(chord: Chord, at: number) {
  const g = chord.env.gain;
  if (typeof g.cancelAndHoldAtTime === "function") g.cancelAndHoldAtTime(at);
  else { g.cancelScheduledValues(at); g.setValueAtTime(g.value, at); }
  g.setTargetAtTime(0, at, 0.09);
  const stopAt = at + 0.6;
  if (stopAt >= chord.end) return;
  for (const src of chord.sources) {
    try { src.stop(stopAt); } catch { /* already stopped */ }
  }
  chord.end = stopAt;
}

// Sing chord `index` (0 = lowest, the stage's left edge) of the chords above. Returns false when
// the touch came too soon after the last chord and was left silent.
export function singChord(index: number): boolean {
  if (!ctx) setup();
  const c = ctx!;
  if (c.state === "suspended") void c.resume();
  if (c.currentTime - lastAt < MIN_GAP) return false;
  lastAt = c.currentTime;
  const now = c.currentTime + 0.03;
  const hold = 1.6, release = 2.2;

  // forget the chords that have ended; fade out the oldest to make room
  for (let i = sounding.length - 1; i >= 0; i--) if (sounding[i].end <= c.currentTime) sounding.splice(i, 1);
  while (sounding.length >= MAX_CHORDS) silence(sounding.shift()!, now);

  const env = c.createGain();
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(1, now + 0.35); // a choir swells in
  env.gain.setValueAtTime(1, now + hold);
  env.gain.setTargetAtTime(0, now + hold, release / 4);
  env.connect(bus);
  const chord: Chord = { env, sources: [], end: now + hold + release + 0.1 };
  sounding.push(chord);
  const [b, t, a, s] = CHORDS[Math.max(0, Math.min(CHORDS.length - 1, index))];
  part(c, chord, "b", b, now, 1.0);
  part(c, chord, "t", t, now, 0.8);
  part(c, chord, "a", a, now, 0.75);
  part(c, chord, "s", s, now, 0.7);
  // once the last singer has stopped, let the chord's nodes go
  let left = chord.sources.length;
  for (const src of chord.sources) src.onended = () => { if (--left === 0) env.disconnect(); };
  return true;
}

export const CHORD_COUNT = CHORDS.length;
