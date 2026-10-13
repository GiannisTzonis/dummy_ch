// Shared by the translation tools (scripts/i18n): the site's content as the build sees it, loaded
// through Vite (TypeScript, "~/" paths), and the fingerprint/merge helpers of
// app/lib/translations.server.ts.
import { createServer } from "vite";
import path from "node:path"; import { fileURLToPath } from "node:url";

export const web = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const LANGS = ["fr", "it", "de", "es"];

// Every page and shared table that has text to translate, in batch order (I18N.md).
export async function loadContent() {
  const vite = await createServer({ root: web, logLevel: "error", server: { middlewareMode: true, hmr: false, watch: null }, appType: "custom" });
  try {
    const load = (p) => vite.ssrLoadModule(p);
    const [tr, festivals, masterclasses, competitions, news, hero, results] = await Promise.all([
      load("/app/lib/translations.server.ts"),
      load("/app/content/festivals/index.ts"),
      load("/app/content/masterclasses/index.ts"),
      load("/app/content/competitions/index.ts"),
      load("/app/content/news/index.ts"),
      load("/app/content/festival-hero.ts"),
      load("/app/content/festival-results.ts"),
    ]);
    const page = async (slug) => (await load(`/app/content/pages/${slug}.ts`)).default;
    const pages = [
      // batch 1: the pages most visitors see
      { id: "page-home", batch: 1, obj: await page("home") },
      { id: "festival-2027", batch: 1, obj: festivals.festivals.find((f) => f.year === 2027) },
      { id: "festival-2026", batch: 1, obj: festivals.festivals.find((f) => f.year === 2026) },
      { id: "festival-hero", batch: 1, obj: hero.festivalHero },
      { id: "festival-results", batch: 1, obj: results.festivalResults },
      { id: "masterclass-2026", batch: 1, obj: masterclasses.masterclasses.find((m) => m.year === 2026) },
      { id: "page-our-choir", batch: 1, obj: await page("our-choir") },
      { id: "page-our-conductor", batch: 1, obj: await page("our-conductor") },
      { id: "page-previous-festivals", batch: 1, obj: await page("previous-festivals") },
      { id: "page-previous-masterclasses", batch: 1, obj: await page("previous-masterclasses") },
      // batch 2: current competitions and the news
      ...competitions.competitions.filter((c) => c.year >= 2025).map((c) => ({ id: `competition-${c.slug}`, batch: 2, obj: c })),
      ...news.newsPosts.map((n) => ({ id: `news-${n.slug}`, batch: 2, obj: n })),
      // batch 3: the archive
      ...festivals.festivals.filter((f) => f.year < 2026).sort((a, b) => b.year - a.year).map((f) => ({ id: `festival-${f.year}`, batch: 3, obj: f })),
      ...masterclasses.masterclasses.filter((m) => m.year !== 2026).sort((a, b) => b.year - a.year).map((m) => ({ id: `masterclass-${m.year}`, batch: 3, obj: m })),
      ...competitions.competitions.filter((c) => c.year < 2025).map((c) => ({ id: `competition-${c.slug}`, batch: 3, obj: c })),
    ];
    return { pages, fingerprint: tr.fingerprint, localizedPaths: tr.localizedPaths, textless: tr.textless, isAddress: tr.isAddress };
  } finally {
    await vite.close();
  }
}

// The units to translate on a page: every short value and every text block of its English, each
// with its fingerprint. (Greek given alongside short values, for reference.)
export function unitsOf(page, { fingerprint, localizedPaths, textless, isAddress }) {
  const out = [];
  for (const { path: p, value } of localizedPaths(page.obj)) {
    if (Array.isArray(value.en)) value.en.forEach((b, i) => !textless(b) && out.push({ fp: fingerprint(b), en: b, where: `${page.id}:${p}[${i}]` }));
    else if (!isAddress(value.en)) out.push({ fp: fingerprint(value.en), en: value.en, el: value.el, where: `${page.id}:${p}` });
  }
  return out;
}
