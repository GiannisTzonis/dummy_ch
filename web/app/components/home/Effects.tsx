import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "~/content/types";
import { tr } from "~/lib/locale";
import { ArtIcon } from "~/components/ArtIcons";

// Home page effects: the countdown to the festival, the figures that count up, and the cards that
// tilt under the pointer. All new site furniture (marked for the
// content check to skip); all still for visitors who ask for reduced motion.

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const units = {
  days: { en: "Days", el: "Ημέρες", fr: "Jours", it: "Giorni", de: "Tage", es: "Días" },
  hours: { en: "Hours", el: "Ώρες", fr: "Heures", it: "Ore", de: "Stunden", es: "Horas" },
  minutes: { en: "Minutes", el: "Λεπτά", fr: "Minutes", it: "Minuti", de: "Minuten", es: "Minutos" },
  seconds: { en: "Seconds", el: "Δευτερόλεπτα", fr: "Secondes", it: "Secondi", de: "Sekunden", es: "Segundos" },
} as const;
const untilLabel = {
  en: "Until the first chord",
  el: "Μέχρι την πρώτη συγχορδία",
  fr: "Avant le premier accord",
  it: "Al primo accordo",
  de: "Bis zum ersten Akkord",
  es: "Hasta el primer acorde",
} as const;

