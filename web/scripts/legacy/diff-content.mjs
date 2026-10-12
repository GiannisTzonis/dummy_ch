// Compares every legacy page (repo root *.html) with its page in the new site.
//
//   node scripts/legacy/diff-content.mjs [--strict] [--reverse] [--uncorrected] [--report] [--server=<url>] [page]
//
// Default: reports what the legacy page has that the new page lacks -- text chunks, the <title>
// (when the legacy page set a specific one), images and outbound/document links. Text comparison
// ignores whitespace, punctuation spacing, quote style and case. Legacy pages are read with the
// approved fixes in corrections.mjs applied.
// --strict       keep case, quote style and word spacing (only whitespace is collapsed)
// --reverse      report text on the new page that the legacy page does not have
// --uncorrected  compare with the legacy HTML as published (differences = the approved fixes)
// --report       print one line per route with how much of the legacy page was found
// --server=<url> read the new pages from a running server (e.g. the dev server) instead of
//                web/build/client
// page           limit to one legacy page (e.g. single-2019) or route (e.g. en/festival/2019)
// Exits with status 1 when any difference is found. Without --server, run `npm run build` first.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { readLegacy, correctionsFor } from "./source.mjs";
const args = process.argv.slice(2);
const STRICT = args.includes("--strict"), REVERSE = args.includes("--reverse"), UNCORRECTED = args.includes("--uncorrected");
const REPORT = args.includes("--report");
const SERVER = (args.find(a => a.startsWith("--server=")) || "").slice("--server=".length).replace(/\/$/, "");
const filter = args.find(a => !a.startsWith("--")) || "";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const build = path.join(root, "web/build/client");

// legacy page(s) -> new route
const pairs = [];
const add = (legacy, route) => pairs.push({ legacy, route });
for (const [en, el, r] of [["index", "indexGreek", ""], ["ourchoir", "ourchoirGreek", "/our-choir"], ["ourconductor", "ourconductorGreek", "/our-conductor"],
  ["previousFestivals", "previousFestivalsGreek", "/festivals"], ["previousMasteclasses", "previousMasteclassesGreek", "/masterclasses"]]) { add([en], "en" + r); add([el], "el" + r); }
for (const y of [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025]) {
  add([`single-${y}`].concat(y === 2023 ? ["schedule2023"] : []), `en/festival/${y}`);
  add([`single-${y}Greek`].concat(y === 2023 ? ["schedule2023Greek"] : []), `el/festival/${y}`);
}
add(["ICFP2026"], "en/festival/2026"); add(["ICFP2026-el"], "el/festival/2026");
for (const y of [2017, 2018, 2019, 2021, 2022, 2023, 2026]) { add([`masterclass${y}`], `en/masterclass/${y}`); add([`masterclass${y}Greek`], `el/masterclass/${y}`); }
for (const [f, s] of [["icc2022", "composition-2022"], ["icc2025", "composition-2025"], ["iccc2022", "conducting-2022"], ["iccc2025", "conducting-2025"]]) { add([f], `en/competition/${s}`); add([f + "Greek"], `el/competition/${s}`); }
add(["berlin2024Greek"], "en/news/berlin-2024"); add(["berlin2024"], "el/news/berlin-2024"); // these legacy files hold the other language
for (const [f, s] of [["france2024", "france-2024"], ["erasmus", "erasmus"], ["saintpeter", "saint-peter"], ["cfn", "cfn"], ["report091225", "december-2025"]]) { add([f], `en/news/${s}`); add([f + "Greek"], `el/news/${s}`); }

