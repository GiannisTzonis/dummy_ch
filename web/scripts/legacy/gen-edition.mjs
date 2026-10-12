// Usage: node gen-edition.mjs <repoRoot> <festival|masterclass|competition> <slug> <enFiles> <elFiles>
//   enFiles/elFiles: comma-separated legacy files, concatenated in order (e.g. single-2023.html,schedule2023.html)
// Regenerates web/app/content/<kind dir>/<slug>.ts in content mode, verbatim from the legacy pages:
//   title   = the page's first heading
//   content = everything else in the main column, in order (dates, poster, sections, photos, ...)
//   aside   = the sidebar, except the recent-posts widget, which becomes `related`
// Keeps the existing file's leading comment and its metadata (numbers, dates, poster, pageTitle),
// which listings and <title> use.
import fs from "node:fs"; import path from "node:path";
import { raw, img, fixBlocks } from "./blocks.mjs";
import { routeFor } from "./routes.mjs";
const [root, kind, slug, enFiles, elFiles] = process.argv.slice(2);
const dir = { festival: "festivals", masterclass: "masterclasses", competition: "competitions" }[kind];
const schema = { festival: "festivalSchema", masterclass: "masterclassSchema", competition: "competitionSchema" }[kind];
const type = { festival: "FestivalInput", masterclass: "MasterclassInput", competition: "CompetitionInput" }[kind];
const file = path.join(root, "web/app/content", dir, slug + ".ts");
const src = fs.readFileSync(file, "utf8");

// value text of a top-level property in the existing `const data = {...}` literal
function prop(name) {
  const body = src.slice(src.indexOf("const data"));
  const m = body.match(new RegExp(`\\n  ${name}: `)); if (!m) return null;
  let i = m.index + m[0].length, depth = 0, inStr = null, start = i;
  for (; i < body.length; i++) {
    const ch = body[i];
    if (inStr) { if (ch === "\\") i++; else if (ch === inStr) inStr = null; continue; }
    if (ch === '"' || ch === "'" || ch === "`") inStr = ch;
    else if ("{[(".includes(ch)) depth++;
    else if ("}])".includes(ch)) depth--;
    else if (ch === "," && depth === 0) break;
  }
  return body.slice(start, i).trim();
}
const META = ["slug", "kind", "year", "editionNumber", "competitionEditionNumber", "isCurrentEdition", "pageTitle", "dates", "poster"];

const KICKERS = ["Other News", "Άλλες Ειδήσεις", "Άλλα Νέα"];
const isKicker = b => KICKERS.includes(typeof b === "string" ? b : b && b.p);