// Days, hours, minutes and seconds until `target` (the prerendered page shows dashes: the time is
// the visitor's, known once the script runs).
export function Countdown({ target, locale }: { target: string; locale: Locale }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const left = now === null ? null : Math.max(0, new Date(target).getTime() - now);
  const parts: [keyof typeof units, number | null][] = [
    ["days", left === null ? null : Math.floor(left / 864e5)],
    ["hours", left === null ? null : Math.floor(left / 36e5) % 24],
    ["minutes", left === null ? null : Math.floor(left / 6e4) % 60],
    ["seconds", left === null ? null : Math.floor(left / 1e3) % 60],
  ];
  return (
    <div data-legacy-ignore="" className="w-full">
      <p data-legacy-ignore="" className="type-label mb-4 text-center font-semibold tracking-[0.25em] text-white/70 uppercase lg:text-left">
        {tr(untilLabel, locale)}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3" role="timer" aria-live="off">
        {parts.map(([u, v]) => (
          <div key={u} className="relative overflow-hidden rounded-xl bg-white/[0.07] px-1 py-3 text-center ring-1 ring-white/15 backdrop-blur-sm sm:px-3 sm:py-4">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <span className="block font-semibold text-white tabular-nums [font-size:clamp(1.5rem,4.2vw,2.75rem)] leading-none">
              {v === null ? "––" : String(v).padStart(u === "days" ? 1 : 2, "0")}
            </span>
            <span className="mt-2 block truncate text-[9px] font-semibold tracking-[0.04em] text-white/60 uppercase min-[400px]:text-[10px] sm:text-[11px] sm:tracking-[0.15em]">{tr(units[u], locale)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// A figure that counts up from zero when it first comes into view.
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  useEffect(() => {
    if (reduced()) return;
    const el = ref.current!;
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 4)))); // ease-out
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref} className="tabular-nums">{value}{suffix}</span>;
}

// The festival in three figures, all from the 2027 rules documents.
const figures = [
  {
    to: 400,
    suffix: { en: "+", el: "+", fr: "+", it: "+", de: "+", es: "+" },
    label: {
      en: "choirs from around the world have sung on its stages",
      el: "χορωδίες από όλο τον κόσμο έχουν εμφανιστεί στις σκηνές του",
      fr: "chœurs du monde entier se sont produits sur ses scènes",
      it: "cori da tutto il mondo si sono esibiti sui suoi palchi",
      de: "Chöre aus aller Welt standen auf seinen Bühnen",
      es: "coros de todo el mundo han actuado en sus escenarios",
    },
  },
  {
    to: 45,
    suffix: { en: "th", el: "η", fr: "e", it: "ª", de: ".", es: ".ª" },
    label: {
      en: "edition of the festival — July 2027",
      el: "διοργάνωση του φεστιβάλ — Ιούλιος 2027",
      fr: "édition du festival — juillet 2027",
      it: "edizione del festival — luglio 2027",
      de: "Ausgabe des Festivals — Juli 2027",
      es: "edición del festival — julio de 2027",
    },
  },
  {
    to: 31,
    suffix: { en: "st", el: "ος", fr: "e", it: "°", de: ".", es: ".º" },
    label: {
      en: "International Choral Competition",
      el: "Διεθνής Χορωδιακός Διαγωνισμός",
      fr: "Concours choral international",
      it: "Concorso corale internazionale",
      de: "Internationaler Chorwettbewerb",
      es: "Concurso Coral Internacional",
    },
  },
] as const;
const figuresTitle = {
  en: "The festival in numbers",
  el: "Το φεστιβάλ σε αριθμούς",
  fr: "Le festival en chiffres",
  it: "Il festival in cifre",
  de: "Das Festival in Zahlen",
  es: "El festival en cifras",
} as const;

// the figures' icons: the choirs, the festival's music, the competition's laurels
const figureIcons = ["choir", "notes", "laurel"] as const;

// The figures on a soft concert-hall light, over a faint staff: three cards, each with its icon,
// its number counting up in the festival's colours, and a large ghost of the icon in the corner.
export function Figures({ locale }: { locale: Locale }) {
  return (
    <section data-legacy-ignore="" className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6f4fb_0%,#fff_70%)] py-16 lg:py-24">
      {/* coloured light and a staff running across the section */}
      <div aria-hidden="true" className="drift absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-navy/10 blur-3xl" />
      <div aria-hidden="true" className="drift absolute -right-24 -bottom-32 -z-10 h-96 w-96 rounded-full bg-brand-maroon/10 blur-3xl [animation-delay:-8s]" />
      <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-x-0 top-1/2 -z-10 h-28 w-full -translate-y-1/2 text-brand-navy/[0.09] lg:h-40">
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} d={`M0 ${20 + k * 20} C 300 ${-10 + k * 20}, 500 ${60 + k * 20}, 800 ${20 + k * 20} S 1100 ${0 + k * 20}, 1200 ${30 + k * 20}`} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <p className="reveal type-label mb-10 flex items-center justify-center gap-4 text-center font-semibold tracking-[0.25em] text-brand-maroon uppercase lg:mb-14">
          <span aria-hidden="true" className="hidden h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-brand-maroon/60 sm:block" />
          {tr(figuresTitle, locale)}
          <span aria-hidden="true" className="hidden h-px w-10 shrink-0 bg-gradient-to-l from-transparent to-brand-maroon/60 sm:block" />
        </p>
        <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
          {figures.map((f, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white/85 p-7 shadow-[0_10px_40px_-18px_rgb(43_40_122/0.35)] ring-1 ring-brand-navy/10 backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(43_40_122/0.45)] lg:p-9">
                {/* the festival's colours along the top edge, and a ghost of the icon */}
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy via-[#5b3f8f] to-brand-maroon" />
                <ArtIcon name={figureIcons[i]} className="pointer-events-none absolute -right-6 -bottom-6 size-36 text-brand-navy/[0.05] transition duration-700 group-hover:-rotate-6 group-hover:text-brand-maroon/[0.08]" />
                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-maroon text-white shadow-lg shadow-brand-navy/25">
                  <ArtIcon name={figureIcons[i]} className="size-8" />
                </span>
                <p className="bg-gradient-to-br from-brand-navy via-[#5b3f8f] to-brand-maroon bg-clip-text font-semibold tracking-tight text-transparent [font-size:clamp(3.25rem,6vw,5rem)] leading-none">
                  <CountUp to={f.to} suffix={tr(f.suffix, locale)} />
                </p>
                <p className="type-lead relative mt-4 text-muted">{tr(f.label, locale)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// A card that leans towards a mouse pointer, with a soft light following it (CSS variables, no
// re-render). Touch and pen leave it still: the news slider is dragged with them.
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || reduced()) return;
    const el = ref.current!, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.dataset.tilt = "on";
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.tilt;
  };
  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt ${className}`}>
      {children}
    </div>
  );
}
