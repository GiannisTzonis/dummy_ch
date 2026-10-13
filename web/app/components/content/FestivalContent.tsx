import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { Locale, RichBlock } from "~/content/types";
import { localizedHref, useLocale, tr } from "~/lib/locale";
import { RichText } from "./RichText";
import { SectionNav, type NavSection } from "./SectionNav";
import { LightboxProvider, Zoomable, type LightboxImage } from "./Lightbox";
import type { FestivalResults } from "~/content/festival-results";
import { responsive, sized } from "~/lib/img";

type Localized = { en: RichBlock[]; el: RichBlock[] };
type Heading = Extract<RichBlock, { heading: string }>;
type Img = Extract<RichBlock, { img: string }>;

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const slug = (s: string, i: number) =>
  `s-${i}-${plain(s).toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 40)}`;

const asHeading = (b: RichBlock | undefined): Heading | null => (b && typeof b !== "string" && "heading" in b ? b : null);
const asImg = (b: RichBlock | undefined): Img | null => (b && typeof b !== "string" && "img" in b ? b : null);
const levelOf = (h: Heading) => h.level ?? 3;
// The text the layout reads to recognise a heading ("Jury", "Participating Choirs", weekdays...):
// on a translated page the English it was translated from, so every language is laid out alike.
const srcText = (h: Heading) => plain(h.src ?? h.heading);
const isGallery = (b: RichBlock) => asImg(b)?.layout === "gallery";
const isAnchor = (b: RichBlock) => typeof b !== "string" && "anchor" in b;
const isStats = (b: RichBlock) => typeof b !== "string" && "stats" in b;

// Which headings start a section (and get an entry in the section bar): level-1 headings and
// centred level-2 headings -- the legacy pages' section titles. Choir names and programme days are
// h2s too, but never centred. Pages with fewer than three such titles also use centred h3s.
function sectionStarts(blocks: RichBlock[]) {
  const pick = (strict: boolean) =>
    blocks.flatMap((b, i) => {
      const h = asHeading(b);
      if (!h) return [];
      const lvl = levelOf(h);
      const ok = lvl === 1 || (lvl === 2 && h.align === "center") || (!strict && lvl === 3 && h.align === "center" && srcText(h).length <= 40);
      return ok ? [i] : [];
    });
  const strict = pick(true);
  return strict.length >= 3 ? strict : pick(false);
}

