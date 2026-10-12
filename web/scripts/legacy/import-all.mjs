// Regenerates every content data file in web/app/content from the legacy HTML pages at the repo
// root, verbatim. Run it after editing a legacy page, then `npm run legacy:check`.
//
//   node scripts/legacy/import-all.mjs
//
// Each generator keeps the leading comment block of the file it rewrites (notes on legacy quirks)
// and, for festivals/masterclasses/competitions, the metadata fields (numbers, listing dates, poster,
// pageTitle) that are not printed on the page.
import { execFileSync } from "node:child_process";
import path from "node:path"; import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../..");
const run = (script, ...args) => process.stdout.write(execFileSync("node", [path.join(here, script), root, ...args], { encoding: "utf8" }));

// festivals, masterclasses, competitions: <kind> <slug> <en files> <el files>
for (const y of [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2024, 2025]) run("gen-edition.mjs", "festival", `${y}`, `single-${y}.html`, `single-${y}Greek.html`);
run("gen-edition.mjs", "festival", "2023", "single-2023.html,schedule2023.html", "single-2023Greek.html,schedule2023Greek.html");
run("gen-edition.mjs", "festival", "2026", "ICFP2026.html", "ICFP2026-el.html");
for (const y of [2017, 2018, 2019, 2021, 2022, 2023, 2026]) run("gen-edition.mjs", "masterclass", `${y}`, `masterclass${y}.html`, `masterclass${y}Greek.html`);
run("gen-edition.mjs", "competition", "composition-2022", "icc2022.html", "icc2022Greek.html");
run("gen-edition.mjs", "competition", "composition-2025", "icc2025.html", "icc2025Greek.html");
run("gen-edition.mjs", "competition", "conducting-2022", "iccc2022.html", "iccc2022Greek.html");
run("gen-edition.mjs", "competition", "conducting-2025", "iccc2025.html", "iccc2025Greek.html");

// news posts: <slug> <en file> <el file> <ISO date, ordering only>
run("gen-news.mjs", "erasmus", "erasmus.html", "erasmusGreek.html", "2017-11-10");
run("gen-news.mjs", "saint-peter", "saintpeter.html", "saintpeterGreek.html", "2017-08-10");
run("gen-news.mjs", "cfn", "cfn.html", "cfnGreek.html", "2019-03-29");
run("gen-news.mjs", "france-2024", "france2024.html", "france2024Greek.html", "2024-07-31");
run("gen-news.mjs", "berlin-2024", "berlin2024Greek.html", "berlin2024.html", "2024-07-31"); // files hold the other language
run("gen-news.mjs", "december-2025", "report091225.html", "report091225Greek.html", "2025-12-09");

// static and listing pages
run("gen-static.mjs", "our-choir", "ourchoir.html", "ourchoirGreek.html", "flow", "Our Choir", "Η Χορωδία μας");
run("gen-static.mjs", "our-conductor", "ourconductor.html", "ourconductorGreek.html", "bio");
run("gen-static.mjs", "previous-festivals", "previousFestivals.html", "previousFestivalsGreek.html", "listing");
run("gen-static.mjs", "previous-masterclasses", "previousMasteclasses.html", "previousMasteclassesGreek.html", "listing");

// people and choirs on several edition pages: one shared version each (people.ts, choirs.ts)
process.stdout.write(execFileSync("node", [path.join(here, "registry.mjs")], { encoding: "utf8" }));

// the legacy pages use .jpg/.png images; the site serves them as WebP
process.stdout.write(execFileSync("node", [path.join(here, "../images/optimize.mjs"), "--refs"], { encoding: "utf8" }));

// The home page (web/app/content/pages/home.ts) is maintained by hand: its layout (edition banner,
// document cards, news carousel) has no generator. legacy:check still compares it with index.html.