const ent = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…", laquo: "«", raquo: "»", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", euro: "€", copy: "©", middot: "·", bull: "•" };
const decode = s => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&([a-z]+);/gi, (m, n) => ent[n.toLowerCase()] ?? m);
const ZW = /[​-‍﻿]/g;
// strict: spaces around punctuation are ignored because they come from tag boundaries
const strictNorm = s => decode(s).normalize("NFC").replace(ZW, "").replace(/\s+/g, " ").replace(/ ?([.,;:!?)\]]) ?/g, "$1").replace(/([(\[]) /g, "$1").trim();
const looseNorm = s => decode(s).normalize("NFC").replace(ZW, "").replace(/[’‘´`]/g, "'").replace(/[“”«»„]/g, '"').replace(/[–—−]/g, "-").replace(/\s+/g, " ").trim().toLowerCase();
const norm = s => STRICT ? strictNorm(s) : looseNorm(s);
const squash = t => STRICT ? t : t.replace(/[\s.,;:!?·()"'*\-]/g, "");
const TAG = /<[a-zA-Z\/!][^>]*>/g; // a "<" not followed by a tag name is text, as in browsers
const titleOf = h => looseNorm((h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]);
const strip = (h, legacy) => {
  h = h.replace(/<\/?(sup|sub)\b[^>]*>/gi, "").replace(/<head\b[\s\S]*?<\/head>/i, "").replace(/<!--[\s\S]*?-->/g, "").replace(/<(script|style|noscript)\b[\s\S]*?<\/\1>/gi, "");
  // only the site header/footer -- pages also use <header>/<footer> inside their content
  // (forward check) links to the page's own sections ("#ijc19", "#mentors") are navigation: the
  // new pages replace those lists with the section bar, so their labels are not required
  if (legacy && !REVERSE) h = h.replace(/<a\b[^>]*href="#[^"]*"[^>]*>[\s\S]*?<\/a>/gi, "");
  if (legacy) return h.replace(/<header\b[^>]*id="header"[\s\S]*?<\/header>/i, "").replace(/<footer\b[^>]*footer-area[\s\S]*?<\/footer>/i, "");
  const m = h.match(/<main\b[\s\S]*<\/main>/i);
  // page furniture and post-migration additions marked data-legacy-ignore (the section navigator,
  // "Read more" buttons, the festival hero line, the results section, added news cards) are not
  // legacy content (also the "Other News" heading and added cards). A marked element must not
  // contain another element of its own tag.
  return (m ? m[0] : h).replace(/<(nav|button|p|section|div|h2|li)\b[^>]*data-legacy-ignore[^>]*>[\s\S]*?<\/\1>/gi, "");
};
const BLOCK = /<\/?(p|div|li|ul|ol|h[1-6]|br|tr|td|th|table|section|article|blockquote|figcaption|button|label|dt|dd|hr)\b[^>]*>/gi;
const chunks = h => h.replace(BLOCK, "\n").replace(TAG, " ").split("\n").map(norm).filter(c => c.length >= 2 && /[\p{L}\p{N}]/u.test(c));
const textOf = h => norm(h.replace(TAG, " "));
const attrs = (h, re) => [...h.matchAll(re)].map(m => decode(m[1]).trim());
// a size variant (name.w800.webp, scripts/images/variants.mjs) is the same picture as name.webp
const base = u => { try { u = decodeURIComponent(u); } catch {} return u.split(/[?#]/)[0].split("/").pop().normalize("NFC").toLowerCase().replace(/\.w\d+\.webp$/, ".webp"); };
const IMG = /<img[^>]+src="([^"]+)"/gi, HREF = /href="([^"]+)"/gi;
// the new site serves the legacy JPEG/PNG images as WebP (scripts/images/optimize.mjs)
const webpMap = JSON.parse(fs.readFileSync(path.join(root, "web/scripts/images/webp-map.json"), "utf8"));
// substitutions recorded by registry.mjs (people/choirs kept once), per route
const subsFile = path.join(root, "web/scripts/legacy/registry-substitutions.json");
const subs = fs.existsSync(subsFile) ? JSON.parse(fs.readFileSync(subsFile, "utf8")) : {};
const md = s => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "");
const asWebp = src => { let p = src; try { p = decodeURIComponent(src); } catch {} p = p.replace(/^(\.?\/)+/, "").normalize("NFC"); return webpMap[p] ?? src; };
const isTracked = h => /^https?:|^mailto:|^tel:|\.(docx?|pdf|xlsx?|pptx?|mp3|mp4)$/i.test(h);

async function newPage(route) {
  if (SERVER) {
    const res = await fetch(`${SERVER}/${route}`);
    return { status: res.status, html: res.ok ? await res.text() : null };
  }
  const f = path.join(build, route, "index.html");
  return { status: fs.existsSync(f) ? 200 : 404, html: fs.existsSync(f) ? fs.readFileSync(f, "utf8") : null };
}

let total = 0;
for (const p of pairs) {
  const routes = [].concat(p.route);
  if (filter && !p.legacy.includes(filter) && !routes.includes(filter)) continue;
  const legacyRaw = p.legacy.map(f => UNCORRECTED ? fs.readFileSync(path.join(root, f + ".html"), "utf8") : readLegacy(path.join(root, f + ".html")));
  const legacyHtml = legacyRaw.map(h => strip(h, true)).join("\n");
  let newHtml = ""; const newTitles = [], statuses = [];
  for (const r of routes) {
    const { status, html } = await newPage(r);
    statuses.push(status);
    if (!html) { console.log(`!! ${r}: ${SERVER ? `HTTP ${status}` : "missing build output"}`); total++; continue; }
    newTitles.push(titleOf(html)); newHtml += strip(html, false);
  }
  let titleDiff = [], missingText, missingImgs = [], missingLinks = [], stats = "";
  // people/choirs shown in their one shared version (registry.mjs): this page's own legacy
  // version is expected to be missing, and the shared version (published on another legacy page)
  // is expected to be added
  const sub = routes.map(r => subs[r]).filter(Boolean);
  const subSq = key => squash(norm(sub.flatMap(s => s[key]).map(md).join("\n")));
  const removedSq = subSq("removed"), addedSq = subSq("added");
  const removedImgs = new Set(sub.flatMap(s => s.removedImages).map(asWebp).map(base));
  if (REVERSE) {
    const legacySq = squash(textOf(legacyHtml));
    missingText = [...new Set(chunks(newHtml))].filter(c => squash(c).length > 0 && !legacySq.includes(squash(c)) && !(addedSq && addedSq.includes(squash(c))));
  } else {
    const newSq = squash(textOf(newHtml));
    const lt = titleOf(legacyRaw[0]);
    const generic = /^(armonia choir|χορωδία αρμονία|icfp \d{4}|schedule 2023)$/.test(lt);
    if (!generic && !newTitles.includes(lt)) titleDiff = [`"${lt}"  (new: "${newTitles.join(" / ")}")`];
    const legacyChunks = [...new Set(chunks(legacyHtml))].filter(c => squash(c).length > 0);
    missingText = legacyChunks.filter(c => !newSq.includes(squash(c)) && !(removedSq && removedSq.includes(squash(c))));
    const legacyImgs = [...new Set(attrs(legacyHtml, IMG).map(asWebp).map(base))].filter(Boolean);
    const newImgs = new Set(attrs(newHtml, IMG).map(base));
    missingImgs = legacyImgs.filter(b => !newImgs.has(b) && !removedImgs.has(b));
    const legacyLinks = [...new Set(attrs(legacyHtml, HREF))].filter(isTracked);
    const newHrefs = attrs(newHtml, HREF);
    const newHrefBases = new Set(newHrefs.map(base)), newHrefFull = new Set(newHrefs.map(h => h.replace(/\/$/, "")));
    missingLinks = legacyLinks.filter(h => /^https?:|^mailto:|^tel:/i.test(h) ? !newHrefFull.has(h.replace(/\/$/, "")) : !newHrefBases.has(base(h)));
    const frac = (miss, all) => `${all - miss}/${all}`.padStart(7);
    stats = `text ${frac(missingText.length, legacyChunks.length)}  images ${frac(missingImgs.length, legacyImgs.length)}  links ${frac(missingLinks.length, legacyLinks.length)}  title ${titleDiff.length ? "DIFF" : "ok  "}`;
  }
  const n = titleDiff.length + missingText.length + missingImgs.length + missingLinks.length; total += n;
  if (REPORT) {
    const fixes = UNCORRECTED ? 0 : p.legacy.reduce((k, f) => k + correctionsFor(f + ".html").length, 0);
    const http = SERVER ? `HTTP ${statuses.join("+")}  ` : "";
    console.log(`${n === 0 ? "PASS" : "FAIL"}  ${routes.join("+").padEnd(28)} ${http}${stats}  fixes ${String(fixes).padStart(2)}  <- ${p.legacy.map(f => f + ".html").join(" + ")}`);
  }
  if (n === 0 && (!filter || REPORT)) continue;
  console.log(`\n=== ${p.legacy.join("+")} -> ${routes.join("+")}: ${n === 0 ? "OK" : n + " differences"}`);
  titleDiff.forEach(c => console.log("  TITLE " + c));
  missingText.forEach(c => console.log(`  ${REVERSE ? "EXTRA" : "TEXT "} ` + (c.length > 220 ? c.slice(0, 220) + "…" : c)));
  missingImgs.forEach(c => console.log("  IMG   " + c));
  missingLinks.forEach(c => console.log("  LINK  " + c));
}
console.log(`\n${STRICT ? "strict" : "loose"}${REVERSE ? ", reverse" : ""}${UNCORRECTED ? ", uncorrected" : ""}${SERVER ? `, ${SERVER}` : ""}: ${pairs.length} page pairs, ${total} differences`);
process.exit(total ? 1 : 0);
