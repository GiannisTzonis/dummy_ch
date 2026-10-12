// Usage: node gen-news.mjs <repoRoot> <slug> <enFile> <elFile> <isoDate> [startText] [endText]
// Regenerates web/app/content/news/<slug>.ts from the legacy pages, verbatim. Keeps the existing
// file's leading comment block. Title = first heading; body = blocks up to the gallery/"Other News"
// sidebar; gallery = images between body and sidebar; hero = first image inside the body.
import fs from "node:fs"; import path from "node:path";
import { raw, ts, regions, fixBlocks } from "./blocks.mjs";
import { routeFor } from "./routes.mjs";
const [root, slug, enFile, elFile, date, startText, endText] = process.argv.slice(2);
const KICKERS = ["Other News", "Άλλες Ειδήσεις", "Άλλα Νέα"];
const isKicker = b => KICKERS.includes(typeof b === "string" ? b : b && b.p);

function parse(file) {
  let all = raw(path.join(root, file)).filter(b => b.region !== "main-end");
  if (startText) { const i = all.findIndex(b => JSON.stringify(b).includes(startText)); all = all.slice(i); }
  const k = all.findIndex(b => isKicker(b));
  let main = k < 0 ? all : all.slice(0, k), side = k < 0 ? [] : all.slice(k);
  const lastReal = () => { for (let i = main.length - 1; i >= 0; i--) if (!main[i].region) return i; return -1; };
  // the sidebar's first thumbnail sits just before the first kicker
  const sideImgs = [];
  if (side.length) { const i = lastReal(); if (i >= 0 && main[i].img) sideImgs.push(main.splice(i, 1)[0].img); }
  if (endText) { const i = main.findIndex(b => JSON.stringify(b).includes(endText)); if (i >= 0) main = main.slice(0, i); }
  const ti = main.findIndex(b => b && b.heading);
  const title = main[ti].heading; main.splice(ti, 1);
  // gallery = the trailing run of gallery thumbnails; every other photo stays in the body, in place
  const gallery = [];
  for (let i = lastReal(); i >= 0 && (main[i].region || (main[i].img && main[i].layout === "gallery")); i--)
    if (main[i].img) gallery.unshift(main.splice(i, 1)[0].img);
  const body = fixBlocks(regions(main));
  const hero = (main.find(b => b.img) || {}).img || gallery[0]; // for listings/meta; shown in the body
  // sidebar: kicker, heading-with-link pairs; images in order of appearance (first before, rest after)
  const items = []; let pendingKicker = null;
  for (const b of side) {
    if (isKicker(b)) pendingKicker = typeof b === "string" ? b : b.p;
    else if (b.heading) { const m = b.heading.match(/^\[(.*)\]\((.*)\)$/); items.push({ kicker: pendingKicker, title: m ? m[1] : b.heading, href: m ? m[2] : "" }); }
    else if (b.img) sideImgs.push(b.img);
  }
  items.forEach((it, i) => it.image = sideImgs[i]);
  return { title, body, gallery, hero, items };
}
const en = parse(enFile), el = parse(elFile);
const img = s => "/" + s.replace(/^\//, "");
const file = path.join(root, "web/app/content/news", slug + ".ts");
const header = fs.existsSync(file) ? (fs.readFileSync(file, "utf8").match(/^import[^\n]*\n\n((?:\/\/[^\n]*\n|\/\*[\s\S]*?\*\/\n)*)/) || [, ""])[1] : "";
const loc = (a, b) => a === b ? JSON.stringify(a) : `{ en: ${JSON.stringify(a)}, el: ${JSON.stringify(b)} }`;
const related = en.items.length ? `  related: [
    {
      items: [
${en.items.map((it, i) => { const e = el.items[i] || it; return `        {
          kicker: ${loc(it.kicker, e.kicker)},
          title: ${loc(it.title, e.title)},
          href: ${loc(routeFor(it.href), routeFor(e.href))},
          image: ${loc(img(it.image), img(e.image))},
        },
`; }).join("")}      ],
    },
  ],
` : "";
const out = `import { newsPostSchema, type NewsPost } from "../types";

${header}const data: NewsPost = {
  slug: ${JSON.stringify(slug)},
  title: ${loc(en.title, el.title).replace(/^\{ /, "{\n    ").replace(/, el: /, ",\n    el: ").replace(/ \}$/, ",\n  }")},
  date: ${JSON.stringify(date)},
  hero: ${JSON.stringify(img(en.hero))},
  body: {
    en: ${ts(en.body, "    ")},
    el: ${ts(el.body, "    ")},
  },
  gallery: ${ts(en.gallery.map(s => ({ src: img(s) })), "  ")},
${related}};

export default newsPostSchema.parse(data);
`;
fs.writeFileSync(file, out);
if (JSON.stringify(en.gallery) !== JSON.stringify(el.gallery)) console.log("NOTE gallery differs:", en.gallery, el.gallery);
if (en.hero !== el.hero) console.log("NOTE hero differs:", en.hero, el.hero);
console.log(`wrote ${file}: en ${en.body.length} blocks, el ${el.body.length} blocks, gallery ${en.gallery.length}, related ${en.items.length}`);