// A one-line dates block printed under the title on the legacy pages, e.g. "4 - 7 July 2019".
function isDates(b: RichBlock | undefined) {
  const t = typeof b === "string" ? b : b && "list" in b && b.list.length === 1 ? b.list[0] : null;
  return !!t && t.length < 60 && /\d{4}/.test(t) && !/[[*]/.test(t);
}

// Card bodies are set flush left: the legacy centring/right alignment was page-column styling.
const unalign = (blocks: RichBlock[]): RichBlock[] =>
  blocks.map((b) => {
    if (typeof b === "string") return b;
    if ("p" in b) return b.p;
    if ("align" in b) {
      const { align: _, ...rest } = b as Heading;
      return rest as RichBlock;
    }
    return b;
  });

// ---------------------------------------------------------------------------------------------
// Section body layout. A section is cut into parts:
//   people     consecutive name + portrait + biography entries (the jury) -> profile cards
//   ensembles  consecutive name + photo + text entries (participating choirs) -> photo cards
//   cards      2+ consecutive heading + text/list entries (medals, categories, rules) -> card masonry
//   gallery    consecutive gallery photos -> uniform thumbnail grid
//   flow       everything else, as running text
type Entry = { heading: Heading; photo?: Img; body: RichBlock[]; anchors: RichBlock[]; ids: string[] };
type Part =
  | { kind: "flow"; blocks: RichBlock[] }
  | { kind: "people"; entries: Entry[] }
  | { kind: "ensembles"; entries: Entry[] }
  | { kind: "cards"; entries: Entry[] }
  | { kind: "logos"; groups: LogoGroup[] }
  | { kind: "gallery"; blocks: RichBlock[] };

// the entry that starts at heading i: blocks up to the next heading of the same or a higher level
function entryAt(blocks: RichBlock[], i: number) {
  const h = asHeading(blocks[i])!;
  let k = i + 1;
  while (k < blocks.length) {
    const hk = asHeading(blocks[k]);
    if ((hk && levelOf(hk) <= levelOf(h)) || isGallery(blocks[k]) || isStats(blocks[k])) break;
    k++;
  }
  return { heading: h, body: blocks.slice(i + 1, k), end: k };
}

// the entry's photo: an image among its first three blocks (some pages put a place line first)
// (a jury portrait can also come after the biography, on the side the legacy page showed it)
const photoOf = (body: RichBlock[]) =>
  body.map(asImg).find((m) => m?.layout === "side") ??
  body.slice(0, 3).map(asImg).find((m) => m && m.layout !== "gallery") ??
  undefined;
const textLength = (body: RichBlock[]) =>
  body.reduce((n, b) => n + (typeof b === "string" ? b.length : "p" in b ? b.p.length : "list" in b ? b.list.join(" ").length : "heading" in b ? b.heading.length : 0), 0);
const isCardEntry = (body: RichBlock[]) =>
  body.some((b) => !asHeading(b) && !isAnchor(b)) && body.every((b) => !asImg(b) && !isStats(b));

// a group label printed in capitals, e.g. "CO-ORGANISERS" / "ΣΥΝΔΙΟΡΓΑΝΩΣΗ"
const isLabel = (b: RichBlock | undefined): b is string =>
  typeof b === "string" && b.length < 40 && /\p{L}/u.test(b) && b === b.toUpperCase() && b !== b.toLowerCase();

type LogoGroup = { labels: string[]; items: { img: Img; caption: string }[] };
// Partner logos: capital group labels, each followed by logo + caption pairs (3 logos or more).
function logosAt(blocks: RichBlock[], i: number): { groups: LogoGroup[]; end: number } | null {
  const groups: LogoGroup[] = [];
  let cur: LogoGroup | null = null;
  let j = i, end = i, n = 0;
  while (j < blocks.length) {
    const b = blocks[j];
    if (isLabel(b)) {
      if (!cur || cur.items.length) groups.push((cur = { labels: [], items: [] }));
      cur.labels.push(b);
      j++;
      continue;
    }
    const m = asImg(b), cap = blocks[j + 1];
    if (m && !m.layout && typeof cap === "string" && cap.length < 60 && !isLabel(cap)) {
      if (!cur) groups.push((cur = { labels: [], items: [] }));
      cur.items.push({ img: m, caption: cap });
      j += 2;
      end = j;
      n++;
      continue;
    }
    break;
  }
  return n >= 3 ? { groups: groups.filter((g) => g.items.length), end } : null;
}

// where a run of anchors closing a list of blocks starts
const anchorTail = (list: RichBlock[]) => {
  let k = list.length;
  while (k > 0 && isAnchor(list[k - 1])) k--;
  return k;
};
const anchorId = (b: RichBlock) => (b as { anchor: string }).anchor;

function parts(blocks: RichBlock[]): Part[] {
  const out: Part[] = [];
  let flow: RichBlock[] = [];
  const flush = () => {
    if (flow.length) out.push({ kind: "flow", blocks: flow });
    flow = [];
  };
  // In-page targets (the programme's "Mon 6", "Tue 7" ...) are anchors placed just before the
  // heading they introduce, so they close the previous entry's body (or the text before the first
  // entry). Cards are laid out in grids and columns, where such an anchor would sit at the end of
  // the wrong card: each entry takes the anchors before its heading as its own ids, and the
  // anchors after the last entry go back into the flow after the cards.
  const bindAnchors = (run: { body: RichBlock[] }[], n: number) => {
    const bodies = run.slice(0, n).map((e) => e.body);
    const ids: string[][] = [flow.slice(anchorTail(flow)).map(anchorId)];
    flow = flow.slice(0, anchorTail(flow));
    for (let k = 1; k < n; k++) {
      const prev = bodies[k - 1];
      ids.push(prev.slice(anchorTail(prev)).map(anchorId));
      bodies[k - 1] = prev.slice(0, anchorTail(prev));
    }
    const last = bodies[n - 1];
    const after = last.slice(anchorTail(last));
    bodies[n - 1] = last.slice(0, anchorTail(last));
    return { ids, bodies, after };
  };
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (isGallery(b)) {
      flush();
      const run: RichBlock[] = [];
      while (i < blocks.length && (isGallery(blocks[i]) || isAnchor(blocks[i]))) run.push(blocks[i++]);
      out.push({ kind: "gallery", blocks: run });
      continue;
    }
    const logos = logosAt(blocks, i);
    if (logos) {
      flush();
      out.push({ kind: "logos", groups: logos.groups });
      i = logos.end;
      continue;
    }
    const h = asHeading(b);
    if (h) {
      // consecutive entries at this heading level
      const run: (ReturnType<typeof entryAt> & { photo?: Img })[] = [];
      let j = i;
      while (j < blocks.length && asHeading(blocks[j]) && levelOf(asHeading(blocks[j])!) === levelOf(h)) {
        const e = entryAt(blocks, j);
        run.push({ ...e, photo: photoOf(e.body) });
        j = e.end;
      }
      const photos = run.findIndex((e) => !e.photo);
      const nPhoto = photos < 0 ? run.length : photos;
      if (nPhoto >= 2) {
        const bound = bindAnchors(run, nPhoto);
        flush();
        const entries = run.slice(0, nPhoto).map(({ heading, photo }, k) => {
          const rest = bound.bodies[k].filter((x) => x !== photo);
          // other in-page targets stay reachable: kept at the top of the card or moved after the grid
          return {
            heading,
            photo,
            body: rest.filter((x) => !isAnchor(x) || x === rest[0]),
            anchors: rest.filter((x, j) => isAnchor(x) && j > 0),
            ids: bound.ids[k],
          };
        });
        // the last entry runs on into whatever follows the list on the legacy page (e.g. the
        // co-organisers' logos): that part, from the next photo and its caps label, leaves the card
        const last = entries[entries.length - 1];
        let spill: RichBlock[] = [];
        const next = last.body.findIndex((x) => asImg(x));
        if (next > 0) {
          let cut = next;
          while (cut > 1 && isLabel(last.body[cut - 1])) cut--;
          spill = last.body.slice(cut);
          last.body = last.body.slice(0, cut);
        }
        out.push(photo(entries) === "side" ? { kind: "people", entries } : { kind: "ensembles", entries });
        const anchors = entries.flatMap((e) => e.anchors);
        i = run[nPhoto - 1].end;
        blocks = [...blocks.slice(0, i), ...anchors, ...spill, ...bound.after, ...blocks.slice(i)];
        continue;
      }
      const cardRun = run.findIndex((e) => !isCardEntry(e.body));
      let nCards = cardRun < 0 ? run.length : cardRun;
      // programme days form their own group: the headings after them (venues, notes) are not days
      if (weekday.test(srcText(h))) {
        const days = run.findIndex((e) => !weekday.test(srcText(e.heading)));
        if (days >= 0) nCards = Math.min(nCards, days);
      }
      if (nCards >= 2) {
        const bound = bindAnchors(run, nCards);
        flush();
        out.push({ kind: "cards", entries: run.slice(0, nCards).map(({ heading }, k) => ({ heading, body: bound.bodies[k], anchors: [], ids: bound.ids[k] })) });
        i = run[nCards - 1].end;
        blocks = [...blocks.slice(0, i), ...bound.after, ...blocks.slice(i)];
        continue;
      }
    }
    flow.push(b);
    i++;
  }
  flush();
  return out;
}
const photo = (entries: Entry[]) => (entries.every((e) => e.photo?.layout === "side") ? "side" : "plain");

