import type { Locale, RichBlock } from "~/content/types";

// Translations into French, Italian, German and Spanish (I18N.md at the repo root).
//
// A translation memory per language: app/content/translations/<lang>/*.json, each an object
// { "<fingerprint of an English value>": <its translation> }. A value is a short text (a title, a
// label) or one block of long text (a paragraph, heading, list...). Merged at build time (the
// routes' loaders), so a page carries only its own language.
//
// Keyed by the English it translates: text repeated on many pages (jury biographies, choir
// presentations) is translated once; a changed English value has a new fingerprint, so its old
// translation is simply no longer used and the English shows until it is translated again
// (scripts/i18n/status.mjs lists what is missing).

export type TranslationMemory = Record<string, unknown>;

const files = import.meta.glob<TranslationMemory>("../content/translations/*/*.json", { eager: true, import: "default" });
const memories = new Map<string, TranslationMemory>();
for (const [file, entries] of Object.entries(files)) {
  const lang = file.split("/").at(-2)!;
  memories.set(lang, { ...memories.get(lang), ...entries });
}

// FNV-1a over the JSON of the English value: short, stable, enough to tell values apart
export function fingerprint(value: unknown): string {
  const s = JSON.stringify(value);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

// A localized value: an object with both source languages.
const isLocalized = (v: unknown): v is Record<string, unknown> & { en: unknown; el: unknown } =>
  !!v && typeof v === "object" && !Array.isArray(v) && "en" in v && "el" in v;

// Every localized value in `obj` with its path ("title", "content", "documents.2.label", ...).
export function localizedPaths(obj: unknown, base = ""): { path: string; value: Record<string, unknown> & { en: unknown } }[] {
  if (isLocalized(obj)) return [{ path: base, value: obj }];
  if (!obj || typeof obj !== "object") return [];
  const out: { path: string; value: Record<string, unknown> & { en: unknown } }[] = [];
  for (const [k, v] of Object.entries(obj)) out.push(...localizedPaths(v, base ? `${base}.${k}` : k));
  return out;
}

// Blocks with no text of their own (photos, anchors, layout markers): the English ones serve.
export const textless = (b: RichBlock) => typeof b === "object" && ("img" in b || "anchor" in b || "embed" in b || "wide" in b || "narrow" in b);

// A localized value that is an address, not text (a link or picture that differs per language):
// never translated, the English one serves.
export const isAddress = (v: unknown) => typeof v === "string" && /^(@\/|\/|https?:|mailto:|tel:)/.test(v);

// A translated heading keeps its English text as `src`: the page layout recognises sections from
// heading words (FestivalContent), and works them out from the English, the same in every language.
function withSource(t: RichBlock, en: RichBlock): RichBlock {
  return typeof t === "object" && "heading" in t && typeof en === "object" && "heading" in en ? { ...t, src: en.heading } : t;
}

export type Translated<T> = { data: T; translated: boolean; total: number; missing: number };

// `obj` (a page's data, or a shared table) with the given language filled in wherever the memory
// has a translation. English and Greek are the source: returned as they are. (`_id` names the page
// for reports; the memory itself is shared by all pages.)
export function translate<T>(_id: string, obj: T, locale: Locale): Translated<T> {
  if (locale === "en" || locale === "el") return { data: obj, translated: true, total: 0, missing: 0 };
  const memory = memories.get(locale) ?? {};
  const data = structuredClone(obj);
  let missing = 0, total = 0;
  for (const { value: node } of localizedPaths(data)) {
    if (Array.isArray(node.en)) {
      node[locale] = (node.en as RichBlock[]).map((b) => {
        if (textless(b)) return b;
        total++;
        const t = memory[fingerprint(b)] as RichBlock | undefined;
        if (t === undefined) missing++;
        return t === undefined ? b : withSource(t, b);
      });
    } else if (!isAddress(node.en)) {
      total++;
      const t = memory[fingerprint(node.en)];
      if (t === undefined) missing++;
      else node[locale] = t;
    }
  }
  return { data, translated: missing === 0, total, missing };
}

// Ids of the pages and shared tables (reports, scripts/i18n).
export const translationId = {
  festival: (year: number | string) => `festival-${year}`,
  masterclass: (year: number | string) => `masterclass-${year}`,
  competition: (slug: string) => `competition-${slug}`,
  news: (slug: string) => `news-${slug}`,
  page: (slug: string) => `page-${slug}`,
} as const;

// Meta tags of a page shown in a translated language without a (complete) translation: it shows
// the English, so search engines are pointed at the English page (scripts/seo.mjs reads the marker:
// canonical -> /en/..., left out of the sitemap and the hreflang links).
export function fallbackMeta(locale: Locale, translated: boolean) {
  return locale === "en" || locale === "el" || translated
    ? []
    : [
        { name: "robots", content: "noindex" },
        { name: "armonia-fallback", content: "1" },
      ];
}
