/* Choir practice player: plays a compiled song (songs/<slug>.json) with per-voice mixing
   and follows along on the score (songs/<slug>.musicxml rendered by OpenSheetMusicDisplay). */
(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const NOTE_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const SECTION_OF = { SS: 'S', S: 'S', A: 'A', TS: 'T', T: 'T', B: 'B' };
  const SECTION_NAME = { S: 'Σοπράνο', A: 'Άλτο', T: 'Τενόρος', B: 'Μπάσος' };
  const SECTION_PLURAL = { S: 'Οι σοπράνο', A: 'Οι άλτο', T: 'Οι τενόροι', B: 'Οι μπάσοι' };
  const PAN = { SS: -0.35, S: -0.25, A: -0.1, TS: 0.35, T: 0.15, B: 0.05 };
  const LOOKAHEAD = 0.15;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('choir.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('choir.' + k, JSON.stringify(v)); } catch { /* private mode */ } },
  };

  // ---------- song files ----------
  // Plain build: songs/*.json + .musicxml. Locked build (armoniachoir.org): one gzipped AES-GCM
  // bundle, songs.bin, opened with the choir password (PBKDF2 key, kept on this device once it worked).
  const files = {
    bundle: null,
    async locked() { return (await fetch('songs.bin', { method: 'HEAD' })).ok; },
    async open(key) {
      const raw = new Uint8Array(await (await fetch('songs.bin', { cache: 'no-cache' })).arrayBuffer());
      const k = await crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['decrypt']);
      const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: raw.slice(16, 28) }, k, raw.slice(28));
      this.bundle = await new Response(new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'))).json();
    },
    async deriveKey(password) {
      const raw = new Uint8Array(await (await fetch('songs.bin', { cache: 'no-cache' })).arrayBuffer());
      const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password.trim().toLowerCase()), 'PBKDF2', false, ['deriveBits']);
      const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: raw.slice(0, 16), iterations: 250000, hash: 'SHA-256' }, base, 256);
      return new Uint8Array(bits);
    },
    async index() { return this.bundle ? this.bundle.index : (await fetch('songs/index.json')).json(); },
    async song(slug) { return this.bundle ? this.bundle.songs[slug].json : (await fetch(`songs/${slug}.json`)).json(); },
    async score(slug) { return this.bundle ? this.bundle.songs[slug].xml : `songs/${slug}.musicxml`; },
  };
  const b64 = { to: (u) => btoa(String.fromCharCode(...u)), from: (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0)) };

  // Ask for the choir password until the bundle opens; a saved key is tried first.
  async function unlock() {
    if (!(await files.locked())) return;
    const saved = store.get('key', null);
    if (saved) { try { await files.open(b64.from(saved)); return; } catch { store.set('key', null); } }
    const gate = $('#gate'), form = $('#gateForm'), input = $('#gatePass'), err = $('#gateErr');
    gate.hidden = false;
    document.body.classList.add('locked');
    input.focus();
    await new Promise((done) => {
      form.onsubmit = async (e) => {
        e.preventDefault();
        err.textContent = '';
        form.classList.add('busy');
        try {
          const key = await files.deriveKey(input.value);
          await files.open(key);
          store.set('key', b64.to(key));
          done();
        } catch { err.textContent = 'Λάθος κωδικός. Δοκίμασε ξανά.'; input.select(); }
        form.classList.remove('busy');
      };
    });
    gate.hidden = true;
    document.body.classList.remove('locked');
  }

  const state = {
    song: null,
    mine: store.get('mine', 'T'),
    myLane: store.get('myLane', 'all'), // inside a split section: 'u' = Α΄ (upper), 'l' = Β΄ (lower)
    instrument: store.get('instrument', 'piano'),
    speed: store.get('speed', 100) / 100,
    metronome: store.get('metronome', false),
    countIn: store.get('countIn', true),
    preset: 'all',
    mix: {},          // partId -> {on, vol, solo, lane: 'all'|'u'|'l', split: null | {mine, other}}
    loop: { on: false, from: 1, to: 4 },
    pos: 0,           // playback position in eighths (when stopped)
    playing: false,
  };

  // ---------- timing ----------
  // secAt[k] = seconds from the start to eighth k at 100% speed
  let secAt = [];
  function buildTimeline(song) {
    const total = song.measures * song.beatsPerBar;
    const tempos = Object.entries(song.tempo).map(([m, b]) => [+m, b]).sort((a, b) => a[0] - b[0]);
    secAt = new Float64Array(total + 1);
    let bpm = tempos[0][1];
    for (let k = 0; k < total; k++) {
      const bar = Math.floor(k / song.beatsPerBar) + 1;
      for (const [m, b] of tempos) if (m <= bar) bpm = b;
      let eff = bpm;
      if (song.rall) {
        const a = (song.rall[0] - 1) * 7, z = song.rall[1] * 7;
        if (k >= a) eff = bpm * (1 - 0.4 * Math.min(1, (k - a) / (z - a)));
      }
      let dur = 30 / eff;
      if (song.fermata && bar === song.fermata && k % 7 >= 3) dur *= 1.8;
      secAt[k + 1] = secAt[k] + dur;
    }
  }
  const totalEighths = () => state.song.measures * state.song.beatsPerBar;
  function eighthAtSec(s) {
    let lo = 0, hi = secAt.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (secAt[mid] <= s) lo = mid; else hi = mid - 1; }
    const span = (secAt[lo + 1] ?? secAt[lo]) - secAt[lo];
    return lo + (span > 0 ? Math.min(1, (s - secAt[lo]) / span) : 0);
  }

  // ---------- audio ----------
  let ctx = null, master = null, partGain = {}, clickBus = null;
  const buffers = { piano: new Map(), choir: new Map() };
  const loading = { piano: null, choir: null };
  const active = new Set();

  function ensureAudio() {
    if (ctx) return ctx;
    ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 3;
    master = ctx.createGain(); master.gain.value = 0.8;
    master.connect(comp).connect(ctx.destination);
    clickBus = ctx.createGain(); clickBus.gain.value = 0.5; clickBus.connect(master);
    for (const p of state.song.parts) makePartBus(p.id);
    applyMix(true);
    return ctx;
  }
  function makePartBus(id) {
    const g = ctx.createGain();
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) { pan.pan.value = PAN[id] ?? 0; g.connect(pan).connect(master); } else g.connect(master);
    partGain[id] = g;
  }

  function sampleName(midi) { return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1); }
  function loadInstrument(kind) {
    if (kind === 'tone' || loading[kind]) return loading[kind] || Promise.resolve();
    const midis = [...new Set(state.song.notes.map((n) => n.m))];
    loading[kind] = Promise.all(midis.map(async (m) => {
      const res = await fetch(`samples/${kind}/${sampleName(m)}.mp3`);
      const buf = await ctx.decodeAudioData(await res.arrayBuffer());
      buffers[kind].set(m, buf);
    }));
    return loading[kind];
  }

  // Effective gain per part from the mixer (mute / solo / volume)
  function partLevel(id) {
    const anySolo = Object.values(state.mix).some((m) => m.solo);
    const m = state.mix[id];
    if (anySolo) return m.solo ? m.vol : 0;
    return m.on ? m.vol : 0;
  }
  function applyMix(instant) {
    if (!ctx) return;
    for (const id in partGain) {
      const g = partGain[id].gain;
      g.cancelScheduledValues(ctx.currentTime);
      if (instant) g.value = partLevel(id);
      else g.setTargetAtTime(partLevel(id), ctx.currentTime, 0.03);
    }
  }
  function laneAllowed(note) {
    const lane = state.mix[note.p].lane;
    return lane === 'all' || note.l === 'b' || note.l === lane;
  }
  // Is this one of the notes I sing? (my section, and my half of it when the section splits)
  function isMyNote(note) {
    return SECTION_OF[note.p] === state.mine && (state.myLane === 'all' || note.l === 'b' || note.l === state.myLane);
  }
  // Per-note level inside a split part: lets "Τενόρος Β΄" be loud while Τενόρος Α΄ stays soft
  function noteLevel(note) {
    const split = state.mix[note.p].split;
    if (!split) return 1;
    return isMyNote(note) ? split.mine : split.other;
  }

  // Play one note from `when` to `end` (ctx seconds)
  function voice(midi, when, end, partId, accent, level = 1) {
    const out = partGain[partId];
    const len = Math.max(0.08, end - when);
    const env = ctx.createGain();
    env.connect(out);
    const peak = level * (accent ? 1 : 0.85) * (state.instrument === 'tone' ? 0.32 : 0.9);
    const release = state.instrument === 'piano' ? 0.08 : 0.12;
    env.gain.setValueAtTime(0, when);
    env.gain.linearRampToValueAtTime(peak, when + (state.instrument === 'piano' ? 0.005 : 0.04));
    env.gain.setValueAtTime(peak, Math.max(when + 0.04, end - 0.02));
    env.gain.linearRampToValueAtTime(0, end + release);
    const nodes = [];
    if (state.instrument === 'tone') {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
      o.connect(lp).connect(env);
      o.start(when); o.stop(end + release + 0.05);
      nodes.push(o);
    } else {
      const buf = buffers[state.instrument].get(midi);
      if (!buf) return;
      // Samples last ~1.6s: chain overlapping copies (skipping the attack) to hold long notes.
      const seg = buf.duration - 0.45, xf = 0.25, startOff = 0.3;
      let t = when, first = true;
      while (t < end + release) {
        const src = ctx.createBufferSource(); src.buffer = buf;
        const g = ctx.createGain();
        src.connect(g).connect(env);
        const off = first ? 0 : startOff;
        const playLen = first ? buf.duration : seg;
        if (!first) { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + xf); }
        const stopAt = t + playLen;
        const next = stopAt - xf;
        if (next < end + release) { g.gain.setValueAtTime(1, next); g.gain.linearRampToValueAtTime(0, stopAt); }
        src.start(t, off);
        src.stop(Math.min(stopAt, end + release + 0.05));
        nodes.push(src);
        if (state.instrument === 'piano') break;
        t = next; first = false;
      }
    }
    const rec = { nodes, end: end + release, env };
    active.add(rec);
    nodes[0].onended = () => active.delete(rec);
    flashLed(partId, when);
  }
  function click(when, strong) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = strong ? 1760 : 1180;
    g.gain.setValueAtTime(strong ? 0.9 : 0.45, when);
    g.gain.exponentialRampToValueAtTime(0.001, when + 0.05);
    o.connect(g).connect(clickBus);
    o.start(when); o.stop(when + 0.06);
  }
  function silenceAll() {
    const now = ctx ? ctx.currentTime : 0;
    for (const rec of active) {
      try {
        rec.env.gain.cancelScheduledValues(now);
        rec.env.gain.setTargetAtTime(0, now, 0.02);
        rec.nodes.forEach((n) => n.stop(now + 0.1));
      } catch { /* already stopped */ }
    }
    active.clear();
  }

  // ---------- scheduler ----------
  let notesAt = [];      // eighth index -> notes starting there
  let sched = null;      // {nextK, baseCtx, basePos, segments: [{at, baseCtx, basePos}]}
  let timer = null;

  function timeOf(k) { return sched.baseCtx + (secAt[k] - secAt[sched.basePos]) / state.speed; }
  function loopBounds() {
    if (!state.loop.on) return null;
    const a = (Math.max(1, Math.min(state.loop.from, state.song.measures)) - 1) * 7;
    const b = Math.max(a + 7, Math.min(state.loop.to, state.song.measures) * 7);
    return [a, b];
  }

  function tick() {
    const horizon = ctx.currentTime + LOOKAHEAD;
    const total = totalEighths();
    while (sched && timeOf(sched.nextK) < horizon) {
      const k = sched.nextK;
      const lb = loopBounds();
      if ((lb && k >= lb[1]) || k >= total) {
        if (lb) {
          const at = timeOf(k);
          sched.baseCtx = at; sched.basePos = lb[0]; sched.nextK = lb[0];
          sched.segments.push({ at, baseCtx: at, basePos: lb[0] });
          continue;
        }
        const endAt = timeOf(k);
        setTimeout(() => { if (state.playing && sched && sched.nextK >= total) stop(true); }, Math.max(0, (endAt - ctx.currentTime) * 1000 + 400));
        sched.nextK = Infinity;
        break;
      }
      const when = timeOf(k);
      const inBar = k % 7;
      if (state.metronome) click(when, inBar === 0);
      const limit = lb ? lb[1] : total;
      for (const n of notesAt[k] || []) {
        const level = noteLevel(n);
        if (!laneAllowed(n) || level === 0) continue;
        voice(n.m, when, timeOf(Math.min(k + n.d, limit)) - 0.01, n.p, inBar === 0 || inBar === 3 || inBar === 5, level);
      }
      sched.nextK = k + 1;
    }
  }

  async function play() {
    ensureAudio();
    if (ctx.state === 'suspended') await ctx.resume();
    document.body.classList.add('loading-sound');
    await loadInstrument(state.instrument);
    document.body.classList.remove('loading-sound');
    let start = Math.floor(state.pos);
    const lb = loopBounds();
    if (lb && (start < lb[0] || start >= lb[1])) start = lb[0];
    if (start >= totalEighths()) start = 0;
    let t0 = ctx.currentTime + 0.08;
    if (state.countIn) {
      const barSec = (secAt[Math.min(start + 7, secAt.length - 1)] - secAt[start]) / state.speed || 7 * 0.3;
      const step = barSec / 7;
      [0, 3, 5].forEach((e) => click(t0 + e * step, e === 0));
      t0 += barSec;
    }
    sched = { nextK: start, baseCtx: t0, basePos: start, segments: [{ at: 0, baseCtx: t0, basePos: start }] };
    state.playing = true;
    document.body.classList.add('playing');
    tick();
    timer = setInterval(tick, 25);
    requestAnimationFrame(frame);
  }
  function currentPos() {
    if (!state.playing || !sched) return state.pos;
    const now = ctx.currentTime;
    let seg = sched.segments[0];
    for (const s of sched.segments) if (s.at <= now) seg = s;
    if (now < seg.baseCtx) return seg.basePos;
    return Math.min(totalEighths(), eighthAtSec(secAt[seg.basePos] + (now - seg.baseCtx) * state.speed));
  }
  function stop(toStart) {
    if (state.playing) state.pos = currentPos();
    state.playing = false;
    clearInterval(timer); timer = null; sched = null;
    silenceAll();
    setHold(false);
    document.body.classList.remove('playing');
    if (toStart === true) state.pos = state.loop.on ? (state.loop.from - 1) * 7 : 0;
    else state.pos = Math.floor(state.pos / 7) * 7; // resume from the start of the bar
    render(true);
  }
  function seekBar(bar) {
    const wasPlaying = state.playing;
    if (wasPlaying) stop();
    state.pos = (Math.max(1, Math.min(bar, state.song.measures)) - 1) * 7;
    render(true, true);
    if (wasPlaying) play();
  }
  function setSpeed(v) {
    if (state.playing && sched) {
      // rebase at the next unscheduled eighth so already-queued notes stay in time
      const k = sched.nextK === Infinity ? totalEighths() : sched.nextK;
      const at = timeOf(k);
      state.speed = v;
      sched.baseCtx = at; sched.basePos = k;
      sched.segments.push({ at, baseCtx: at, basePos: k });
    } else state.speed = v;
  }

  // ---------- UI: position ----------
  let lastBar = -1;
  function frame() {
    render(false);
    if (state.playing) requestAnimationFrame(frame);
  }
  function render(force, scroll) {
    const pos = currentPos();
    const bar = Math.min(state.song.measures, Math.floor(pos / 7) + 1);
    if (bar !== lastBar || force) {
      lastBar = bar;
      $('#barNow').textContent = bar;
      if (document.activeElement !== $('#scrub')) $('#scrub').value = bar;
      const sec = currentSection(bar);
      $('#sectionNow').textContent = sec ? sec.label : '';
      document.querySelectorAll('#sections button').forEach((b) => b.classList.toggle('now', sec && +b.dataset.m === sec.measure));
    }
    score.follow(pos, force, scroll);
  }
  function currentSection(bar) {
    let cur = null;
    for (const s of state.song.sections) if (s.measure <= bar) cur = s;
    return cur;
  }
  const ledTimers = {};
  function flashLed(partId, when) {
    const delay = Math.max(0, (when - ctx.currentTime) * 1000);
    clearTimeout(ledTimers[partId]);
    ledTimers[partId] = setTimeout(() => {
      const led = document.querySelector(`.ch[data-p="${partId}"] .led`);
      if (!led) return;
      led.classList.add('hit');
      setTimeout(() => led.classList.remove('hit'), 110);
    }, delay);
  }

  // ---------- UI: mixer ----------
  function defaultMix() {
    for (const p of state.song.parts) state.mix[p.id] = { on: true, vol: 0.8, solo: false, lane: 'all', split: null };
  }
  function buildMixer() {
    const box = $('#mixer');
    box.innerHTML = '';
    for (const p of state.song.parts) {
      const m = state.mix[p.id];
      const row = document.createElement('div');
      row.className = 'ch';
      row.dataset.p = p.id;
      const range = notesRange(p.id);
      row.innerHTML = `
        <button class="ch-name" aria-pressed="true"><span class="led"></span>
          <span>${p.name}<small>${range}</small></span></button>
        <input class="ch-vol" type="range" min="0" max="1" step="0.05" aria-label="Ένταση ${p.name}">
        <div class="ch-extra">
          ${p.divisi ? `<div class="seg" role="radiogroup" aria-label="Διβίζι">
            <button data-lane="all" role="radio" title="Όλες οι νότες">Όλοι</button>
            <button data-lane="u" role="radio" title="Πάνω φωνή (1οι)">1οι</button>
            <button data-lane="l" role="radio" title="Κάτω φωνή (2οι)">2οι</button></div>` : ''}
          <button class="solo" title="Άκου μόνο αυτή τη φωνή">Σόλο</button>
        </div>`;
      row.querySelector('.ch-name').onclick = () => { m.on = !m.on; state.preset = null; store.set('preset', null); syncMixer(); };
      const vol = row.querySelector('.ch-vol');
      vol.value = m.vol;
      vol.oninput = () => { m.vol = +vol.value; if (!m.on) m.on = true; state.preset = null; syncMixer(); };
      row.querySelector('.solo').onclick = () => { m.solo = !m.solo; syncMixer(); };
      row.querySelectorAll('[data-lane]').forEach((b) => { b.onclick = () => { m.lane = b.dataset.lane; m.split = null; syncMixer(); }; });
      box.appendChild(row);
    }
    syncMixer();
  }
  function notesRange(id) {
    const ms = state.song.notes.filter((n) => n.p === id).map((n) => n.m);
    if (!ms.length) return '';
    const bars = state.song.notes.filter((n) => n.p === id).map((n) => n.bar);
    const name = (m) => NOTE_NAMES[m % 12].replace('b', '♭') + (Math.floor(m / 12) - 1);
    return `${name(Math.min(...ms))}–${name(Math.max(...ms))} · μ. ${Math.min(...bars)}–${Math.max(...bars)}`;
  }
  function syncMixer() {
    for (const p of state.song.parts) {
      const m = state.mix[p.id];
      const row = document.querySelector(`.ch[data-p="${p.id}"]`);
      row.classList.toggle('off', partLevel(p.id) === 0);
      row.classList.toggle('mine', SECTION_OF[p.id] === state.mine);
      row.querySelector('.ch-name').setAttribute('aria-pressed', String(m.on));
      row.querySelector('.ch-vol').value = m.vol;
      row.querySelector('.solo').classList.toggle('on', m.solo);
      row.querySelectorAll('[data-lane]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.lane === m.lane)));
    }
    document.querySelectorAll('#presets button').forEach((b) => b.classList.toggle('on', b.dataset.preset === state.preset));
    applyMix(false);
    store.set('mix', state.mix);
  }
  function applyPreset(name) {
    state.preset = name;
    for (const p of state.song.parts) {
      const m = state.mix[p.id];
      const mine = SECTION_OF[p.id] === state.mine;
      m.solo = false;
      m.split = null;
      if (mine && p.divisi && state.myLane !== 'all') {
        // I sing only one half of this part: shape the two halves instead of the whole part
        m.on = true; m.lane = 'all';
        m.vol = name === 'all' ? 0.8 : 1;
        m.split = name === 'only' ? { mine: 1, other: 0 } : null;
        continue;
      }
      if (name === 'all') { m.on = true; m.vol = 0.8; }
      if (name === 'only') { m.on = mine; m.vol = 1; }
    }
    syncMixer();
  }

  // ---------- free scrolling while playing ----------
  const hold = { on: false, last: 0 };
  function setHold(on) {
    hold.on = on;
    if (on) hold.last = Date.now();
    $('#backToScore').hidden = !(on && state.playing);
  }
  function userScrolled() { if (state.playing) setHold(true); }
  window.addEventListener('wheel', userScrolled, { passive: true });
  window.addEventListener('touchmove', userScrolled, { passive: true });
  document.addEventListener('keydown', (e) => { if (/^(Arrow(Up|Down)|Page(Up|Down)|Home|End)$/.test(e.key)) userScrolled(); });
  document.addEventListener('mousedown', (e) => { if (e.target === document.documentElement) userScrolled(); });

  // ---------- UI: score (OpenSheetMusicDisplay) ----------
  const score = {
    osmd: null, steps: [], idx: -1, zoom: 0.8, perLine: store.get('perLine', 0), // 0 = pick from the screen width
    onlyMine: false, followOn: true, lastScrollBar: -1, activeBar: -1,
    async load(url) {
      const el = $('#score');
      this.osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(el, {
        autoResize: false, newSystemFromXML: true, backend: 'svg', drawTitle: false, drawComposer: false, drawCredits: false,
        drawPartNames: true, drawPartAbbreviations: true, drawMeasureNumbers: true, coloringEnabled: true,
        followCursor: false, cursorsOptions: [{ type: 0, color: '#d24b58', alpha: 0.55, follow: false }],
      });
      await this.osmd.load(url);
      this.osmd.EngravingRules.StretchLastSystemLine = true;
      this.applyThemeColors();
      this.colorMine();
      this.layout();
      this.collectSteps();
      this.highlightMine();
      el.addEventListener('click', (e) => this.onClick(e));
      let lastW = el.clientWidth, t = null;
      window.addEventListener('resize', () => {
        clearTimeout(t);
        t = setTimeout(() => { if (el.clientWidth !== lastW) { lastW = el.clientWidth; this.relayout(); } }, 250);
      });
    },
    // Lines break at section starts and every N bars inside a section; the zoom is then the
    // largest one at which N bars still fit across the full width.
    barsPerLine() {
      if (this.perLine) return this.perLine;
      const w = $('#score').clientWidth;
      return w < 520 ? 2 : w < 900 ? 3 : w < 1200 ? 4 : w < 1700 ? 6 : 8;
    },
    layout() {
      const n = this.barsPerLine();
      const starts = new Set(state.song.sections.map((x) => x.measure));
      const lines = [];
      let run = 0;
      this.osmd.Sheet.SourceMeasures.forEach((sm, i) => {
        const brk = i > 0 && (starts.has(i + 1) || run >= n);
        if (i === 0 || brk) { lines.push([]); run = 0; }
        lines[lines.length - 1].push(i);
        sm.printNewSystemXml = brk;
        run++;
      });
      const w = $('#score').clientWidth - 8;
      const systems = () => this.osmd.GraphicSheet.MusicPages.reduce((a, p) => a.concat(p.MusicSystems), []);
      const draw = (z) => { this.osmd.zoom = z; this.osmd.render(); return systems().length <= lines.length; };
      // Each render costs a lot, so the zoom is worked out from the natural bar widths (in OSMD units,
      // independent of zoom) measured on the first render, then drawn once more at that zoom.
      const key = this.onlyMine ? 'mine:' + state.mine : 'all';
      this.metricsByKey ||= {};
      this.metrics = this.metricsByKey[key] || null;
      let z;
      if (this.metrics) z = this.fitZoom(lines, w);
      else z = Math.max(0.4, Math.min(1.6, w / ((n * 23 + 16) * 10)));
      let fits = draw(z);
      if (!this.metrics) {
        this.measureMetrics(key, systems());
        this.metricsByKey[key] = this.metrics;
        const better = this.fitZoom(lines, w);
        if (!fits || Math.abs(better - z) / z > 0.04) fits = draw(z = better);
      }
      if (!fits && z > 0.4) draw(z = Math.max(0.4, z * 0.9));
      this.zoom = z;
      $('#perLine').textContent = `${n} ${n === 1 ? 'μέτρο' : 'μέτρα'} / σειρά`;
    },
    // Natural width of each bar and of what starts a line (clef, key, part names), in OSMD units
    measureMetrics(key, systems) {
      const rules = this.osmd.EngravingRules;
      const list = this.osmd.GraphicSheet.MeasureList;
      const bar = [], begin = [];
      list.forEach((gms, i) => {
        let m = 0, b = 0, e = 0;
        for (const gm of gms || []) {
          if (!gm) continue;
          m = Math.max(m, gm.minimumStaffEntriesWidth || 0);
          b = Math.max(b, gm.beginInstructionsWidth || 0);
          e = Math.max(e, gm.endInstructionsWidth || 0);
        }
        bar[i] = m + e + rules.MeasureLeftMargin + 1;
        begin[i] = b;
      });
      const startOf = systems.map((sys) => list.findIndex((gms) => (gms || []).some((gm) => gm && gm.ParentMusicSystem === sys)));
      const labelX = (sys) => sys.StaffLines[0] ? sys.StaffLines[0].PositionAndShape.RelativePosition.x : 0;
      const later = startOf.slice(1).filter((i) => i > 0).map((i) => begin[i]);
      this.metrics = {
        key, bar,
        first: labelX(systems[0]) + begin[0],
        other: (systems[1] ? labelX(systems[1]) : labelX(systems[0])) + (later.length ? Math.max(...later) : begin[0] * 0.8),
        margins: rules.PageLeftMargin + rules.PageRightMargin + rules.SystemLeftMargin + rules.SystemRightMargin,
      };
    },
    fitZoom(lines, w) {
      const mt = this.metrics;
      const need = Math.max(...lines.map((ln, li) => (li ? mt.other : mt.first) + ln.reduce((a, i) => a + mt.bar[i], 0)));
      return Math.max(0.4, Math.min(1.8, 0.97 * w / (10 * (need + mt.margins))));
    },
    relayout() {
      if (!this.osmd) return;
      this.layout();
      this.afterRender();
      this.highlightMine();
      render(true);
    },
    // When I sing one half of a split section, my noteheads go rose and the other half's grey
    colorMine() {
      this.noteColors = new Map();
      const ids = state.song.parts.map((p) => p.id);
      const ins = this.osmd.Sheet.Instruments;
      const byPart = {};
      for (const n of state.song.notes) (byPart[n.p] ||= []).push(n);
      for (const sm of this.osmd.Sheet.SourceMeasures) {
        for (const vc of sm.VerticalSourceStaffEntryContainers) {
          for (const se of vc.StaffEntries) {
            if (!se) continue;
            const pid = ids[ins.indexOf(se.ParentStaff.ParentInstrument)];
            const split = state.myLane !== 'all' && SECTION_OF[pid] === state.mine;
            for (const ve of se.VoiceEntries) {
              const t = Math.round((sm.AbsoluteTimestamp.RealValue + ve.Timestamp.RealValue) * 8);
              for (const note of ve.Notes) {
                if (note.isRest()) continue;
                let color = null;
                if (split) {
                  const midi = note.halfTone + 12;
                  const ev = (byPart[pid] || []).find((e) => e.m === midi && e.t <= t && t < e.t + e.d);
                  if (ev) color = isMyNote(ev) ? (isDark() ? '#ff7d89' : '#c0283a') : (isDark() ? '#6e655c' : '#b3aaa0');
                }
                note.NoteheadColor = color;
                this.noteColors.set(note, color);
              }
            }
          }
        }
      }
    },
    // Light ink on the dark page (staff lines, notes, lyrics, labels), black on the light one
    applyThemeColors() {
      const r = this.osmd.EngravingRules;
      const ink = isDark() ? '#ece6dd' : '#000000';
      r.applyDefaultColorMusic(ink);
      r.StaffLineColor = isDark() ? '#9b9187' : undefined;
      r.LedgerLineColorDefault = ink;
      r.DefaultColorLyrics = ink;
      r.DefaultColorLabel = ink;
      r.DefaultColorTitle = ink;
    },
    // My role changed: recolour, redraw and move the tinted bands
    // Repaint noteheads in the SVG that is already on screen, instead of a full (slow) redraw.
    // VexFlow draws a chord's noteheads low to high, the same order as the sorted source notes.
    paintNoteheads() {
      const ink = this.osmd.EngravingRules.DefaultColorNotehead || '#000000';
      for (const gms of this.osmd.GraphicSheet.MeasureList) {
        for (const gm of gms || []) {
          for (const se of (gm && gm.staffEntries) || []) {
            for (const gve of se.graphicalVoiceEntries || []) {
              const notes = (gve.notes || []).filter((gn) => gn.sourceNote && !gn.sourceNote.isRest());
              if (!notes.length || !notes[0].getSVGGElement) continue;
              const el = notes[0].getSVGGElement();
              const heads = el ? el.querySelectorAll('.vf-notehead') : [];
              if (heads.length !== notes.length) continue;
              notes.sort((a, b) => a.sourceNote.halfTone - b.sourceNote.halfTone);
              notes.forEach((gn, i) => {
                const c = this.noteColors.get(gn.sourceNote) || ink;
                heads[i].querySelectorAll('path').forEach((pth) => { pth.setAttribute('fill', c); pth.setAttribute('stroke', c); });
              });
            }
          }
        }
      }
    },
    // My role changed: new colours and bands; only "show only my staves" needs a real redraw
    applyRole(sectionChanged) {
      if (!this.osmd) return;
      this.colorMine();
      if (this.onlyMine && sectionChanged) { this.applyVisibility(); return; }
      this.paintNoteheads();
      this.highlightMine();
    },
    // Tinted band behind my section's staves (and their lyrics) in every system
    highlightMine() {
      const el = $('#score');
      el.querySelectorAll('.mine-band').forEach((b) => b.remove());
      const svg = el.querySelector('svg');
      if (!this.osmd || !svg) return;
      const ids = state.song.parts.map((p) => p.id);
      const ins = this.osmd.Sheet.Instruments;
      const unit = 10 * this.osmd.zoom;
      const ox = svg.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
      const oy = svg.getBoundingClientRect().top - el.getBoundingClientRect().top;
      this.systems = [];
      for (const page of this.osmd.GraphicSheet.MusicPages) {
        for (const sys of page.MusicSystems) {
          this.systems.push(sys);
          const sysIdx = this.systems.length - 1;
          const lines = sys.StaffLines;
          lines.forEach((sl, i) => {
            if (SECTION_OF[ids[ins.indexOf(sl.ParentStaff.ParentInstrument)]] !== state.mine) return;
            const a = sl.PositionAndShape.AbsolutePosition;
            const top = a.y - 2.5;
            const bottom = i + 1 < lines.length ? lines[i + 1].PositionAndShape.AbsolutePosition.y - 2.5 : a.y + 4 + 6;
            const band = document.createElement('div');
            band.className = 'mine-band';
            band.dataset.sys = sysIdx;
            band.style.cssText = `left:${ox + (a.x - 1) * unit}px;top:${oy + top * unit}px;` +
              `width:${(sl.PositionAndShape.Size.width + 2) * unit}px;height:${(bottom - top) * unit}px`;
            el.prepend(band);
          });
        }
      }
      this.activeBar = -1;
      this.markActive(Math.floor(currentPos() / 7) + 1);
    },
    // Stronger tint on the system that is sounding now
    markActive(bar) {
      if (!this.osmd || !this.systems) return;
      const gm = (this.osmd.GraphicSheet.MeasureList[bar - 1] || []).find((x) => x);
      const idx = gm ? this.systems.indexOf(gm.ParentMusicSystem) : -1;
      document.querySelectorAll('#score .mine-band').forEach((b) => b.classList.toggle('now', +b.dataset.sys === idx));
    },
    collectSteps() {
      const c = this.osmd.cursor;
      c.show(); c.reset();
      this.steps = [];
      let guard = 0;
      while (!c.Iterator.EndReached && guard++ < 5000) {
        this.steps.push(Math.round(c.Iterator.currentTimeStamp.RealValue * 8));
        c.next();
      }
      c.reset(); this.idx = 0;
    },
    afterRender() {
      if (!this.osmd) return;
      this.osmd.cursor.show();
      const want = this.idx; this.idx = 0; this.osmd.cursor.reset();
      this.moveTo(want);
    },
    moveTo(target) {
      const c = this.osmd.cursor;
      if (target < this.idx) { c.reset(); this.idx = 0; }
      while (this.idx < target && !c.Iterator.EndReached) { c.next(); this.idx++; }
    },
    follow(pos, force, scroll) {
      if (!this.osmd || !this.steps.length) return;
      let lo = 0, hi = this.steps.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (this.steps[mid] <= pos + 1e-6) lo = mid; else hi = mid - 1; }
      if (lo !== this.idx || force) this.moveTo(lo);
      const bar = Math.floor(pos / 7);
      if (bar + 1 !== this.activeBar || force) { this.activeBar = bar + 1; this.markActive(bar + 1); }
      if (this.followOn && (bar !== this.lastScrollBar || force)) {
        this.lastScrollBar = bar;
        const el = this.osmd.cursor.cursorElement;
        if (el && (state.playing || scroll)) {
          const r = el.getBoundingClientRect();
          const vh = window.innerHeight - 84;
          const inView = r.top >= 70 && r.bottom <= vh - 20;
          // the user scrolled away while playing: leave the page alone until they come back or tap the button
          if (hold.on && !scroll) {
            if (inView && Date.now() - hold.last > 2000) setHold(false);
            return;
          }
          if (!inView) window.scrollBy({ top: r.top - vh * 0.3, behavior: state.playing ? 'smooth' : 'auto' });
        }
      }
    },
    onClick(e) {
      const svg = $('#score svg');
      if (!svg) return;
      const box = svg.getBoundingClientRect();
      const unit = 10 * this.osmd.zoom;
      const x = (e.clientX - box.left) / unit, y = (e.clientY - box.top) / unit;
      const list = this.osmd.GraphicSheet.MeasureList;
      for (let i = 0; i < list.length; i++) {
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        for (const gm of list[i]) {
          if (!gm || !gm.PositionAndShape) continue;
          const ps = gm.PositionAndShape, a = ps.AbsolutePosition;
          x0 = Math.min(x0, a.x + ps.BorderLeft); x1 = Math.max(x1, a.x + ps.BorderRight);
          y0 = Math.min(y0, a.y + ps.BorderTop); y1 = Math.max(y1, a.y + ps.BorderBottom);
        }
        if (x >= x0 && x <= x1 && y >= y0 - 2 && y <= y1 + 2) { seekBar(i + 1); return; }
      }
    },
    // + = bigger notes (fewer bars per line), − = more of the song on screen
    stepZoom(dir) {
      const opts = [1, 2, 3, 4, 6, 8];
      const cur = this.barsPerLine();
      const i = opts.findIndex((o) => o >= cur);
      this.perLine = opts[Math.max(0, Math.min(opts.length - 1, (i < 0 ? opts.length - 1 : i) + (dir > 0 ? -1 : 1)))];
      store.set('perLine', this.perLine);
      $('#perLine').textContent = '…';
      $('#score').classList.add('busy');
      // let the browser paint the "busy" state before the (slow) redraw
      setTimeout(() => { this.relayout(); $('#score').classList.remove('busy'); }, 30);
    },
    applyVisibility() {
      if (!this.osmd) return;
      const ids = state.song.parts.map((p) => p.id);
      this.osmd.Sheet.Instruments.forEach((ins, i) => {
        ins.Visible = !this.onlyMine || SECTION_OF[ids[i]] === state.mine;
      });
      this.layout();
      this.collectSteps();
      this.idx = 0;
      this.afterRender();
      this.highlightMine();
      render(true);
    },
  };

  // ---------- boot ----------
  function bindSeg(sel, value, onPick) {
    const btns = document.querySelectorAll(`${sel} button`);
    const sync = (v) => btns.forEach((b) => b.setAttribute('aria-checked', String(b.dataset.v === v)));
    btns.forEach((b) => { b.onclick = () => { sync(b.dataset.v); onPick(b.dataset.v); }; });
    sync(value);
  }

  // Run score work after the browser has painted the button press, so taps feel instant
  function later(fn) { requestAnimationFrame(() => setTimeout(fn, 0)); }

  // ---------- theme ----------
  const isDark = () => document.documentElement.dataset.theme === 'dark';
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    document.querySelector('meta[name=theme-color]').content = t === 'dark' ? '#161412' : '#f6f1e8';
    if (!score.osmd) return;
    $('#score').classList.add('busy');
    setTimeout(() => {
      score.applyThemeColors();
      score.colorMine();
      score.relayout();
      $('#score').classList.remove('busy');
    }, 30);
  }

  // The Α΄/Β΄ choice only shows when my section splits somewhere in this song
  function syncRole() {
    const splits = state.song && state.song.parts.some((p) => SECTION_OF[p.id] === state.mine && p.divisi);
    if (!splits && state.myLane !== 'all') { state.myLane = 'all'; store.set('myLane', 'all'); }
    $('#laneRow').hidden = !splits;
    $('#laneRow .label').textContent = `Σε κάποια σημεία ${SECTION_PLURAL[state.mine].toLowerCase()} χωρίζονται σε Α΄ και Β΄. Εσύ ποιο λες;`;
    const lbl = { all: 'Δεν ξέρω / όλες οι νότες', u: 'Α΄ (ψηλά)', l: 'Β΄ (χαμηλά)' };
    document.querySelectorAll('#myLane button').forEach((b) => {
      b.textContent = lbl[b.dataset.v];
      b.setAttribute('aria-checked', String(b.dataset.v === state.myLane));
    });
  }

  async function loadSong(slug) {
    if (state.playing) stop();
    const song = await files.song(slug);
    state.song = song;
    notesAt = [];
    for (const n of song.notes) (notesAt[n.t] ||= []).push(n);
    buildTimeline(song);
    const saved = store.get('mix', null);
    defaultMix();
    if (saved) for (const id in saved) if (state.mix[id]) Object.assign(state.mix[id], saved[id]);
    state.pos = 0;
    state.loop = { on: false, from: 1, to: Math.min(4, song.measures) };
    $('#loopToggle').checked = false; $('#loopRange').hidden = true;
    $('#loopFrom').max = $('#loopTo').max = song.measures;
    $('#loopFrom').value = 1; $('#loopTo').value = state.loop.to;
    document.title = `${song.title} · Πρόβα Χορωδίας`;
    $('#songTitle').textContent = song.title;
    $('#songMeta').textContent = [song.composer, song.arranger].filter(Boolean).join(' · ');
    const tempos = Object.values(song.tempo);
    $('#songFacts').textContent = `${song.beatsPerBar}/8 (${song.grouping.join('+')}) · ♩ = ${tempos.join(' → ')} · ${song.measures} μέτρα`;
    $('#barTotal').textContent = song.measures;
    $('#scrub').max = song.measures;
    const secBox = $('#sections');
    secBox.innerHTML = '';
    for (const s of song.sections) {
      const b = document.createElement('button');
      b.dataset.m = s.measure;
      b.innerHTML = `<b>μ.${s.measure}</b>${s.label}`;
      b.onclick = () => {
        if (state.loop.on) {
          const next = song.sections.find((x) => x.measure > s.measure);
          state.loop.from = s.measure; state.loop.to = next ? next.measure - 1 : song.measures;
          $('#loopFrom').value = state.loop.from; $('#loopTo').value = state.loop.to;
        }
        seekBar(s.measure);
      };
      secBox.appendChild(b);
    }
    syncRole();
    buildMixer();
    if (ctx) { for (const id in partGain) partGain[id].disconnect(); partGain = {}; for (const p of song.parts) makePartBus(p.id); applyMix(true); loading.piano = loading.choir = null; buffers.piano.clear(); buffers.choir.clear(); }
    $('#score').innerHTML = '';
    score.osmd = null;
    await score.load(await files.score(slug));
    if (score.onlyMine) score.applyVisibility();
    render(true);
  }

  async function boot() {
    await unlock();
    const list = await files.index();
    const sel = $('#songSelect');
    for (const s of list) {
      const o = document.createElement('option');
      o.value = s.slug; o.textContent = s.title; sel.appendChild(o);
    }
    const fromHash = decodeURIComponent(location.hash.slice(1));
    sel.value = list.some((s) => s.slug === fromHash) ? fromHash : list[0].slug;
    sel.onchange = () => { location.hash = sel.value; loadSong(sel.value); };

    bindSeg('#mySection', state.mine, (v) => {
      state.mine = v; store.set('mine', v);
      state.myLane = 'all'; store.set('myLane', 'all');
      syncRole();
      const p = state.preset || 'all';
      applyPreset(p); store.set('preset', p);
      later(() => score.applyRole(true));
    });
    bindSeg('#myLane', state.myLane, (v) => {
      state.myLane = v; store.set('myLane', v);
      syncRole();
      const p = state.preset || 'all';
      applyPreset(p); store.set('preset', p);
      later(() => score.applyRole(false));
    });
    $('#themeBtn').onclick = () => { const t = isDark() ? 'light' : 'dark'; store.set('theme', t); setTheme(t); };
    // follow the phone/computer setting until a choice is made here
    if (window.matchMedia) {
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!store.get('theme', null)) setTheme(e.matches ? 'dark' : 'light');
      });
    }
    $('#backToScore').onclick = () => { setHold(false); render(true, true); };
    bindSeg('#instrument', state.instrument, async (v) => {
      state.instrument = v; store.set('instrument', v);
      if (ctx) loadInstrument(v);
    });
    document.querySelectorAll('#presets button').forEach((b) => {
      b.onclick = () => { applyPreset(b.dataset.preset); store.set('preset', b.dataset.preset); };
    });

    const speed = $('#speed');
    speed.value = Math.round(state.speed * 100);
    $('#speedOut').textContent = speed.value + '%';
    const pickSpeed = (v) => document.querySelectorAll('#speedPick button').forEach((b) => b.setAttribute('aria-checked', String(+b.dataset.v === v)));
    speed.oninput = () => { $('#speedOut').textContent = speed.value + '%'; setSpeed(speed.value / 100); store.set('speed', +speed.value); pickSpeed(+speed.value); };
    bindSeg('#speedPick', speed.value, (v) => { speed.value = v; speed.oninput(); });
    pickSpeed(+speed.value);
    $('#metronome').checked = state.metronome;
    $('#metronome').onchange = (e) => { state.metronome = e.target.checked; store.set('metronome', state.metronome); };
    $('#countIn').checked = state.countIn;
    $('#countIn').onchange = (e) => { state.countIn = e.target.checked; store.set('countIn', state.countIn); };

    $('#loopToggle').onchange = (e) => {
      state.loop.on = e.target.checked;
      $('#loopRange').hidden = !state.loop.on;
      if (state.loop.on) {
        const bar = Math.floor(currentPos() / 7) + 1;
        const sec = currentSection(bar);
        const next = sec && state.song.sections.find((x) => x.measure > sec.measure);
        state.loop.from = sec ? sec.measure : 1;
        state.loop.to = next ? next.measure - 1 : state.song.measures;
        $('#loopFrom').value = state.loop.from; $('#loopTo').value = state.loop.to;
      }
    };
    const loopInput = () => {
      state.loop.from = Math.max(1, +$('#loopFrom').value || 1);
      state.loop.to = Math.max(state.loop.from, +$('#loopTo').value || state.loop.from);
    };
    $('#loopFrom').onchange = loopInput; $('#loopTo').onchange = loopInput;

    $('#play').onclick = () => (state.playing ? stop() : play());
    $('#toStart').onclick = () => { const was = state.playing; stop(true); if (was) play(); };
    $('#scrub').oninput = (e) => { $('#barNow').textContent = e.target.value; };
    $('#scrub').onchange = (e) => seekBar(+e.target.value);
    $('#giveNote').onclick = giveNote;
    $('#onlyMine').onchange = (e) => { score.onlyMine = e.target.checked; score.applyVisibility(); };
    $('#follow').onchange = (e) => { score.followOn = e.target.checked; };
    $('#zoomIn').onclick = () => score.stepZoom(1);
    $('#zoomOut').onclick = () => score.stepZoom(-1);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)) { e.preventDefault(); $('#play').click(); }
    });

    await loadSong(sel.value);
    // two choices since 2026-10-24 ("my voice in front" and "without my voice" were dropped)
    let preset = store.get('preset', store.get('mix', null) ? null : 'all');
    if (preset === 'lead' || preset === 'without') preset = 'all';
    if (preset) applyPreset(preset);
  }

  // Play the next note of my section from the current position (to find the pitch before singing)
  async function giveNote() {
    ensureAudio();
    if (ctx.state === 'suspended') await ctx.resume();
    await loadInstrument(state.instrument);
    const from = Math.floor(currentPos());
    const mineIds = state.song.parts.filter((p) => SECTION_OF[p.id] === state.mine).map((p) => p.id);
    const next = state.song.notes.find((n) => n.t >= from && mineIds.includes(n.p) && isMyNote(n) && partLevel(n.p) > 0)
      || state.song.notes.find((n) => n.t >= from && mineIds.includes(n.p) && isMyNote(n));
    if (!next) return;
    const chord = state.song.notes.filter((n) => n.t === next.t && n.p === next.p && isMyNote(n));
    const t = ctx.currentTime + 0.05;
    const saved = partGain[next.p].gain.value;
    partGain[next.p].gain.setValueAtTime(Math.max(saved, 0.9), t);
    chord.forEach((n) => voice(n.m, t, t + 1.4, n.p, true));
    partGain[next.p].gain.setValueAtTime(partLevel(next.p), t + 1.7);
  }

  boot().catch((err) => {
    console.error(err);
    $('#score').innerHTML = '<p class="loading">Κάτι πήγε στραβά στη φόρτωση. Δοκίμασε ανανέωση της σελίδας.</p>';
  });
})();