// ---------------------------------------------------------------------------------------------

const moreLabel = {
  en: ["Read more", "Show less"],
  el: ["Περισσότερα", "Λιγότερα"],
  fr: ["Lire la suite", "Réduire"],
  it: ["Leggi di più", "Mostra meno"],
  de: ["Weiterlesen", "Weniger anzeigen"],
  es: ["Leer más", "Mostrar menos"],
} as const;

// Cards in a two-column grid open and close together with their row neighbour, so a row never
// shows one long card beside a clipped one. `wide` is the media query at which the grid has two
// columns; below it every card is its own row.
function useRowToggle(wide: string) {
  const [cols, setCols] = useState(1);
  const [opened, setOpened] = useState<number[]>([]);
  useEffect(() => {
    const mq = window.matchMedia(wide);
    const update = () => setCols(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [wide]);
  const row = (i: number) => Math.floor(i / cols);
  const isOpen = (i: number) => opened.some((j) => row(j) === row(i));
  const toggle = (i: number) => setOpened((o) => (isOpen(i) ? o.filter((j) => row(j) !== row(i)) : [...o, i]));
  return { isOpen, toggle };
}

// Text clipped to a fixed height with a "Read more" toggle, so cards in a row line up. The full
// text is always in the page (screen readers and search engines get all of it). `open`/`onToggle`
// let a grid open a whole row at once.
function Clamp({ height, children, locale, open: openProp, onToggle }: { height: string; children: ReactNode; locale: Locale; open?: boolean; onToggle?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [openSelf, setOpenSelf] = useState(false);
  const open = openProp ?? openSelf;
  const setOpen = (v: boolean) => (onToggle ? onToggle() : setOpenSelf(v));
  const [overflows, setOverflows] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || open) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);
  const clipped = !open && overflows;
  return (
    <div className="flex flex-1 flex-col">
      <div
        ref={ref}
        id={id}
        style={open ? undefined : { maxHeight: height }}
        className={`overflow-hidden ${clipped ? "[mask-image:linear-gradient(to_bottom,#000_65%,transparent)]" : ""}`}
      >
        {children}
      </div>
      {/* a row neighbour whose text already fits gets no toggle when its row opens */}
      {overflows && (
        <button
          type="button"
          data-legacy-ignore=""
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
          className="type-label mt-auto inline-flex items-center self-start pt-3 gap-1.5 font-semibold tracking-wide text-brand-navy uppercase hover:text-brand-maroon"
        >
          {tr(moreLabel, locale)[open ? 1 : 0]}
          <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="currentColor" aria-hidden="true">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </button>
      )}
    </div>
  );
}

// A card photo that opens in the photo viewer (with the rest of its group). A photo that linked
// to another page on the legacy site keeps that link instead.
function Photo({ img, group, index, label, locale, className, sizes }: { img: Img; group: LightboxImage[]; index: number; label: string; locale: Locale; className: string; sizes: string }) {
  const image = <img {...responsive(img.img, sizes)} alt="" loading="lazy" className={`${className} bg-surface-muted transition-transform duration-300 group-hover:scale-[1.03]`} />;
  if (img.href && !isImageFile(img.href))
    return (
      <a href={img.href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
        {image}
      </a>
    );
  return (
    <Zoomable images={group} index={index} label={label} locale={locale} className="shrink-0 rounded-lg">
      {image}
    </Zoomable>
  );
}
const isImageFile = (href: string) => /\.(jpe?g|png|webp|gif)$/i.test(href);
const viewerGroup = (entries: Entry[]): LightboxImage[] =>
  entries.map((e) => ({ src: e.photo!.href && isImageFile(e.photo!.href) ? e.photo!.href : e.photo!.img, caption: plain(e.heading.heading) }));

// Jury: two columns of profile cards, portrait at a fixed 4:5 size beside name and biography.
function People({ entries, locale }: { entries: Entry[]; locale: Locale }) {
  const group = viewerGroup(entries);
  const rows = useRowToggle("(min-width: 80rem)");
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {entries.map((e, i) => (
        <article key={i} id={e.ids[0]} className="flex flex-col gap-5 rounded-xl border border-rule bg-white p-5 sm:flex-row sm:p-6">
          {e.ids.slice(1).map((id) => <span key={id} id={id} />)}
          <Photo img={e.photo!} group={group} index={i} label={group[i].caption!} locale={locale} sizes="176px" className="aspect-[4/5] w-36 rounded-lg object-cover object-top sm:w-44" />
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="type-h4 text-ink">{plain(e.heading.heading)}</h3>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-brand-maroon" aria-hidden="true" />
            <Clamp height="11.5rem" locale={locale} open={rows.isOpen(i)} onToggle={() => rows.toggle(i)}>
              <div className="type-small text-body">
                <RichText paragraphs={unalign(e.body)} />
              </div>
            </Clamp>
          </div>
        </article>
      ))}
    </div>
  );
}

// Participating choirs: two columns of cards with the group photo at one 16:9 size.
function Ensembles({ entries, locale }: { entries: Entry[]; locale: Locale }) {
  const group = viewerGroup(entries);
  const rows = useRowToggle("(min-width: 48rem)");
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {entries.map((e, i) => (
        <article key={i} id={e.ids[0]} className="flex flex-col overflow-hidden rounded-xl border border-rule bg-white">
          {e.ids.slice(1).map((id) => <span key={id} id={id} />)}
          <Photo img={e.photo!} group={group} index={i} label={group[i].caption!} locale={locale} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9] w-full rounded-none object-cover" />
          <div className="flex flex-1 flex-col p-6 lg:p-7">
            <h3 className="type-h4 text-ink">{plain(e.heading.heading)}</h3>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-brand-maroon" aria-hidden="true" />
            <Clamp height="10rem" locale={locale} open={rows.isOpen(i)} onToggle={() => rows.toggle(i)}>
              <div className="type-small text-body">
                <RichText paragraphs={unalign(e.body)} />
              </div>
            </Clamp>
          </div>
        </article>
      ))}
    </div>
  );
}

