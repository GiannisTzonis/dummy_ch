import type { ReactNode } from "react";
import { Link } from "react-router";
import type { Locale, RichBlock } from "~/content/types";
import { localizedHref, tr } from "~/lib/locale";
import { responsive } from "~/lib/img";
import { primaryNav } from "~/content/nav";
import { Zoomable, type LightboxImage } from "~/components/content/Lightbox";

// Shared parts of the two "about" pages (Our Choir, Our Conductor). The text on both is the
// legacy text, verbatim, in the page's blocks; these parts only lay it out. Anything added for
// the layout (year markers, jump links, link cards) is marked data-legacy-ignore so the
// content check (scripts/legacy/diff-content.mjs) compares the legacy text alone.

export const container = "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10";

// "In 1988, on her initiative…" -> 1988: the year a paragraph or list entry opens with (within
// its first words), for the year markers. None when the year comes later in the sentence.
export function leadingYear(text: string): string | undefined {
  const m = text.match(/(?:^|\D)((?:19|20)\d{2})(?!\d)/);
  return m && m.index! <= 40 ? m[1] : undefined;
}

// a block's paragraphs: "\n\n" separates paragraphs inside one legacy block
export const paragraphs = (text: string) => text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

// The page body cut into chapters: each legacy column group ({narrow: N} … {narrow: 0}) that
// opens with a heading is a chapter; groups of photos only are matched to the chapters in order.
export type Chapter = { heading?: string; intro: string[]; list: string[]; outro: string[]; photos: string[] };

export function chaptersOf(blocks: RichBlock[]): Chapter[] {
  const groups: RichBlock[][] = [];
  let cur: RichBlock[] = [];
  for (const b of blocks) {
    if (typeof b === "object" && "narrow" in b) {
      if (cur.length) groups.push(cur);
      cur = [];
    } else cur.push(b);
  }
  if (cur.length) groups.push(cur);

  const isImg = (b: RichBlock) => typeof b === "object" && "img" in b;
  const photoGroups = groups.filter((g) => g.every(isImg)).map((g) => g.map((b) => (b as { img: string }).img));
  const textGroups = groups.filter((g) => !g.every(isImg));

  return textGroups.map((g, i) => {
    const ch: Chapter = { intro: [], list: [], outro: [], photos: photoGroups[i] ?? [] };
    for (const b of g) {
      if (typeof b === "string") (ch.list.length ? ch.outro : ch.intro).push(...paragraphs(b));
      else if ("p" in b) (ch.list.length ? ch.outro : ch.intro).push(...paragraphs(b.p));
      else if ("heading" in b) ch.heading ??= b.heading;
      else if ("list" in b) ch.list.push(...b.list);
      else if ("img" in b) ch.photos.push(b.img);
    }
    return ch;
  });
}

// Inline **bold** in the legacy text (rare on these pages); everything else is plain text.
export function Text({ children }: { children: string }) {
  const parts = children.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((p, i) => (i % 2 ? <strong key={i} className="font-semibold text-ink">{p}</strong> : p))}</>;
}

// A small maroon rule above section headings, as on the festival pages.
export const Rule = ({ light = false }: { light?: boolean }) => (
  <div aria-hidden="true" className={`mb-5 h-1 w-14 rounded-full ${light ? "bg-[#ff8fa6]" : "bg-brand-maroon"}`} />
);

// A vertical five-line stave: the timeline's rail.
function StaveRail({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute top-0 bottom-0 flex w-[17px] justify-between ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="w-px bg-brand-navy/20" />
      ))}
    </span>
  );
}

// A note head on the stave: the marker of each timeline entry.
const NoteHead = () => (
  <svg viewBox="0 0 24 18" aria-hidden="true" className="h-[15px] w-[20px] drop-shadow-[0_2px_4px_rgb(172_46_72/0.35)]">
    <ellipse cx="12" cy="9" rx="10" ry="6.5" transform="rotate(-22 12 9)" className="fill-brand-maroon" />
  </svg>
);

