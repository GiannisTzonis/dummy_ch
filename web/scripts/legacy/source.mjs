// Reads a legacy page with the approved corrections (corrections.mjs) applied.
// Throws if a correction no longer matches the expected number of times.
import fs from "node:fs"; import path from "node:path";
import { corrections } from "./corrections.mjs";

export const occurrences = (html, find) => typeof find === "string"
  ? html.split(find).length - 1
  : (html.match(new RegExp(find.source, find.flags.includes("g") ? find.flags : find.flags + "g")) || []).length;

export function correctionsFor(file, list = corrections) {
  const name = path.basename(file);
  return list.filter(c => c.files === "*" || c.files.includes(name));
}

// Applies one correction; throws if it does not match as expected.
export function applyOne(html, c, name) {
  const where = `${name}: correction "${c.why}"`;
  if (c.apply) {
    const out = c.apply(html);
    if (out === html && !c.optional) throw new Error(`${where} changed nothing`);
    return out;
  }
  const n = occurrences(html, c.find), want = c.count ?? 1;
  if (n !== want) throw new Error(`${where} matched ${n} times, expected ${want}`);
  return typeof c.find === "string" ? html.split(c.find).join(c.replace)
    : html.replace(new RegExp(c.find.source, c.find.flags.includes("g") ? c.find.flags : c.find.flags + "g"), c.replace);
}

export function readLegacy(file, list = corrections) {
  let html = fs.readFileSync(file, "utf8");
  for (const c of correctionsFor(file, list)) html = applyOne(html, c, path.basename(file));
  return html;
}
