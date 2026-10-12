import type { CSSProperties, ReactNode } from "react";
import type { Locale, RichBlock } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";
import { responsive, sized } from "~/lib/img";

// "@/festival/2022" is a link to another page of this site, in the current
// language; anything else is used as written.
const resolve = (href: string, locale: Locale) => (href.startsWith("@") ? `/${locale}${href.slice(1)}` : href);

// Inline markup inside a block: [text](url) for links, **text** for bold.
function inline(text: string, locale: Locale): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      m[1] !== undefined ? (
        <a
          key={m.index}
          href={resolve(m[2], locale)}
          className="text-link underline decoration-1 underline-offset-2 transition-colors hover:text-link-hover"
        >
          {inline(m[1], locale)}
        </a>
      ) : (
        <strong key={m.index}>{inline(m[3], locale)}</strong>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const alignClass = { center: "text-center", right: "text-right" } as const;

// Content headings on the site type scale (the page title is the only h1),
// with space above that grows with the level.
const headingClass: Record<number, string> = {
  1: "type-h2 pt-8",
  2: "type-h2 pt-8",
  3: "type-h3 pt-6",
  4: "type-h4 pt-4",
  5: "type-h5 pt-2",
  6: "type-h6",
};
// comfortable line length for running text
const measure = "max-w-[72ch]";
// Justified from tablet width up, with hyphenation in the page language (<html lang>) so word
// gaps stay even; phones keep ragged-right text, where justification would open wide gaps.
const justify = "sm:text-justify sm:hyphens-auto [text-wrap:pretty] [text-justify:inter-word]";

const photoLabel = {
  en: "Open photo",
  el: "Άνοιγμα φωτογραφίας",
  fr: "Ouvrir la photo",
  it: "Apri la foto",
  de: "Foto öffnen",
  es: "Abrir la foto",
} as const;

// Accessible name for an image that is the only link to a page, from its route.
const sections = {
  festival: { en: "Festival", el: "Φεστιβάλ", fr: "Festival", it: "Festival", de: "Festival", es: "Festival" },
  masterclass: { en: "Masterclass", el: "Masterclass", fr: "Masterclass", it: "Masterclass", de: "Meisterkurs", es: "Clase magistral" },
  competition: { en: "Competition", el: "Διαγωνισμός", fr: "Concours", it: "Concorso", de: "Wettbewerb", es: "Concurso" },
  news: { en: "News", el: "Νέα", fr: "Actualités", it: "Notizie", de: "Neuigkeiten", es: "Noticias" },
} as const;
function linkLabel(href: string, locale: Locale) {
  if (/\.(jpe?g|png|webp|gif)$/i.test(href)) return tr(photoLabel, locale);
  const m = href.match(/^@\/(festival|masterclass|competition|news)\/([^/#]+)/);
  return m ? `${tr(sections[m[1] as keyof typeof sections], locale)} ${m[2].replace(/-/g, " ")}` : undefined;
}

// Links that already appear as text in the same blocks: an image linking to the
// same place is a duplicate and is hidden from screen readers and the tab order.
function textHrefs(blocks: RichBlock[]) {
  const out = new Set<string>();
  const scan = (s: string) => { for (const m of s.matchAll(/\]\(([^)\s]+)\)/g)) out.add(m[1]); };
  for (const b of blocks) {
    if (typeof b === "string") scan(b);
    else if ("p" in b) scan(b.p);
    else if ("heading" in b) scan(b.heading);
    else if ("list" in b) b.list.forEach(scan);
  }
  return out;
}

function Block({ block, locale, dupes = new Set<string>() }: { block: RichBlock; locale: Locale; dupes?: Set<string> }) {
  if (typeof block === "string") return <p className={`whitespace-pre-line ${measure} ${justify}`}>{inline(block, locale)}</p>;
  if ("p" in block)
    return (
      <div className={`whitespace-pre-line ${measure} ${block.align === "center" ? "mx-auto" : "ml-auto"} ${alignClass[block.align]}`}>
        {inline(block.p, locale)}
      </div>
    );
  // A list made only of short in-page jump links (e.g. the programme's "Mon 6 · Tue 7 ..." day
  // tabs) reads as a row of pills rather than a column of underlined links.
  const jump = /^\[[^\]]{1,24}\]\(#[^)]+\)$/;
  if ("list" in block && block.list.length > 1 && block.list.every((t) => jump.test(t)))
    return (
      <ul className="flex flex-wrap gap-2">
        {block.list.map((item, j) => {
          const [, label, href] = item.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
          return (
            <li key={j}>
              <a
                href={href}
                className="type-small inline-block rounded-full border border-rule bg-white px-4 py-1.5 font-medium text-body transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    );
  if ("list" in block)
    return (
      <ul
        className={`space-y-2 ${measure} ${block.align === "center" ? "mx-auto" : block.align === "right" ? "ml-auto" : ""} ${block.align ? alignClass[block.align] : ""}`}
      >
        {block.list.map((item, j) => (
          <li key={j} className="whitespace-pre-line">
            {inline(item, locale)}
          </li>
        ))}
      </ul>
    );
  if ("heading" in block) {
    // The page title is the page's <h1>, so legacy h1s render as <h2> at h1 size.
    const level = block.level ?? 3;
    const Tag = `h${Math.max(level, 2)}` as "h2";
    return (
      <Tag className={`whitespace-pre-line ${headingClass[level]} ${block.align ? alignClass[block.align] : ""}`}>
        {inline(block.heading, locale)}
      </Tag>
    );
  }
  if ("img" in block) {
    const size = block.layout === "side" ? "w-[255px] max-w-full" : block.layout === "gallery" ? "h-[184px] w-auto max-w-full" : "h-auto max-w-full";
    const fit = block.layout === "side" ? "255px" : block.layout === "gallery" ? "300px" : "(min-width: 768px) 720px, 100vw";
    const img = <img {...responsive(block.img, fit)} alt="" loading="lazy" className={size} />;
    if (!block.href) return img;
    const href = resolve(block.href, locale);
    if (dupes.has(block.href))
      return (
        <a href={href} tabIndex={-1} aria-hidden="true">
          {img}
        </a>
      );
    return (
      <a href={href} aria-label={linkLabel(block.href, locale)}>
        {img}
      </a>
    );
  }
  if ("anchor" in block) return <span id={block.anchor} className="block" />;
  if ("wide" in block || "narrow" in block) return null;
  return <StatsTable {...block.stats} locale={locale} />;
}

const statsLabel = {
  en: "Participation by country",
  el: "Συμμετοχές ανά χώρα",
  fr: "Participation par pays",
  it: "Partecipazione per paese",
  de: "Teilnahme nach Ländern",
  es: "Participación por países",
} as const;

function StatsTable({ head, rows, locale }: Extract<RichBlock, { stats: unknown }>["stats"] & { locale: Locale }) {
  return (
    // focusable so keyboard users can scroll it sideways on small screens
    <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={tr(statsLabel, locale)}>
      <table className="type-small w-full min-w-[32rem] text-left">
        {head.length > 0 && (
          <thead className="border-b border-rule text-ink">
            <tr>
              {head.map((h, i) => (
                <th key={i} className="py-3 pr-4 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-rule">
              <td className="py-3 pr-4">{r.serial}</td>
              <td className="py-3 pr-4">
                <span className="flex items-center gap-2">
                  {r.flag && <img src={sized(r.flag, 400)} alt="" className="h-4 w-auto" />}
                  {r.country}
                </span>
              </td>
              <td className="py-3 pr-4">{r.visits}</td>
              <td className="w-1/3 py-3">
                <div className="h-1.5 rounded-full bg-surface-muted">
                  <div className="h-1.5 rounded-full bg-brand-navy" style={{ width: `${r.percent}%` }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const isGallery = (b: RichBlock) => typeof b !== "string" && "img" in b && b.layout === "gallery";
const isSide = (b: RichBlock) => typeof b !== "string" && "img" in b && b.layout === "side";
const isHeading = (b: RichBlock) => typeof b !== "string" && "heading" in b;
const isNarrow = (b: RichBlock) => typeof b !== "string" && "narrow" in b;

type Group =
  | { kind: "block"; block: RichBlock }
  | { kind: "narrow"; cols: number; blocks: RichBlock[] }
  | { kind: "columns"; columns: { cols: number; blocks: RichBlock[] }[] }
  | { kind: "gallery"; blocks: RichBlock[] }
  | { kind: "row"; img: RichBlock; text: RichBlock[]; imageFirst: boolean }
  | { kind: "cards"; cards: EditionCardData[] };

// An edition in the Previous Festivals / Previous Masterclasses lists: a legacy column holding the
// poster (linked), a dates line, the title (a link to the same page) and the edition's events.
type EditionCardData = { img: string; href: string; dates: string; title: string; items: string[] };
function asEditionCard(blocks: RichBlock[]): EditionCardData | null {
  const [img, dates, heading, list, ...rest] = blocks;
  if (rest.length || typeof img === "string" || !("img" in img) || !img.href) return null;
  if (typeof dates !== "string" || dates.length > 40) return null;
  if (typeof heading === "string" || !("heading" in heading)) return null;
  const link = heading.heading.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
  if (!link || link[2] !== img.href) return null;
  if (list !== undefined && (typeof list === "string" || !("list" in list))) return null;
  return { img: img.img, href: img.href, dates, title: link[1], items: list && typeof list !== "string" && "list" in list ? list.list : [] };
}

// Consecutive gallery thumbnails become one grid; a portrait ("side" image) and
// the text between the surrounding headings become a two-column row with the
// photo on the same side as on the legacy page.
function group(blocks: RichBlock[]): Group[] {
  const out: Group[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (typeof b !== "string" && "narrow" in b) {
      if (b.narrow === 0) { i++; continue; } // a closing marker on its own
      let j = i + 1;
      while (j < blocks.length && !isNarrow(blocks[j])) j++;
      out.push({ kind: "narrow", cols: b.narrow, blocks: blocks.slice(i + 1, j) });
      i = j + 1;
      continue;
    }
    if (isGallery(b)) {
      const run: RichBlock[] = [];
      while (i < blocks.length && isGallery(blocks[i])) run.push(blocks[i++]);
      out.push({ kind: "gallery", blocks: run });
      continue;
    }
    if (!isHeading(b)) {
      // a run of non-heading blocks containing exactly one portrait
      let j = i;
      while (j < blocks.length && !isHeading(blocks[j]) && !isGallery(blocks[j]) && !isNarrow(blocks[j])) j++;
      const run = blocks.slice(i, j);
      const sides = run.filter(isSide);
      if (sides.length === 1 && run.length > 1) {
        const at = run.indexOf(sides[0]);
        out.push({ kind: "row", img: sides[0], text: run.filter((x) => x !== sides[0]), imageFirst: at === 0 });
        i = j;
        continue;
      }
    }
    out.push({ kind: "block", block: b });
    i++;
  }
  // Neighbouring Bootstrap columns share a row (up to 12 units), as in the legacy grid.
  const merged: Group[] = [];
  for (const g of out) {
    const last = merged[merged.length - 1];
    if (g.kind === "narrow" && last?.kind === "columns" && last.columns.reduce((n, c) => n + c.cols, 0) + g.cols <= 12)
      last.columns.push({ cols: g.cols, blocks: g.blocks });
    else merged.push(g.kind === "narrow" ? { kind: "columns", columns: [{ cols: g.cols, blocks: g.blocks }] } : g);
  }
  // Rows of edition columns become one uniform card grid (the posters differ in shape, so the
  // legacy columns had uneven heights).
  const out2: Group[] = [];
  for (const g of merged) {
    const cards = g.kind === "columns" ? g.columns.map((c) => asEditionCard(c.blocks)) : null;
    if (g.kind !== "columns" || !cards || cards.every((c) => !c)) { out2.push(g); continue; }
    // a row can hold other columns too (Previous Masterclasses: the page title beside the newest
    // edition): those stay a row of their own, above the grid
    const rest = g.columns.filter((_, k) => !cards[k]);
    if (rest.length) out2.push({ kind: "columns", columns: rest });
    const found = cards.filter((c): c is EditionCardData => !!c);
    const last = out2[out2.length - 1];
    if (last?.kind === "cards") last.cards.push(...found);
    else out2.push({ kind: "cards", cards: found });
  }
  return out2;
}

const viewLabel = {
  en: "View page",
  el: "Δείτε τη σελίδα",
  fr: "Voir la page",
  it: "Vai alla pagina",
  de: "Zur Seite",
  es: "Ver la página",
} as const;

// One edition as a card: the poster on a fixed 4:5 stage over a blurred copy of itself (every
// poster whole, every card the same size), the dates as a chip, the title, the edition's events,
// and the whole card as one link.
function EditionCard({ card, locale }: { card: EditionCardData; locale: Locale }) {
  return (
    <a
      href={resolve(card.href, locale)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgb(15_23_42/0.06),0_4px_16px_rgb(15_23_42/0.06)] ring-1 ring-rule transition-all duration-300 hover:shadow-[0_2px_4px_rgb(15_23_42/0.06),0_18px_40px_rgb(15_23_42/0.14)] hover:ring-brand-navy/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy-dark">
        <img src={sized(card.img, 400)} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl" />
        <img
          {...responsive(card.img, "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw")}
          alt=""
          loading="lazy"
          className="relative h-full w-full object-contain p-3 drop-shadow-[0_10px_24px_rgb(0_0_0/0.35)] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <p className="type-caption absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-semibold text-brand-maroon shadow-sm backdrop-blur">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {card.dates}
        </p>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <div className="mb-3 h-0.5 w-8 bg-brand-maroon transition-all duration-300 group-hover:w-14" aria-hidden="true" />
        <h4 className="type-h5 text-ink transition-colors group-hover:text-brand-navy">{card.title}</h4>
        {card.items.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {card.items.map((it) => (
              <li key={it} className="type-small flex gap-2.5 text-muted">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-brand-maroon/70" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
        )}
        <div className="min-h-5 flex-1" aria-hidden="true" />
        <p data-legacy-ignore="" className="type-label inline-flex items-center gap-1.5 border-t border-rule pt-4 font-semibold tracking-wide text-brand-navy uppercase">
          {tr(viewLabel, locale)}
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </p>
      </div>
    </a>
  );
}

export function RichText({ paragraphs }: { paragraphs: RichBlock[] }) {
  const locale = useLocale();
  const dupes = textHrefs(paragraphs);
  return (
    <div className="space-y-4">
      {group(paragraphs).map((g, i) =>
        g.kind === "columns" ? (
          // Bootstrap col-lg-N columns of the legacy 1140px container; a lone column is centred
          <div key={i} className="-mx-[15px] flex flex-wrap justify-center">
            {g.columns.map((c, j) => (
              <div
                key={j}
                className="w-full px-[15px] lg:w-[var(--col)]"
                style={{ "--col": `${(c.cols / 12) * 100}%` } as CSSProperties}
              >
                <RichText paragraphs={c.blocks} />
              </div>
            ))}
          </div>
        ) : g.kind === "gallery" ? (
          // legacy: justified rows of ~184px-high photos at their natural width
          <div key={i} className="flex flex-wrap justify-center gap-[30px]">
            {g.blocks.map((b, j) => (
              <Block key={j} block={b} locale={locale} dupes={dupes} />
            ))}
          </div>
        ) : g.kind === "row" ? (
          <div key={i} className={`flex flex-col gap-[30px] md:items-start ${g.imageFirst ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="shrink-0">
              <Block block={g.img} locale={locale} dupes={dupes} />
            </div>
            <div className="min-w-0 flex-1 space-y-4">
              {g.text.map((b, j) => (
                <Block key={j} block={b} locale={locale} dupes={dupes} />
              ))}
            </div>
          </div>
        ) : g.kind === "cards" ? (
          <ul key={i} className="!mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {g.cards.map((c) => (
              <li key={c.href}>
                <EditionCard card={c} locale={locale} />
              </li>
            ))}
          </ul>
        ) : g.kind === "block" ? (
          <Block key={i} block={g.block} locale={locale} dupes={dupes} />
        ) : null,
      )}
    </div>
  );
}
