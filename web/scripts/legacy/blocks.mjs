// Helper used by page generators: blocks(file, start, end) -> RichText blocks (img markers removed),
// ts(value) -> TypeScript literal source.
import { execFileSync } from "node:child_process";
import path from "node:path"; import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
export function raw(file, start = "", end = "") {
  return JSON.parse(execFileSync("node", [path.join(here, "extract.mjs"), file, start, end].filter((a, i) => i < 2 || a), { encoding: "utf8" }));
}
export const blocks = (file, start, end) => raw(file, start, end).filter(b => typeof b === "string" || !b.img);
export const imgs = (file, start, end) => raw(file, start, end).filter(b => b.img).map(b => b.img);
export const ts = (v, ind = "") => JSON.stringify(v, null, 2).split("\n").join("\n" + ind);

// Legacy relative links (other pages, images, documents) -> new-site paths. Site pages become
// "@/route" (RichText prefixes the current language); files become absolute "/..." URLs.
import { routeFor } from "./routes.mjs";
const enc = h => h.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
export const img = s => s && (/^https?:/.test(s) ? s : "/" + s.replace(/^\//, ""));
export const fixHref = h => {
  if (!h || /^(https?:|mailto:|tel:|#|@)/.test(h)) return h;
  if (/\.html(#.*)?$/.test(h)) { const [p, hash] = h.split("#"); return "@" + routeFor(p) + (hash ? "#" + hash : ""); }
  return "/" + enc(h.replace(/^\.?\//, ""));
};
export const fixBlocks = bs => bs.map(b => {
  const md = s => s.replace(/\]\(([^)\s]+)\)/g, (_, h) => "](" + fixHref(h) + ")");
  if (typeof b === "string") return md(b);
  if (b.p !== undefined) return { ...b, p: md(b.p) };
  if (b.list) return { ...b, list: b.list.map(md) };
  if (b.heading) return { ...b, heading: md(b.heading) };
  if (b.img) return { img: img(b.img), ...(b.href ? { href: fixHref(b.href) } : {}), ...(b.layout ? { layout: b.layout } : {}) };
  if (b.stats) return { stats: { ...b.stats, rows: b.stats.rows.map(r => ({ ...r, flag: img(r.flag) })) } };
  return b;
});

// Column markers from extract.mjs -> RichText blocks: {narrow: N} opens a Bootstrap col-lg-N column,
// {narrow: 0} closes it; columns left empty (e.g. after their photo was taken out) are dropped.
// Other region markers are removed.
export function regions(bs) {
  const out = [];
  for (const b of bs) {
    if (b && b.region === "narrow") { out.push({ narrow: b.cols }); continue; }
    if (b && b.region === "narrow-end") {
      if (out.length && out[out.length - 1].narrow) out.pop(); else out.push({ narrow: 0 });
      continue;
    }
    if (b && b.region) continue;
    out.push(b);
  }
  return out;
}
