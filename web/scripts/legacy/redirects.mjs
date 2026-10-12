// Writes a redirect page into web/public for every legacy URL (single-2024.html,
// ourchoirGreek.html, ...) so existing links, bookmarks and search results land on the new
// route after cutover. GitHub Pages has no server-side redirects, so each page uses a meta
// refresh (works without JavaScript), a script that keeps any #anchor, and a canonical link.
//
//   node scripts/legacy/redirects.mjs
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { routeFor } from "./routes.mjs";
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../..");
const pub = path.join(root, "web/public");
const site = "https://" + fs.readFileSync(path.join(pub, "CNAME"), "utf8").trim();

// Unused pages from the original site theme -- never linked from the real site.
const THEME_LEFTOVERS = ["about", "contact", "blog-home", "blog-single", "category", "elements", "event"];
const legacy = fs.readdirSync(root).filter(f => f.endsWith(".html") && f !== "index.html"); // "/" is the app's own root page

let n = 0;
for (const file of legacy) {
  const name = file.replace(/\.html$/, "");
  const lang = /Greek$|-el$/.test(name) ? "el" : "en";
  const route = THEME_LEFTOVERS.includes(name) ? "" : routeFor(file);
  // with the trailing slash GitHub Pages serves each page at (no second redirect; same as the
  // pages' own canonical links, scripts/seo.mjs)
  const to = `/${lang}${route === "/" ? "" : route}/`;
  fs.writeFileSync(path.join(pub, file), `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>Armonia Choir</title>
<link rel="canonical" href="${site}${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
</head>
<body><a href="${to}">${site}${to}</a></body>
</html>
`);
  n++;
}
console.log(`wrote ${n} redirect pages to web/public`);
