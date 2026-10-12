import type { CSSProperties, ReactNode } from "react";
import type { Locale, RichBlock } from "~/content/types";
import { useLocale } from "~/lib/locale";
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

const photoLabel = { en: "Open photo", el: "Άνοιγμα φωτογραφίας" } as const;

// Accessible name for an image that is the only link to a page, from its route.
const sections = {
  festival: { en: "Festival", el: "Φεστιβάλ" },
  masterclass: { en: "Masterclass", el: "Masterclass" },
  competition: { en: "Competition", el: "Διαγωνισμός" },
  news: { en: "News", el: "Νέα" },
} as const;
function linkLabel(href: string, locale: Locale) {
  if (/\.(jpe?g|png|webp|gif)$/i.test(href)) return photoLabel[locale];
  const m = href.match(/^@\/(festival|masterclass|competition|news)\/([^/#]+)/);
  return m ? `${sections[m[1] as keyof typeof sections][locale]} ${m[2].replace(/-/g, " ")}` : undefined;
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

const statsLabel = { en: "Participation by country", el: "Συμμετοχές ανά χώρα" } as const;

function StatsTable({ head, rows, locale }: Extract<RichBlock, { stats: unknown }>["stats"] & { locale: Locale }) {
  return (
    // focusable so keyboard users can scroll it sideways on small screens
    <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={statsLabel[locale]}>
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
  | { kind: "row"; img: RichBlock; text: RichBlock[]; imageFirst: boolean };

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
  return merged;
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
        ) : g.kind === "block" ? (
          <Block key={i} block={g.block} locale={locale} dupes={dupes} />
        ) : null,
      )}
    </div>
  );
}
