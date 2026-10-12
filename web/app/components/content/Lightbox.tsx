import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "~/content/types";
import { tr } from "~/lib/locale";

export type LightboxImage = { src: string; caption?: string };
type Open = (images: LightboxImage[], index: number) => void;

const LightboxContext = createContext<Open | null>(null);

const labels = {
  en: { close: "Close", prev: "Previous photo", next: "Next photo", view: "View larger" },
  el: { close: "Κλείσιμο", prev: "Προηγούμενη φωτογραφία", next: "Επόμενη φωτογραφία", view: "Μεγέθυνση" },
  fr: { close: "Fermer", prev: "Photo précédente", next: "Photo suivante", view: "Agrandir" },
  it: { close: "Chiudi", prev: "Foto precedente", next: "Foto successiva", view: "Ingrandisci" },
  de: { close: "Schließen", prev: "Vorheriges Foto", next: "Nächstes Foto", view: "Vergrößern" },
  es: { close: "Cerrar", prev: "Foto anterior", next: "Foto siguiente", view: "Ampliar" },
} as const;

// Full-screen photo viewer on a native <dialog> (focus trap, Esc to close), with previous/next
// buttons and arrow keys within the group the photo was opened from.
export function LightboxProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<{ images: LightboxImage[]; index: number } | null>(null);
  const t = tr(labels, locale);

  const open = useCallback<Open>((images, index) => setState({ images, index }), []);
  const close = () => dialog.current?.close();
  const step = (d: number) =>
    setState((s) => (s ? { ...s, index: (s.index + d + s.images.length) % s.images.length } : s));

  useEffect(() => {
    if (state && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [state]);

  const img = state?.images[state.index];
  const many = (state?.images.length ?? 0) > 1;
  const btn =
    "absolute grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:outline-white";

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-label={img?.caption ?? t.view}
        onClose={() => setState(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-neutral-950/95 p-0 backdrop:bg-black/70"
      >
        {img && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-16 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
            <img src={img.src} alt={img.caption ?? ""} className="max-h-[calc(100dvh-10rem)] max-w-full rounded-md object-contain shadow-2xl" />
            {(img.caption || many) && (
              <p className="type-small max-w-[70ch] text-center text-white/90">
                {img.caption}
                {many && (
                  <span className="ml-3 text-white/60 tabular-nums">
                    {state!.index + 1} / {state!.images.length}
                  </span>
                )}
              </p>
            )}
          </div>
        )}
        <button type="button" onClick={close} aria-label={t.close} className={`${btn} top-4 right-4`}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {many && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label={t.prev} className={`${btn} top-1/2 left-3 -translate-y-1/2 sm:left-6`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label={t.next} className={`${btn} top-1/2 right-3 -translate-y-1/2 sm:right-6`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}

// A photo that opens in the viewer. It is a real link to the image file, so it still works
// (opens the file) without JavaScript.
export function Zoomable({
  images,
  index,
  label,
  locale,
  className = "",
  children,
}: {
  images: LightboxImage[];
  index: number;
  label?: string;
  locale: Locale;
  className?: string;
  children: ReactNode;
}) {
  const open = useContext(LightboxContext);
  return (
    <a
      href={images[index].src}
      aria-label={`${tr(labels, locale).view}${label ? `: ${label}` : ""}`}
      onClick={(e) => {
        if (!open || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        open(images, index);
      }}
      className={`group relative block cursor-zoom-in overflow-hidden ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute right-2 bottom-2 grid h-8 w-8 place-items-center rounded-full bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
        </svg>
      </span>
    </a>
  );
}
