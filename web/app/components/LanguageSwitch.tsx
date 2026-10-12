import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import type { Locale } from "~/content/types";
import { siteLocales } from "~/content/site-locales";
import { tr } from "~/lib/locale";

// Each language as it names itself, so a visitor can find their own in any interface language.
// (No flags: a language is not a country.)
// Only the published languages are listed (app/content/site-locales.ts).
const names: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
};
const languages = siteLocales.map((code) => ({ code, name: names[code] }));
const label: Record<Locale, string> = { en: "Language", el: "Γλώσσα", fr: "Langue", it: "Lingua", de: "Sprache", es: "Idioma" };

function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is "" (leading slash), segments[1] is the current locale
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

function Globe({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`h-3 w-3 ${className}`}>
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-brand-maroon">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

// The language selector. "menu": the last entry of the desktop menu, set like the other entries
// (same lettering, first line on the same baseline) and opening the same white panel, on hover or
// click. "compact": the phones' top bar, beside the menu button. Each language links to the same
// page in that language; the current one is ticked.
export function LanguageSwitch({ locale, pathname, variant, className = "" }: { locale: Locale; pathname: string; variant: "menu" | "compact"; className?: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const current = languages.find((l) => l.code === locale)!;

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

  const menu = variant === "menu";
  return (
    <div ref={root} className={`relative ${menu ? "group" : ""} ${className}`}>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={
          menu
            ? "type-label flex items-center gap-1.5 px-[10px] py-[6px] text-[12px] tracking-[0.04em] text-white hover:text-white/80 xl:text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            : `flex h-9 items-center gap-1.5 rounded-full px-2.5 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${open ? "bg-white/15" : "hover:bg-white/10"}`
        }
      >
        <Globe className={menu ? "h-[1.15em] w-[1.15em]" : "h-5 w-5"} />
        <span className="sr-only">{`${tr(label, locale)}: ${current.name}, `}</span>
        <span className={menu ? "" : "text-[13px] font-semibold tracking-[0.08em]"}>{current.code.toUpperCase()}</span>
        <Chevron className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <ul
        id={listId}
        className={`absolute right-0 z-50 min-w-[200px] bg-white p-[10px] shadow-[0_0_30px_rgba(127,137,161,0.25)] transition-all duration-300 ${
          menu ? "top-full" : "top-[calc(100%+8px)] rounded-lg"
        } ${
          open
            ? "visible mt-0 opacity-100"
            : menu
              ? "invisible mt-[14px] opacity-0 group-hover:visible group-hover:mt-0 group-hover:opacity-100"
              : "invisible opacity-0"
        }`}
      >
        {languages.map((l) => (
          <li key={l.code}>
            <Link
              to={swapLocaleInPath(pathname, l.code)}
              lang={l.code}
              hrefLang={l.code}
              aria-current={l.code === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
              className="type-small flex items-center gap-3 px-3 py-2 whitespace-nowrap text-body transition-colors duration-200 hover:bg-surface hover:text-brand-navy focus-visible:bg-surface focus-visible:outline-none"
            >
              <span className={l.code === locale ? "font-semibold text-brand-navy" : ""}>{l.name}</span>
              <span className="ml-auto text-[11px] font-semibold tracking-[0.08em] text-muted">{l.code.toUpperCase()}</span>
              <span className="w-4">{l.code === locale && <Check />}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