// The milestones as a timeline on a stave: year large on the left (tablet and up) or above the
// entry (phones), a note head on the rail, the legacy sentence beside it.
export function Timeline({ items, label }: { items: string[]; label?: string }) {
  return (
    <div>
      {label && <p className="type-label mb-8 text-brand-maroon">{label}</p>}
      <ol className="relative">
        <StaveRail className="left-[1px] sm:left-[137px] lg:left-[181px]" />
        {items.map((item, i) => {
          const year = leadingYear(item);
          return (
            <li key={i} className="relative grid grid-cols-[19px_1fr] gap-x-5 pb-9 last:pb-0 sm:grid-cols-[112px_19px_1fr] sm:gap-x-6 lg:grid-cols-[148px_19px_1fr] lg:gap-x-8">
              <span
                data-legacy-ignore=""
                aria-hidden="true"
                className="col-start-2 row-start-1 mb-1 block text-[1.75rem] leading-none font-semibold tracking-tight text-brand-navy tabular-nums sm:col-start-1 sm:mb-0 sm:pt-0.5 sm:text-right sm:text-[2.25rem] lg:text-[2.75rem]"
              >
                {year}
              </span>
              <span className="col-start-1 row-start-1 flex justify-center pt-2 sm:col-start-2 sm:pt-3 lg:pt-4">
                <NoteHead />
              </span>
              <p className="type-body col-start-2 row-start-2 max-w-[68ch] text-body [text-wrap:pretty] sm:col-start-3 sm:row-start-1 sm:pt-1 lg:pt-2">
                <Text>{item}</Text>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// A photo that opens in the viewer, cropped to fill its slot.
export function Photo({
  images,
  index,
  sizes,
  locale,
  className = "",
  imgClassName = "",
}: {
  images: LightboxImage[];
  index: number;
  sizes: string;
  locale: Locale;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Zoomable images={images} index={index} locale={locale} className={`rounded-2xl bg-surface-muted shadow-[0_24px_60px_-30px_rgb(15_23_42/0.6)] ring-1 ring-black/5 ${className}`}>
      <img
        {...responsive(images[index].src, sizes)}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${imgClassName}`}
      />
    </Zoomable>
  );
}

// a navigation entry's label, by its address (the menu is translated in all six languages)
export function navLabel(href: string, locale: Locale): string {
  for (const item of primaryNav) for (const c of item.children ?? []) if (c.href === href) return tr(c.label, locale);
  return href;
}

// Closing cards linking to related pages (labels from the menu, so they are always translated).
export function NextPages({ links, locale, heading }: { links: { href: string; kicker: string }[]; locale: Locale; heading: string }) {
  return (
    <section data-legacy-ignore="" className="border-t border-rule bg-surface py-14 lg:py-20">
      <div className={container}>
        <p className="type-label mb-6 text-brand-maroon">{heading}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <Link
              key={l.href}
              to={localizedHref(locale, l.href)}
              className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl bg-brand-navy px-6 py-6 text-white shadow-[0_20px_50px_-28px_rgb(43_40_122/0.9)] transition-colors duration-300 hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:px-8 sm:py-8"
            >
              <span>
                <span className="type-label block text-white/60">{l.kicker}</span>
                <span className="mt-2 block text-[1.25rem] leading-snug font-semibold sm:text-[1.4rem]">{navLabel(l.href, locale)}</span>
              </span>
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path d="M11.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Wording added by the redesign, in the six languages.
export const aboutLabels = {
  since: { en: "Since 1969", el: "Από το 1969", fr: "Depuis 1969", it: "Dal 1969", de: "Seit 1969", es: "Desde 1969" },
  society: {
    en: "Choral Society “Armonia” of Preveza",
    el: "Χορωδιακός Σύλλογος «Αρμονία» Πρέβεζας",
    fr: "Société chorale « Armonia » de Preveza",
    it: "Società corale “Armonia” di Preveza",
    de: "Chorgesellschaft „Armonia“ Preveza",
    es: "Sociedad Coral «Armonia» de Preveza",
  },
  jump: { en: "On this page", el: "Σε αυτή τη σελίδα", fr: "Sur cette page", it: "In questa pagina", de: "Auf dieser Seite", es: "En esta página" },
  more: { en: "Continue", el: "Συνεχίστε", fr: "Continuer", it: "Continua", de: "Weiter", es: "Continuar" },
  choir: { en: "The choir", el: "Η χορωδία", fr: "Le chœur", it: "Il coro", de: "Der Chor", es: "El coro" },
  conductor: { en: "The conductor", el: "Η μαέστρος", fr: "La cheffe", it: "La direttrice", de: "Die Dirigentin", es: "La directora" },
  festival: { en: "The festival", el: "Το φεστιβάλ", fr: "Le festival", it: "Il festival", de: "Das Festival", es: "El festival" },
  photos: { en: "Photos", el: "Φωτογραφίες", fr: "Photos", it: "Foto", de: "Fotos", es: "Fotos" },
} as const;

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-[110px] ${className}`}>
      {children}
    </section>
  );
}
