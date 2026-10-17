import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "~/content/types";
import { tr } from "~/lib/locale";
import { CHORD_COUNT, singChord } from "./choir";

// The home page's opening: the piano artwork as a living stage. Five staff lines ripple across the
// lid like sound waves and lean towards the pointer (the visitor conducts); notes rise from them; a
// click or tap releases a ripple and a handful of notes and, with sound switched on, the choir sings
// a chord (choir.ts) chosen by where the stage was touched (left low, right high, like the keys below).
//
// Performance: one canvas, drawn only while the hero is on screen and the tab is visible, at most
// 2x pixel density. Visitors who ask for reduced motion get the staff drawn once, still.

// plain words for every visitor: what to press first, then what to do (tap or click, phones and
// computers alike)
const labels = {
  turnOn: { en: "Turn on sound", el: "Ενεργοποίηση ήχου", fr: "Activer le son", it: "Attiva l'audio", de: "Ton einschalten", es: "Activar el sonido" },
  turnOff: { en: "Turn off sound", el: "Απενεργοποίηση ήχου", fr: "Couper le son", it: "Disattiva l'audio", de: "Ton ausschalten", es: "Desactivar el sonido" },
  then: {
    en: "Then tap or click anywhere on the picture to hear the choir sing.",
    el: "Μετά πατήστε οπουδήποτε πάνω στην εικόνα για να ακούσετε τη χορωδία.",
    fr: "Puis touchez ou cliquez n'importe où sur l'image pour entendre le chœur chanter.",
    it: "Poi tocca o clicca in un punto qualsiasi dell'immagine per sentire cantare il coro.",
    de: "Tippen oder klicken Sie dann irgendwo auf das Bild, um den Chor singen zu hören.",
    es: "Después toque o haga clic en cualquier parte de la imagen para oír cantar al coro.",
  },
  now: {
    en: "Now tap or click anywhere on the picture to hear the choir.",
    el: "Τώρα πατήστε οπουδήποτε πάνω στην εικόνα για να ακούσετε τη χορωδία.",
    fr: "Touchez ou cliquez maintenant n'importe où sur l'image pour entendre le chœur.",
    it: "Ora tocca o clicca in un punto qualsiasi dell'immagine per sentire il coro.",
    de: "Tippen oder klicken Sie jetzt irgendwo auf das Bild, um den Chor zu hören.",
    es: "Ahora toque o haga clic en cualquier parte de la imagen para oír al coro.",
  },
  // phones: the same, shorter
  thenShort: {
    en: "Then tap the picture to hear the choir.",
    el: "Μετά πατήστε την εικόνα για να ακούσετε τη χορωδία.",
    fr: "Puis touchez l'image pour entendre le chœur.",
    it: "Poi tocca l'immagine per sentire il coro.",
    de: "Dann tippen Sie auf das Bild, um den Chor zu hören.",
    es: "Después toque la imagen para oír al coro.",
  },
  nowShort: {
    en: "Now tap the picture to hear the choir.",
    el: "Τώρα πατήστε την εικόνα για να ακούσετε τη χορωδία.",
    fr: "Touchez maintenant l'image pour entendre le chœur.",
    it: "Ora tocca l'immagine per sentire il coro.",
    de: "Tippen Sie jetzt auf das Bild, um den Chor zu hören.",
    es: "Ahora toque la imagen para oír al coro.",
  },
} as const;