function parse(files) {
  let all = files.split(",").flatMap(f => raw(path.join(root, f)));
  const main = [], aside = [], related = [];
  let titleIdx = all.findIndex(b => b.heading && !b.side);
  const title = all[titleIdx].heading.replace(/\s*\n\s*/g, " ");
  all = all.filter((_, i) => i !== titleIdx);
  for (let i = 0; i < all.length; i++) {
    const b = all[i];
    if (b.recent) {
      const head = aside.length && aside[aside.length - 1].heading ? aside.pop().heading : null;
      related.push({ heading: head, items: b.recent });
      continue;
    }
    if (typeof b === "string") { main.push(b); continue; }
    // first end of the legacy main column: the rest of the page is full width
    if (b.region === "main-end") { if (!main.some(x => x.wide)) main.push({ wide: true }); continue; }
    if (b.region === "narrow") { main.push({ narrow: b.cols }); continue; }
    if (b.region === "narrow-end") {
      // drop an empty narrow section, otherwise close it
      if (main.length && main[main.length - 1].narrow) main.pop(); else main.push({ narrow: 0 });
      continue;
    }
    const { side, ...rest } = b;
    const block = rest.p !== undefined ? (rest.align ? { p: rest.p, align: rest.align } : rest.p) : rest;
    (side ? aside : main).push(block);
  }
  // The legacy previous/next strip at the end of some pages (section.nav-area: a linked thumbnail,
  // then "Other News" + a linked title, twice) becomes a related block, as on the news pages,
  // instead of loose content. Anything else found in it stops the import.
  const k = main.findIndex(isKicker);
  if (k >= 0) {
    const imgs = [], items = [];
    let start = k, j = k - 1;
    while (j >= 0 && (main[j].narrow !== undefined || main[j].wide)) j--;
    if (j >= 0 && main[j].img && main[j].href) { imgs.push(main[j].img); main.splice(j, 1); start--; }
    let kicker = null;
    for (const b of main.splice(start)) {
      if (isKicker(b)) kicker = typeof b === "string" ? b : b.p;
      else if (b.heading) { const m = b.heading.match(/^\[(.*)\]\((.*)\)$/); items.push({ kicker, title: m ? m[1] : b.heading, href: m ? m[2] : "" }); }
      else if (b.img) imgs.push(b.img);
      else if (b.narrow !== undefined || b.wide) main.push(b);
      else throw new Error(`${files}: unexpected block in the Other News strip: ${JSON.stringify(b)}`);
    }
    items.forEach((it, i) => { it.img = imgs[i]; });
    related.push({ heading: null, items });
  }
  return { title, main, aside, related };
}
const en = parse(enFiles), el = parse(elFiles);
const J = (v, ind) => JSON.stringify(v, null, 2).split("\n").join("\n" + ind);
const loc = (a, b) => a === b ? JSON.stringify(a) : `{ en: ${JSON.stringify(a)}, el: ${JSON.stringify(b)} }`;
// blocks pair up by position; a block only one language's page has is marked with its language
const relatedTs = Array.from({ length: Math.max(en.related.length, el.related.length) }, (_, k) => {
  const r = en.related[k] || el.related[k], e = el.related[k] || r;
  const lang = !el.related[k] ? "en" : !en.related[k] ? "el" : null;
  return `    {
${lang ? `      lang: "${lang}",\n` : ""}${r.heading ? `      heading: { en: ${JSON.stringify(r.heading)}, el: ${JSON.stringify(e.heading)} },\n` : ""}      items: [
${r.items.map((it, i) => { const x = e.items[i] || it; return `        {
${it.kicker ? `          kicker: ${loc(it.kicker, x.kicker)},\n` : ""}          title: ${loc(it.title, x.title)},
${it.date ? `          date: ${loc(it.date, x.date)},\n` : ""}          href: ${loc(routeFor(it.href), routeFor(x.href))},
          image: ${loc(img(it.img), img(x.img))},
        },
`; }).join("")}      ],
    },
`; }).join("");

const header = (src.match(/^import[^\n]*\n\n((?:\/\/[^\n]*\n|\/\*[\s\S]*?\*\/\n)*)/) || [, ""])[1];
const meta = META.map(k => [k, prop(k)]).filter(([, v]) => v !== null).map(([k, v]) => `  ${k}: ${v},\n`).join("");
const out = `import { ${schema}, type ${type} } from "../types";

${header}const data: ${type} = {
${meta.replace(/^  dates:/m, "  // Listing/meta only -- the page itself shows the dates as printed in \`content\`.\n  dates:")}  title: {
    en: ${JSON.stringify(en.title)},
    el: ${JSON.stringify(el.title)},
  },
  intro: { en: [], el: [] },
  content: {
    en: ${J(fixBlocks(en.main), "    ")},
    el: ${J(fixBlocks(el.main), "    ")},
  },
${en.aside.length || el.aside.length ? `  aside: {
    en: ${J(fixBlocks(en.aside), "    ")},
    el: ${J(fixBlocks(el.aside), "    ")},
  },
` : ""}${relatedTs ? `  related: [\n${relatedTs}  ],\n` : ""}};

export default ${schema}.parse(data);
`;
fs.writeFileSync(file, out);
// the content as plain data, for registry.mjs (which moves repeated people/choirs into the
// shared registries and rewrites the content above with references)
const cache = path.join(root, "web/scripts/legacy/.cache");
fs.mkdirSync(cache, { recursive: true });
fs.writeFileSync(path.join(cache, `${dir}-${slug}.json`), JSON.stringify({ file: path.relative(root, file).replace(/\\/g, "/"), page: `${dir}/${slug}`, en: fixBlocks(en.main), el: fixBlocks(el.main) }));
console.log(`wrote ${file}: content en ${en.main.length}/el ${el.main.length}, aside ${en.aside.length}/${el.aside.length}, related ${en.related.map(r => r.items.length)}`);