// Short headed entries (medal categories, competition categories, rules): a masonry of cards.
// (letter lookarounds, not \b: \b only knows Latin letters, so it never matched the Greek days)
const weekday = /(?<!\p{L})(monday|tuesday|wednesday|thursday|friday|saturday|sunday|δευτέρα|τρίτη|τετάρτη|πέμπτη|παρασκευή|σάββατο|κυριακή)(?!\p{L})/iu;

function Cards({ entries }: { entries: Entry[] }) {
  // programme days stay in date order: consecutive short days side by side, a long day as one
  // full-width card with its events in columns
  if (entries.every((e) => weekday.test(srcText(e.heading)))) {
    const long = (e: Entry) => textLength(e.body) > 1200;
    const rows: Entry[][] = [];
    for (const e of entries) {
      const last = rows[rows.length - 1];
      if (last && !long(e) && !long(last[0])) last.push(e);
      else rows.push([e]);
    }
    const day = (e: Entry, i: number) => (
      <article key={i} id={e.ids[0]} className="rounded-xl border border-rule bg-white p-5 sm:p-6 lg:p-8">
        {e.ids.slice(1).map((id) => <span key={id} id={id} />)}
        <h3 className="type-h4 text-ink">{plain(e.heading.heading)}</h3>
        <div className="mt-2 mb-5 h-0.5 w-8 bg-brand-maroon" aria-hidden="true" />
        <div
          className={`type-small text-body ${long(e) ? "gap-10 lg:columns-2 2xl:columns-3 [&_h3]:break-after-avoid [&_h4]:break-after-avoid [&_li]:break-inside-avoid [&_p]:break-inside-avoid" : ""}`}
        >
          <RichText paragraphs={unalign(e.body)} />
        </div>
      </article>
    );
    return (
      <div className="space-y-5">
        {rows.map((r, i) =>
          r.length > 1 ? (
            <div key={i} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {r.map(day)}
            </div>
          ) : (
            day(r[0], i)
          ),
        )}
      </div>
    );
  }
  const short = entries.reduce((n, e) => n + textLength(e.body), 0) / entries.length < 500;
  return (
    <div className={`gap-5 md:columns-2 ${short ? "xl:columns-3" : ""}`}>
      {entries.map((e, i) => (
        <article key={i} id={e.ids[0]} className="mb-5 break-inside-avoid rounded-xl border border-rule bg-white p-5 sm:p-6">
          {e.ids.slice(1).map((id) => <span key={id} id={id} />)}
          <h3 className="type-h5 text-ink">{plain(e.heading.heading)}</h3>
          <div className="mt-2 mb-4 h-0.5 w-8 bg-brand-maroon" aria-hidden="true" />
          <div className="type-small text-body">
            <RichText paragraphs={unalign(e.body)} />
          </div>
        </article>
      ))}
    </div>
  );
}