// a loudspeaker, with sound waves when on and a cross when off
function Speaker({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h4l5-4v14l-5-4H4z" className="fill-current" />
      {on ? <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9.5l5 5M22 9.5l-5 5" />}
    </svg>
  );
}

type Note = { x: number; y: number; vx: number; vy: number; life: number; max: number; glyph: string; size: number; spin: number };
type Ripple = { x: number; y: number; t: number };

const GLYPHS = ["♪", "♫", "♩", "♬"];
export function Stage({ locale, children }: { locale: Locale; children: ReactNode }) {
  const host = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sound, setSound] = useState(false);
  const soundRef = useRef(false);
  soundRef.current = sound;

  useEffect(() => {
    const section = host.current!, cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, running = false, visible = true;
    const pointer = { x: -1e4, y: -1e4, energy: 0 };
    const notes: Note[] = [];
    const ripples: Ripple[] = [];
    let last = performance.now(), spawn = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = section.clientWidth;
      h = section.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      if (still) draw(0, 0);
    };

    // the staff: centred on the lid, a little below the middle (the keys sit at the bottom)
    const staff = () => {
      const gap = Math.max(12, Math.min(22, h * 0.022));
      const base = h * (w < 768 ? 0.6 : 0.56) - gap * 2;
      return { gap, base };
    };
    const lineY = (i: number, x: number, t: number, gap: number, base: number) => {
      const k = x / Math.max(w, 1);
      // a slow swell, a travelling wave, and a lean towards the pointer
      let y = base + i * gap;
      y += Math.sin(k * 6.2 + t * 0.6 + i * 0.35) * gap * 0.9;
      y += Math.sin(k * 13.0 - t * 1.1 + i * 0.6) * gap * 0.25;
      const d = (x - pointer.x) / (w * 0.12);
      const pull = Math.exp(-d * d) * pointer.energy;
      y += (pointer.y - y) * 0.18 * pull + Math.sin(t * 7 + x * 0.04) * gap * 0.35 * pull;
      return y;
    };

    function draw(t: number, dt: number) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const { gap, base } = staff();
      const step = w < 768 ? 10 : 6;
      // lines: a soft wide glow under a fine bright line
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = -step; x <= w + step; x += step) {
          const y = lineY(i, x, t, gap, base);
          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.strokeStyle = `rgba(255,255,255,${0.32 + i * 0.03})`;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }
      if (still) return;
      // ripples from a touch
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.t += dt;
        const p = r.t / 1.6;
        if (p >= 1) { ripples.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(r.x, r.y, 12 + p * Math.max(w, h) * 0.22, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${0.45 * (1 - p)})`;
        ctx.lineWidth = 2 * (1 - p) + 0.5;
        ctx.stroke();
      }
      // notes: rise, sway, fade
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = notes.length - 1; i >= 0; i--) {
        const n = notes[i];
        n.life += dt;
        if (n.life >= n.max) { notes.splice(i, 1); continue; }
        n.x += (n.vx + Math.sin(n.life * 2.2 + n.spin) * 14) * dt;
        n.y += n.vy * dt;
        const p = n.life / n.max;
        const alpha = Math.min(1, p * 5) * (1 - p) * 0.85;
        ctx.save();
        ctx.translate(n.x, n.y);
        ctx.rotate(Math.sin(n.life * 1.5 + n.spin) * 0.25);
        ctx.font = `${n.size}px "Inter Variable", system-ui, sans-serif`;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillText(n.glyph, 0, 0);
        ctx.restore();
      }
    }

    const addNote = (x: number, y: number, burst = false) => {
      notes.push({
        x, y,
        vx: (Math.random() - 0.3) * (burst ? 90 : 26),
        vy: -(burst ? 60 + Math.random() * 90 : 18 + Math.random() * 26),
        life: 0,
        max: burst ? 1.8 + Math.random() : 4 + Math.random() * 3,
        glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        size: burst ? 18 + Math.random() * 16 : 14 + Math.random() * 14,
        spin: Math.random() * 6,
      });
      if (notes.length > 70) notes.shift();
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;
      pointer.energy *= Math.pow(0.35, dt); // the lean settles when the pointer rests
      // a note now and then from somewhere on the staff
      spawn -= dt;
      if (spawn <= 0) {
        spawn = 0.35 + Math.random() * 0.6;
        const x = Math.random() * w;
        const { gap, base } = staff();
        addNote(x, lineY((Math.random() * 5) | 0, x, t, gap, base));
      }
      draw(t, dt);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (running || still || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.energy = Math.min(1, pointer.energy + 0.12);
    };
    const onDown = (e: PointerEvent) => {
      // not when a link or button is pressed
      if ((e.target as HTMLElement).closest("a,button")) return;
      const r = section.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      // rapid touches: a few ripples at most, fewer notes each
      ripples.push({ x, y, t: 0 });
      if (ripples.length > 4) ripples.shift();
      for (let i = 0; i < (ripples.length > 2 ? 3 : 7); i++) addNote(x, y, true);
      pointer.x = x; pointer.y = y; pointer.energy = 1;
      if (soundRef.current) singChord(Math.floor((x / Math.max(w, 1)) * CHORD_COUNT));
    };

    const ro = new ResizeObserver(resize);
    ro.observe(section);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); });
    io.observe(section);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerdown", onDown);
    resize();
    start();
    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <section ref={host} className="stage relative isolate h-svh min-h-[560px] w-full touch-manipulation overflow-hidden bg-[#c0354f]">
      {/* the artwork, drifting slower than the page (scroll-driven, no script) */}
      <div aria-hidden="true" className="stage-art absolute inset-x-0 -top-[6%] -z-20 h-[112%] bg-[url(/img/MainCover.webp)] bg-cover bg-center" />
      {/* light: a slow-breathing glow over the lid, a vignette for the type */}
      <div aria-hidden="true" className="stage-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(20_12_40/0.35))]" />
      <canvas ref={canvas} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" />
      {children}
      {/* how to play, in two plain steps: a large sound button, then one sentence (new site
          furniture: the content check skips it). Phones: small, no box, just above the keys; tablets:
          centred above the keys; desktops: bottom right. */}
      <div data-legacy-ignore="" className="absolute inset-x-4 bottom-[calc(23%+0.5rem)] flex justify-center sm:bottom-[calc(23%+1rem)] lg:inset-x-auto lg:right-8">
        <div className="flex max-w-[22rem] flex-col items-center gap-1.5 text-center sm:gap-3 sm:rounded-2xl sm:bg-black/45 sm:p-4 sm:ring-1 sm:ring-white/25 sm:backdrop-blur-md lg:items-end lg:text-right">
          <button
            type="button"
            aria-pressed={sound}
            onClick={() => setSound((s) => !s)}
            className={`type-caption sm:type-small inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-semibold shadow-lg sm:gap-2.5 sm:px-5 sm:py-3 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              sound ? "bg-white/15 text-white ring-1 ring-white/50 hover:bg-white/25" : "bg-white text-brand-navy hover:bg-[#ffe3e9]"
            }`}
          >
            <Speaker on={!sound} />
            {tr(sound ? labels.turnOff : labels.turnOn, locale)}
            {/* while on: the choir's level, moving */}
            {sound && (
              <span aria-hidden="true" className="flex h-3.5 items-end gap-[2px]">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="eq-bar w-[3px] rounded-full bg-white" style={{ animationDelay: `${i * -0.27}s` }} />
                ))}
              </span>
            )}
          </button>
          <p aria-live="polite" className="type-caption font-medium text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.6)] [text-wrap:balance] sm:type-small sm:[text-shadow:none]">
            <span className="sm:hidden">{tr(sound ? labels.nowShort : labels.thenShort, locale)}</span>
            <span className="hidden sm:inline">{tr(sound ? labels.now : labels.then, locale)}</span>
          </p>
        </div>
      </div>
      {/* scroll cue */}
      <div aria-hidden="true" className="scroll-cue pointer-events-none absolute bottom-[calc(23%+1.25rem)] left-1/2 hidden h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/60 lg:block">
        <span className="absolute top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white" />
      </div>
    </section>
  );
}
