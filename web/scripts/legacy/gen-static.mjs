// Usage: node gen-static.mjs <repoRoot> <slug> <enFile> <elFile> <mode> [pageTitleEn] [pageTitleEl]
//   mode "sections": hero = first image; content split into sections at each heading; images
//                    before the first heading (after the hero) and inside a section belong to it.
//   mode "bio":      first heading = page title, second heading = subtitle, rest = one untitled
//                    section; hero = first image.
// Regenerates web/app/content/pages/<slug>.ts verbatim, keeping the file's leading comment block.
import fs from "node:fs"; import path from "node:path";
import { raw, ts, fixBlocks, regions } from "./blocks.mjs";
const [root, slug, enFile, elFile, mode, titleEn, titleEl] = process.argv.slice(2);
const img = s => "/" + s.replace(/^\//, "");

function parse(file) {
  const withCols = raw(path.join(root, file)).filter(b => b.region !== "main-end");
  const all = withCols.filter(b => !b.region);
  const out = { hero: null, sections: [] };
  if (mode === "listing") { // the whole page in order (its heading stays in place, centred as printed); title = that heading
    out.title = withCols.find(b => b.heading).heading;
    out.sections.push({ title: null, body: fixBlocks(regions(withCols)), images: [] });
    return out;
  }
  if (mode === "flow") { // the whole page in order, with its columns; the page prints no title of its own
    out.sections.push({ title: null, body: fixBlocks(regions(withCols)), images: [] });
    return out;
  }
  if (mode === "bio") {
    out.title = all.shift().heading; out.subtitle = all.shift().heading;
    out.hero = img(all.find(b => b.img).img);
    out.sections.push({ title: null, body: all.filter(b => !b.img), images: [] });
    return out;
  }
  let pending = [];
  for (const b of all) {
    if (b.img) {
      if (!out.hero) out.hero = img(b.img);
      else (out.sections.length ? out.sections[out.sections.length - 1].images : pending).push(img(b.img));
    } else if (b.heading) out.sections.push({ title: b.heading, body: [], images: out.sections.length ? [] : pending });
    else out.sections[out.sections.length - 1].body.push(b);
  }
  return out;
}
const en = parse(enFile), el = parse(elFile);
if (en.sections.length !== el.sections.length) throw new Error(`section count differs: en ${en.sections.length}, el ${el.sections.length}`);
const id = t => (t || "main").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const sections = en.sections.map((s, i) => {
  const e = el.sections[i];
  return `    {
      id: ${JSON.stringify(id(s.title))},
${s.title ? `      title: {
        en: ${JSON.stringify(s.title)},
        el: ${JSON.stringify(e.title)},
      },
` : ""}      body: {
        en: ${ts(s.body, "        ")},
        el: ${ts(e.body, "        ")},
      },
${s.images.length || e.images.length ? `      images: ${same(s.images, e.images) ? ts(s.images, "      ") : `{\n        en: ${ts(s.images, "        ")},\n        el: ${ts(e.images, "        ")},\n      }`},\n` : ""}    },
`;
}).join("");
const file = path.join(root, "web/app/content/pages", slug + ".ts");
const header = ((fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "").match(/^import[^\n]*\n\n((?:\/\/[^\n]*\n)*)/) || [, ""])[1];
const title = mode === "bio" || mode === "listing" ? [en.title, el.title] : [titleEn, titleEl];
// "flow" pages print no heading: the title is only for the menu and the browser tab
const hideTitle = mode === "flow" || mode === "listing" ?"  hideTitle: true,\n" : "";
fs.writeFileSync(file, `import { staticPageSchema, type StaticPageContent } from "../types";

${header}const data: StaticPageContent = {
  slug: ${JSON.stringify(slug)},
  title: { en: ${JSON.stringify(title[0])}, el: ${JSON.stringify(title[1])} },
${hideTitle}${mode === "bio" ? `  subtitle: { en: ${JSON.stringify(en.subtitle)}, el: ${JSON.stringify(el.subtitle)} },\n` : ""}${en.hero ? `  hero: ${JSON.stringify(en.hero)},\n` : ""}  sections: [
${sections}  ],
};

export default staticPageSchema.parse(data);
`);
if (en.hero !== el.hero) console.log("NOTE hero differs", en.hero, el.hero);
console.log(`wrote ${file}: ${en.sections.length} sections`);