// Partners: one strip, a column per group (label over its logos).
function Logos({ groups }: { groups: LogoGroup[] }) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-10 rounded-xl border border-rule bg-white p-6 lg:p-8">
      {groups.map((g, i) => (
        <div key={i}>
          {g.labels.length > 0 && (
            <p className="type-label mb-4 flex flex-wrap gap-x-3 border-b border-rule pb-2 font-semibold tracking-wider text-muted">
              {g.labels.map((l, k) => (
                <span key={k} className={k ? "border-l border-rule pl-3" : ""}>
                  {l}
                </span>
              ))}
            </p>
          )}
          <ul className="flex flex-wrap gap-x-8 gap-y-5">
            {g.items.map((it, j) => (
              <li key={j} className="flex w-32 flex-col items-center gap-2 text-center">
                <img src={sized(it.img.img, 400)} alt="" loading="lazy" className="h-16 w-auto max-w-full object-contain" />
                <span className="type-caption text-body">{it.caption}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Gallery({ blocks, locale }: { blocks: RichBlock[]; locale: Locale }) {
  const imgs = blocks.map(asImg).filter((m): m is Img => !!m);
  const group: LightboxImage[] = imgs.map((m) => ({ src: m.href && isImageFile(m.href) ? m.href : m.img }));
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {blocks.map((b, i) => {
        const m = asImg(b);
        if (!m) return <RichText key={i} paragraphs={[b]} />;
        const k = imgs.indexOf(m);
        const img = <img {...responsive(m.img, "(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw")} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />;
        return m.href && !isImageFile(m.href) ? (
          <a key={i} href={m.href} className="block overflow-hidden rounded-lg">
            {img}
          </a>
        ) : (
          <Zoomable key={i} images={group} index={k} label={`${k + 1}`} locale={locale} className="rounded-lg">
            {img}
          </Zoomable>
        );
      })}
    </div>
  );
}

function SectionBody({ blocks, locale }: { blocks: RichBlock[]; locale: Locale }) {
  return (
    <div className="space-y-10">
      {parts(blocks).map((p, i) =>
        p.kind === "people" ? (
          <People key={i} entries={p.entries} locale={locale} />
        ) : p.kind === "ensembles" ? (
          <Ensembles key={i} entries={p.entries} locale={locale} />
        ) : p.kind === "cards" ? (
          <Cards key={i} entries={p.entries} />
        ) : p.kind === "logos" ? (
          <Logos key={i} groups={p.groups} />
        ) : p.kind === "gallery" ? (
          <Gallery key={i} blocks={p.blocks} locale={locale} />
        ) : (
          // the page's full width, like the hero and the section title: text starts and ends with them
          <div key={i} className="[&_ol]:max-w-none [&_p]:max-w-none [&_ul]:max-w-none">
            <RichText paragraphs={p.blocks} />
          </div>
        ),
      )}
    </div>
  );
}

const container = "mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10";

// Section titles by role, in both languages (legacy spellings included)
const JURY = /jury|i\.j\.c|κριτ|διαιτησ|mentors|μέντορ/i;
const CHOIRS = /participating choirs|choir'?s participations|συμμετοχές χορωδιών|συμμετέχουσες χορωδίες|demonstrat\w* choirs?|υπο?δειγματικ|επιδεικτικ|δειγματικ/i;
const CHOIR_NAME = /choir|chor|kórus|ensemble|χορωδ|σύνολο|["“”«»]/i;
const REPERTOIRE = /repertoire|ρεπερτόριο/i;
const PARTICIPANTS = /competing conductors|συμμετέχοντες διευθυντές|participating conductors|competitors|διαγωνιζόμενοι/i;
const DATE_LINE = /\d{1,2}\s*[–-]\s*\d{1,2}\s+\p{L}+\s+(19|20)\d{2}/u;
const NOT_CHOIR = /repertoire|ρεπερτ|schedule|programme|πρόγραμμ|medals|μετάλλι|competition|διαγωνισμ/i;

// Competition results (festival-results.ts): new content, not on the legacy page, so the whole
// section is skipped by the content check. A deep-blue band in the colours of the result images;
// pages are numbered, open in the viewer as one series, and a short last row is centred.
function Results({ results, locale }: { results: FestivalResults; locale: Locale }) {
  const images = results.slides.map((s) => ({ src: s.src, caption: tr(s.caption, locale) }));
  return (
    <section id="results" data-legacy-ignore="" className="relative isolate overflow-hidden bg-brand-navy-dark py-14 text-white lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgb(76_72_168/0.55),transparent_60%)]" />
      <div className={container}>
        <div className="mb-10 max-w-[70ch] lg:mb-12">
          <h2 className="type-h2 text-white">
            <span className="mr-3 inline-block h-6 w-1 translate-y-0.5 rounded-full bg-brand-maroon align-baseline" aria-hidden="true" />
            {tr(results.heading, locale)}
          </h2>
          <p className="type-lead mt-4 text-white/80">{tr(results.intro, locale)}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {results.slides.map((s, i) => (
            <li key={s.src} className="w-[calc(50%-0.5rem)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]">
              <figure>
                <Zoomable images={images} index={i} label={tr(s.caption, locale)} locale={locale} className="rounded-lg shadow-[0_24px_50px_-24px_rgb(0_0_0/0.7)] ring-1 ring-white/15">
                  <img {...responsive(s.src, "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw")} alt={tr(s.caption, locale)} loading="lazy" width={1080} height={1350} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </Zoomable>
                <figcaption className="type-small mt-3 flex gap-2 text-white/80">
                  <span className="font-semibold text-white tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{tr(s.caption, locale)}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FestivalContent({
  title,
  heroText,
  content,
  aside,
  results,
  mentorsLabel,
  others,
}: {
  title: string;
  heroText?: string;
  content: Localized;
  aside?: Localized;
  results?: FestivalResults;
  // masterclass pages: the heading for mentors listed without a section of their own
  mentorsLabel?: { en: string; el: string };
  // navigation before the footer: every other edition of this kind (festivals, masterclasses or
  // competitions), newest first
  others?: { heading: { en: string; el: string }; items: { href: string; title: string; subtitle?: string; image?: string }[] };
}) {
  const locale = useLocale();
  // the legacy narrow-column markers only limited the page width; this layout uses the full width
  const blocks = tr(content, locale).filter((b) => typeof b === "string" || !("narrow" in b));
  const split = blocks.findIndex((b) => typeof b !== "string" && "wide" in b);
  // pages without the marker (the composition competitions): the overview ends at the first
  // section title
  const firstSection = split < 0 ? (sectionStarts(blocks)[0] ?? blocks.length) : -1;
  let top = split < 0 ? blocks.slice(0, firstSection) : blocks.slice(0, split);
  const wide = split < 0 ? blocks.slice(firstSection) : blocks.slice(split + 1);

  // header pieces: dates chip and poster (the first full-size photo of the top part); a first
  // line repeating the title (2026) is the title itself
  if (typeof top[0] === "string" && plain(top[0]) === plain(title)) top = top.slice(1);
  const datesBlock = isDates(top[0]) ? top[0] : undefined;
  if (datesBlock) top = top.slice(1);
  const posterAt = top.findIndex((b) => asImg(b) && !(b as Img).layout);
  const poster = posterAt >= 0 ? (top[posterAt] as Img) : undefined;
  if (poster) top = top.filter((_, i) => i !== posterAt);
  let dates = datesBlock ? (typeof datesBlock === "string" ? datesBlock : (datesBlock as { list: string[] }).list[0]) : null;

  // sections of the full-width part
  const starts = sectionStarts(wide);
  const sections: { id?: string; heading?: Heading; blocks: RichBlock[]; added?: boolean }[] = [];
  if (starts[0] !== 0) sections.push({ blocks: wide.slice(0, starts[0] ?? wide.length) });
  starts.forEach((s, k) => {
    const h = asHeading(wide[s])!;
    sections.push({ id: slug(h.heading, k), heading: h, blocks: wide.slice(s + 1, starts[k + 1] ?? wide.length) });
  });
  // no introduction above the legacy page's main column (2026), but plain text opening it: that
  // text is the introduction, beside the poster
  if (top.length === 0 && sections[0] && !sections[0].id) {
    const lead = sections[0].blocks;
    const k = lead.findIndex((b) => asImg(b) || asHeading(b) || isStats(b));
    // anchors just before the first heading introduce that heading: they stay with it
    const cut = k < 0 ? lead.length : anchorTail(lead.slice(0, k));
    top = lead.slice(0, cut);
    if (cut === lead.length) sections.shift();
    else sections[0] = { blocks: lead.slice(cut) };
  }
  // the main column opens with its own title and a dates line as headings (Masterclass 2026):
  // they introduce the page, so they go beside the poster with the text under them
  const h0 = sections[0]?.heading, h1 = sections[1]?.heading;
  if (top.length === 0 && h0 && levelOf(h0) === 1 && sections[0].blocks.length === 0 && h1 && DATE_LINE.test(srcText(h1))) {
    if (!dates) dates = plain(h1.heading);
    top = [{ heading: h0.heading, level: 3 }, ...(dates === plain(h1.heading) ? [] : [plain(h1.heading)]), ...sections[1].blocks];
    sections.splice(0, 2);
  }
  // pages whose mentors have no section of their own (Masterclass 2017-2019: they follow the
  // seminar topics): the run of person entries closing a section becomes a "Mentors" section
  if (mentorsLabel && !sections.some((s) => s.heading && JURY.test(srcText(s.heading)))) {
    for (let i = 0; i < sections.length; i++) {
      const b = sections[i].blocks;
      const people = b.flatMap((x, j) => (asHeading(x) && levelOf(asHeading(x)!) === 3 && asHeading(x)!.align !== "center" ? [j] : []));
      // at least two people, and nothing but people's entries after the first one
      if (people.length < 2 || !b.slice(people[0]).every((x, j) => !asHeading(x) || people.includes(people[0] + j))) continue;
      sections.splice(i, 1, { ...sections[i], blocks: b.slice(0, people[0]) }, { id: "mentors", heading: { heading: tr(mentorsLabel, locale), level: 2 }, blocks: b.slice(people[0]), added: true });
      break;
    }
  }
  // single choirs set as section titles (Festival 2018, Masterclass 2019/2022, Conducting 2025)
  // belong to the section above them: they become entries inside it
  for (let i = 1; i < sections.length; i++) {
    const prev = sections[i - 1], h = sections[i].heading;
    const prevTitle = prev.heading ? srcText(prev.heading) : "";
    if (!h || !prev.heading) continue;
    const t = srcText(h);
    // under a repertoire section any short title is a choir's name ("Voci Contra Tempo")
    const named = CHOIR_NAME.test(t) || (REPERTOIRE.test(prevTitle) && t.length <= 40);
    if (!named || NOT_CHOIR.test(t) || JURY.test(t) || CHOIRS.test(t) || PARTICIPANTS.test(t)) continue;
    prev.blocks = [...prev.blocks, { ...h, level: 3 }, ...sections[i].blocks];
    sections.splice(i--, 1);
  }
  // Order after the overview: the jury (masterclasses: the mentors) first, then the participants
  // (competitions: the competing conductors), then the participating (masterclasses/competitions:
  // demonstrative) choirs, then everything else in the legacy order.
  const roleOf = (s: (typeof sections)[number]) => {
    const t = s.heading ? srcText(s.heading) : "";
    if (JURY.test(t) && !/evaluation|αξιολ[οό]γηση/i.test(t)) return "jury"; // not the marking rules
    if (PARTICIPANTS.test(t)) return "participants";
    if (CHOIRS.test(t)) return "choirs";
    return "rest";
  };
  const roles = sections.map(roleOf);
  const ordered = (["jury", "participants", "choirs", "rest"] as const).flatMap((r) => sections.filter((_, i) => roles[i] === r));
  const leading = sections.filter((_, i) => roles[i] !== "rest").length; // jury, participants, choirs
  sections.splice(0, sections.length, ...ordered);

  // a section with only a line or two of text and no headings/photos of its own
  const brief = (s: (typeof sections)[number]) =>
    !!s.id && textLength(s.blocks) < 320 && s.blocks.every((b) => !asImg(b) && !asHeading(b) && !isStats(b));
  const bands: (typeof sections)[] = [];
  for (let s of sections) {
    const last = bands[bands.length - 1];
    // a short section followed by untitled material (the general rules after the last download
    // link on the legacy page): its own lines join the band, the rest follows as its own block
    const k = s.blocks.findIndex((b) => asHeading(b));
    if (last && k > 0 && brief(last[last.length - 1]) && brief({ ...s, blocks: s.blocks.slice(0, k) })) {
      last.push({ ...s, blocks: s.blocks.slice(0, k) });
      s = { blocks: s.blocks.slice(k) };
      bands.push([s]);
      continue;
    }
    if (last && brief(s) && brief(last[last.length - 1])) last.push(s);
    else bands.push([s]);
  }
  const othersId = "s-others";
  // the 2026 results come after the jury and the choirs, first of the rest
  let leadBands = 0;
  for (let n = 0; leadBands < bands.length && n + bands[leadBands].length <= leading; leadBands++) n += bands[leadBands].length;
  const navOf = (list: typeof sections) => list.filter((s) => s.id).map((s) => ({ id: s.id!, label: plain(s.heading!.heading).replace(/:$/, "") }));
  const nav: NavSection[] = [
    ...navOf(sections.slice(0, leading)),
    ...(results ? [{ id: "results", label: tr(results.heading, locale) }] : []),
    ...navOf(sections.slice(leading)),
    ...(others && others.items.length ? [{ id: othersId, label: tr(others.heading, locale) }] : []),
  ];
  // the legacy lists of links to the page's own sections are left out: the section bar does that
  const ownLink = (s: string) => /^\s*\[[^\]]+\]\(#[^)]*\)\s*$/.test(s);
  const asideBlocks = ((aside && tr(aside, locale)) ?? []).filter((b) => !(typeof b === "string" ? ownLink(b) : "list" in b && b.list.every(ownLink)));
  const renderBand = (band: typeof sections, i: number) => {
    const bg = i % 2 === 0 ? "bg-surface" : "bg-white";
    if (band.length > 1)
      // consecutive short sections (a line and a download link each) share one band, side by side
      return (
        <div key={band[0].id} className={`py-14 lg:py-16 ${bg}`}>
          <div className={`${container} grid gap-5 md:grid-cols-2 xl:grid-cols-3`}>
            {band.map((s) => (
              <section key={s.id} id={s.id} className="rounded-xl border border-rule bg-white p-6 lg:p-8">
                <h2 className="type-h4 text-ink">{plain(s.heading!.heading)}</h2>
                <div className="mt-3 mb-4 h-0.5 w-8 bg-brand-maroon" aria-hidden="true" />
                <RichText paragraphs={unalign(s.blocks)} />
              </section>
            ))}
          </div>
        </div>
      );
    const s = band[0];
    return (
      <section key={s.id ?? `intro-${i}`} id={s.id} className={`py-14 lg:py-16 ${bg}`}>
        <div className={container}>
          {s.heading && (
            <h2 data-legacy-ignore={s.added ? "" : undefined} className="type-h2 mb-8 border-b border-rule pb-4 text-ink lg:mb-10">
              <span className="mr-3 inline-block h-6 w-1 translate-y-0.5 rounded-full bg-brand-maroon align-baseline" aria-hidden="true" />
              {plain(s.heading.heading)}
            </h2>
          )}
          <SectionBody blocks={s.blocks} locale={locale} />
        </div>
      </section>
    );
  };


  const beside = top.length > 0 || asideBlocks.length > 0;

  return (
    <LightboxProvider locale={locale}>
      {/* Hero: the site cover image with the festival's title, dates and hero line */}
      <section className="relative isolate overflow-hidden bg-brand-maroon">
        {/* phones: scaled up so only the wave band of the image shows (its piano strip stays below) */}
        <div className="absolute inset-0 -z-10 bg-[url(/img/MainCover.webp)] bg-[length:auto_230%] bg-[position:50%_42%] bg-no-repeat md:bg-cover md:bg-center" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/35 to-black/5" aria-hidden="true" />
        <div className={`${container} pt-[124px] pb-12 sm:pb-14 lg:pt-[150px] lg:pb-20`}>
          {dates && (
            <p className="type-label mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 font-semibold tracking-wide text-white ring-1 ring-white/30 backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {dates}
            </p>
          )}
          <h1 className="type-display max-w-[22ch] text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">{title}</h1>
          {heroText && (
            // new site copy (festival-hero.ts), not legacy text: the content check skips it
            <p data-legacy-ignore="" className="type-lead mt-5 max-w-[62ch] text-white/90">
              {heroText}
            </p>
          )}
        </div>
      </section>

      {/* Overview: the poster, large, beside the introduction and the organising committee; a page
          with neither shows its poster on its own, centred (the section bar below leads to its parts) */}
      {(poster || beside) && (
        <div
          className={`${container} grid grid-cols-1 items-start gap-10 py-12 lg:gap-14 lg:py-16 ${poster && beside ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:grid-cols-[560px_minmax(0,1fr)]" : ""}`}
        >
          {poster && (
            <Zoomable
              images={[{ src: poster.img, caption: title }]}
              index={0}
              label={title}
              locale={locale}
              className={`rounded-xl shadow-[0_30px_70px_-30px_rgb(15_23_42/0.55)] ring-1 ring-black/5 ${beside ? "md:sticky md:top-[170px]" : "mx-auto w-full max-w-[560px]"}`}
            >
              <img {...responsive(poster.img, "(min-width: 1280px) 560px, (min-width: 768px) 42vw, 100vw")} alt={title} className="w-full" />
            </Zoomable>
          )}
          {beside && (
          <div className="min-w-0 space-y-8">
            {top.length > 0 && (
              // the introduction: an accent rule, the first paragraph set larger as a lead, text ragged
              // right (justified lines open gaps at this size), bold phrases in the ink colour
              <div className="type-lead text-body sm:[&_p]:text-left [&_p]:hyphens-manual [&_strong]:font-semibold [&_strong]:text-ink [&>div>p:first-child]:text-[1.2rem] [&>div>p:first-child]:leading-[1.65] [&>div>p:first-child]:text-ink lg:[&>div>p:first-child]:text-[1.4rem]">
                <div aria-hidden="true" className="mb-6 h-1 w-14 rounded-full bg-brand-maroon" />
                <RichText paragraphs={top} />
              </div>
            )}
            {asideBlocks.length > 0 && (
              <aside className="type-small rounded-xl border border-rule bg-surface p-6 lg:p-8 [&_ul]:sm:columns-2 [&_ul]:gap-8">
                <RichText paragraphs={asideBlocks} />
              </aside>
            )}
          </div>
          )}
        </div>
      )}

      <SectionNav sections={nav} locale={locale} />

      {bands.slice(0, leadBands).map((band, i) => renderBand(band, i))}
      {results && <Results results={results} locale={locale} />}
      {bands.slice(leadBands).map((band, i) => renderBand(band, i + leadBands))}

      {others && others.items.length > 0 && (
        // every other edition of this kind, newest first (new site navigation: the content check
        // skips it)
        <section id={othersId} data-legacy-ignore="" className="border-t border-rule bg-white py-14 lg:py-16">
          <div className={container}>
            <h2 className="type-h2 mb-8 border-b border-rule pb-4 text-ink lg:mb-10">
              <span className="mr-3 inline-block h-6 w-1 translate-y-0.5 rounded-full bg-brand-maroon align-baseline" aria-hidden="true" />
              {tr(others.heading, locale)}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {others.items.map((o) => (
                <li key={o.href}>
                  <Link
                    to={localizedHref(locale, o.href)}
                    className="group flex h-full items-center gap-4 rounded-xl bg-surface p-3 ring-1 ring-black/[0.06] transition duration-300 hover:bg-white hover:shadow-[0_14px_32px_-14px_rgb(43_40_122/0.3)] hover:ring-brand-maroon/30"
                  >
                    <span className="block h-24 w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-surface-muted ring-1 ring-black/5">
                      {o.image && <img src={sized(o.image, 400)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />}
                    </span>
                    <span className="min-w-0">
                      <span className="type-small block font-semibold leading-snug text-ink transition-colors group-hover:text-brand-navy">{o.title}</span>
                      {o.subtitle && <span className="type-caption mt-1 block text-muted">{o.subtitle}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </LightboxProvider>
  );
}
