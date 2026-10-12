import { useEffect, useState } from "react";
import type { Locale } from "~/content/types";

// Shown on a page in French, Italian, German or Spanish that is not translated yet (its loader
// says translated: false): the page is in English, and this says so, in the visitor's language.
// Dismissible; a dismissal holds for the rest of the visit.
const text: Partial<Record<Locale, { note: string; close: string }>> = {
  fr: { note: "Cette page n’est pas encore traduite en français : elle est affichée en anglais.", close: "Fermer" },
  it: { note: "Questa pagina non è ancora tradotta in italiano: viene mostrata in inglese.", close: "Chiudi" },
  de: { note: "Diese Seite ist noch nicht ins Deutsche übersetzt und wird auf Englisch angezeigt.", close: "Schließen" },
  es: { note: "Esta página aún no está traducida al español: se muestra en inglés.", close: "Cerrar" },
};
const KEY = "armonia:translation-notice-closed";

export function TranslationNotice({ locale }: { locale: Locale }) {
  const t = text[locale];
  const [closed, setClosed] = useState(true); // shown once the script has checked the visit
  useEffect(() => {
    try {
      setClosed(sessionStorage.getItem(KEY) === "1");
    } catch {
      setClosed(false);
    }
  }, []);
  if (!t || closed) return null;
  return (
    <div role="status" className="fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-xl items-start gap-3 rounded-xl bg-brand-navy-dark/95 p-4 pr-3 text-white shadow-[0_18px_40px_rgb(15_23_42/0.35)] ring-1 ring-white/10 backdrop-blur sm:items-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white/80 sm:mt-0">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
      </svg>
      <p className="type-small flex-1">{t.note}</p>
      <button
        type="button"
        onClick={() => {
          setClosed(true);
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {
            // storage unavailable: closed for this page only
          }
        }}
        className="type-label shrink-0 rounded-full px-3 py-1.5 font-semibold tracking-wide text-white/90 uppercase ring-1 ring-white/30 transition-colors hover:bg-white/10"
      >
        {t.close}
      </button>
    </div>
  );
}
