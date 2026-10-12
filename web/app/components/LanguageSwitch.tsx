import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import type { Locale } from "~/content/types";
import { sized } from "~/lib/img";

// Each language as it names itself, so a visitor can find their own in any interface language.
const languages: { code: Locale; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "/img/united-kingdom.webp" },
  { code: "el", name: "Ελληνικά", flag: "/img/greece.webp" },
];
const label = { en: "Language", el: "Γλώσσα" } as const;

function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is "" (leading slash), segments[1] is the current locale
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

// Disclosure button (current flag, code and a chevron) that opens a list of the other languages,
// each linking to the same page in that language. Closes on Esc, on a click outside and after a
// choice.
export function LanguageSwitch({ locale, pathname }: { locale: Locale; pathname: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const current = languages.find((l) => l.code === locale)!;
  const others = languages.filter((l) => l.code !== locale);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={`flex h-9 items-center gap-2 rounded-full border pr-2.5 pl-1.5 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${open ? "border-white/60 bg-white/15" : "border-white/30 hover:border-white/60 hover:bg-white/10"}`}
      >
        <img src={sized(current.flag, 400)} alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-white/40" />
        <span className="sr-only">{`${label[locale]}: ${current.name}, `}</span>
        <span className="text-[13px] font-semibold tracking-[0.08em]">{current.code.toUpperCase()}</span>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
      </button>

      <ul
        id={listId}
        hidden={!open}
        className="absolute top-[calc(100%+8px)] right-0 z-50 min-w-[190px] overflow-hidden rounded-lg border border-black/5 bg-white py-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.18)]"
      >
        {others.map((l) => (
          <li key={l.code}>
            <Link
              to={swapLocaleInPath(pathname, l.code)}
              lang={l.code}
              hrefLang={l.code}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-body transition-colors hover:bg-surface hover:text-brand-navy focus-visible:bg-surface focus-visible:outline-none"
            >
              <img src={sized(l.flag, 400)} alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-black/10" />
              <span className="type-small font-medium">{l.name}</span>
              <span className="ml-auto text-[12px] font-semibold tracking-[0.08em] text-muted">{l.code.toUpperCase()}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
