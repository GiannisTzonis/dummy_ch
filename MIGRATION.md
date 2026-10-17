# Migration to React + TypeScript + Tailwind

Status date: 2026-10-10. This file is the single source of truth for the
migration from the legacy static-HTML site (root of this repo) to the new
app in `./web` (React Router v7/8, TypeScript, Tailwind). It exists so we
never lose data from 10+ years of festivals while restructuring the site.

**Rule: nothing in the legacy site is deleted or overwritten during this
migration.** The old site keeps deploying exactly as it does today until
every row below is `verified` and you explicitly decide to cut over.

## Why this migration

The old site is 75 hand-copied HTML files. Adding one page means editing the
navbar in every other file by hand. There's no shared layout, no content
model, no i18n system — English/Greek are separate hand-translated file
twins (`page.html` / `pageGreek.html`). The new site fixes this with:

- One nav config (`web/app/content/nav.ts`), rendered everywhere.
- Reusable page templates (Festival, Masterclass, Competition, News,
  Listing, Static) instead of copy-pasted markup per year.
- Structured content data (TypeScript + Zod) instead of content baked into
  HTML, so a new year is "add a data file," not "copy an HTML file and
  hand-edit 40 links."
- `/en` and `/el` routes from one route tree instead of duplicate files.
- Still fully static output (`react-router build` with `ssr:false` +
  `prerender`) — deploys to GitHub Pages exactly like today, same CNAME.

## ⚠️ Open issues found during inventory (need your decision, not blocking)

1. **Committed SSH private key.** `choir` / `choir.pub` at repo root are a
   real OpenSSH keypair, tracked in git since the initial commit. You
   confirmed you own the repo, so this isn't an urgent external-exposure
   panic, but it should eventually be rotated (if it grants access to
   anything) and scrubbed from git history (`git rm` alone isn't enough —
   it stays in history). Not carried into `./web`.
2. **Color token conflict.** `scss/theme/_variables.scss` (source SCSS)
   says primary color is `#88d200` (green), but the actual compiled
   `css/main.css` that ships to browsers has been hand-edited to use
   `#2b287a` (navy) as the real primary/button/link color — the SCSS is
   stale and not the source of truth. Separately, the newest AI-touched
   pages (`index.html`, `ICFP2026.html`, `previousFestivals.html`) use an
   ad-hoc `#ac2e48` (maroon) inline for date badges/CTAs that appears
   nowhere in the stylesheet. **Decision made for now:** treat `#2b287a`
   navy as primary and `#ac2e48` maroon as a secondary accent (both are
   already live in production) — see `web/app/app.css`. Tell me if that's
   wrong and I'll adjust the token.
3. **`ICFP2026-el.html` breaks the naming convention.** Every other page
   pairs as `page.html` / `pageGreek.html`; this one is `ICFP2026-el.html`.
   Irrelevant in the new site since locale is a route segment (`/el/...`),
   not a filename suffix — flagging only so nobody goes looking for
   `ICFP2026Greek.html` and assumes content is missing.
4. **Broken source images.** Several `.crdownload` files in `img/` are
   incomplete downloads, not real images: `choirchamberlju.jpeg.crdownload`,
   `marcogarciadepaz.jpeg.crdownload`, `martin.jpeg.crdownload`,
   `quentinb.jpeg.crdownload`, `ragnar.jpeg.crdownload`. These need to be
   re-sourced (probably from whoever supplied the original choir/jury
   photos) before the pages referencing them can be marked `verified`.
5. **`schedule2023.pdf` is orphaned** (524KB, not linked from any page —
   `schedule2023.html` reimplements the same timetable as HTML instead).
   Decide: drop it, or keep as a downloadable alternative on the new
   schedule page.
6. **`report091225.html` bundles two unrelated announcements** (a charity
   concert + two upcoming festival participations) in one page. Recommend
   splitting into two separate News entries in the new content model
   rather than porting as one lump page.
   **Update 2026-10-10:** it was split in August, but splitting reordered
   and reworded its text, so it is one post again (`/news/december-2025`).
   Splitting is still possible later as an editorial change.
7. **Home page news carousel has a pre-existing bug**: on the legacy
   `index.html`, item 5's thumbnail links to `single-2024.html` but its
   title text links to `masterclass2023.html` -- these clearly should be
   the same link. The extracted content data (`web/app/content/pages/
   home.ts`) uses `single-2024.html` as the more plausible target and
   flags it in a code comment. Worth a quick look to confirm which was
   intended.
8. **Home page news carousel links to not-yet-migrated pages**: 9 of its
   10 items still point at legacy `.html` filenames (only pages that have
   a real new route get a `/`-prefixed href and client-side routing --
   see `HomePage.tsx`). Until every underlying page is extracted, those
   cards do a full-page navigation to the old filename, which only works
   if the legacy site is still reachable at that same relative path.
   Don't be alarmed if they don't resolve on a fresh `web/` deploy that
   doesn't also carry the legacy `.html` files.
   **Resolved 2026-10-10:** all cards link to the new routes.
9. **Google Maps JS API key is hardcoded** in `index.html`
    (`AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA`). Low-severity by design
    (Maps JS keys are meant to be used client-side) but worth a quick
    check in Google Cloud Console that it's restricted by HTTP referrer
    to your actual domain(s), not left wide open. Not carried into
    `./web` since the map was only ever used on the orphaned `contact.html`.

10. **Orphaned theme-leftover pages** — confirmed dead, safe to drop, not
   migrated: `about.html`, `contact.html`, `blog-home.html`,
   `blog-single.html`, `category.html`, `elements.html`, `event.html`,
   `sample` (no extension). They use the original Codepixer demo theme
   nav, link only to each other, and are never linked from any real page.
   If you want a real Contact page in the new site (the old one was never
   wired to a working backend — `mail.php` action, no server here), say so
   and it'll be built fresh rather than "migrated."

## Status (2026-10-10): every page migrated verbatim, machine-checked

All 34 legacy pages, in both languages (66 page pairs -- `report091225` and
`schedule2023` fold into one route each), are in `./web` with their content
copied **verbatim** from the legacy HTML and checked by a script, not by eye.

The earlier pass (Aug 2026) had marked most rows `verified`, but a
text-by-text comparison on 2026-10-10 found ~2,800 differences: Greek text
paraphrased or shortened, names shown in English on Greek pages, sidebars
("Recent Festivals", "Other News") and section headings dropped, lists
flattened into paragraphs, curly quotes straightened, the 2015 organising
committee and 8 Our Choir photos missing, the home page's 2027 banner
missing, and a few invented additions (news dates, section headings). That
content was regenerated from the legacy pages instead of patched.

### How it works now

- `npm run legacy:import` -- regenerates every data file in
  `web/app/content` from the legacy HTML (`web/scripts/legacy/`). Festival,
  masterclass and competition pages store the legacy main column and
  sidebar as ordered blocks (`content` / `aside`: paragraphs, lists,
  headings at their original level, photos, links), so nothing is reordered
  or reworded. The structured fields (`jury`, `participatingChoirs`, ...)
  are still in the schema for future editions that want them.
- `npm run legacy:check` -- builds the site, then compares every legacy page
  with its prerendered page: text, `<title>`, images and outbound/document
  links, once ignoring case/quotes/spacing and once strictly, and checks
  that every referenced file exists. **Current result: 0 differences in
  both modes.** A reverse check (`node scripts/legacy/diff-content.mjs
  --reverse`) lists text the new site adds: only the "Our Choir" page title
  (the legacy page has no heading; the title is its menu label).
- The home page (`content/pages/home.ts`) and the menu (`content/nav.ts`)
  are hand-maintained and also at 0 differences.
- If a legacy page is edited before cutover, run both commands again.

### Changes in structure (content unchanged)

- `report091225` is one news post again (`/news/december-2025`), as on the
  legacy site -- the earlier split into two posts reordered its text
  (issue #6 below).
- The two listing pages (`/festivals`, `/masterclasses`) are copies of the
  hand-written legacy lists, including the "Participation of choirs from all
  over the world" statistics table, instead of lists generated from data.
- Browser-tab titles: the legacy `<title>` is reproduced wherever it was
  page-specific (home, ICFP 2026, Masterclass 2026); pages whose legacy
  title was just "Armonia Choir" / "ICFP 2015" get "<page title> | Armonia
  Choir" (Greek: "| Χορωδία Αρμονία"). `<html lang>` is now `el` on Greek
  pages.
- Footer: the legacy footers differ only in mistakes (Greek footer on some
  English pages and vice versa, wording variants of the same links); the
  new site has one footer per language with every link.

## Old-site errors: fixed (2026-10-10)

The legacy pages had mistakes, several of them broken for visitors today. They
are fixed in the new site through `web/scripts/legacy/corrections.mjs`: each
fix is applied to the legacy HTML before import and before comparison, must
match exactly the expected number of times, and `node
scripts/legacy/diff-content.mjs --uncorrected` lists exactly these fixes as
the only differences from the published legacy pages. The legacy site itself
is unchanged, so these are still broken on armoniachoir.org until cutover.

- **Broken downloads/images/links**: two Greek 2025 rules .docx (Unicode
  form), photos whose path differs only in upper/lower case (KGBL, gallery
  photos of festivals 2016-2019 and masterclasses 2017-2018 -- 404 on GitHub
  Pages), `vasilikou.jpeg`, `Marco Antonio García de Paz.jpeg`,
  `poster-2021Greek.jpeg`, the Venezuela flag (`ven.pngnor`; a flag SVG
  was added), the 2018 `ijc18` jump link, 2019 gallery photo 2.
- **Wrong language/links**: English France 2024 "Other News" box was Greek;
  Erasmus "Masterclass 2026" showed/opened 2023; home card for the 2024
  festival; Previous Masterclasses titles linked to the wrong pages and had
  wrong dates/poster for the 1st, 2nd and 4th workshops; Greek
  "Άγιος Πέτρος" for Saint Petersburg.
- **Wrong numbers/years**: Previous Festivals (2015 = 21st competition, 2023
  = 6th seminar); schedule headers of masterclass 2018 (2019 dates),
  masterclass 2022 and conducting 2022 (2021); masterclass 2019 date range;
  2025 choirs 13-18 flagged as Portugal.
- **Typos**: 33th, 22rd, 42st, 44rth, Chord, Coral, Commisioner (22x),
  Anelija, he/she slips, Tommas, TThe, Luce Mayernik, Ceremoney, 04-30,
  Clauteverdi, "Σεμινάριο και Σεμινάριο", stray ".GR", Greek "?" for "·",
  "Greece" on a Greek page, Greek menu accents.
- **Copy-paste duplicates removed**: 2018 "Lyra" sentence, 2023/2024
  registration paragraph, 2025 "Organisation" paragraph, 2026 "Essence of
  Elements" short bio (EN+EL), masterclass 2022 09:00 slot (x3), masterclass
  2023 stray 2021 paragraph and duplicate topic.

### Still needs your decision (not fixable from the pages themselves)

1. Festival 2022: choir list and results are a copy of 2019's; its
   competition number is also unclear (2021 = 26th, 2023 = 27th).
2. ~~Festival 2016 Greek: "Ζάγκρεμπ" (Zagreb) for Zaječar.~~ **Resolved 2026-10-11:** now
   "Ζάιετσαρ" (greek-names-2.mjs).
3. Our Conductor: English says she taught 3 years at Antim I, Greek says 7.
4. Composition 2022: all six Category A entries show 90.63 points.
5. Masterclass 2019: the Ljubljana choir sentence links to choirkgbl.eu.
6. Berlin 2024: a copy of the France 2024 article with other photos -- keep
   in the menu or drop? (Since 2026-10-11 the news "Other News" navigation lists only
   France 2024; the Berlin page still exists at its URL.)
7. Our Choir page title ("Our Choir" / "Η Χορωδία μας"): the legacy page
   has no heading; the title is the menu label. The only text the new site
   adds anywhere.
8. Issues #1 (SSH key), #5 (schedule2023.pdf), #9 (Maps key), #10 (contact
   page) at the top of this file.

## Route-by-route verification (2026-10-10, against the dev server)

Text / images / links of each legacy page found on its new route, and the
number of approved fixes on that page. Loose and strict: 0 differences.
All 517 images/documents load (HTTP 200); all 74 legacy URLs redirect.

    PASS  en                           HTTP 200  text   44/44  images   13/13  links     8/8  title ok    fixes  3  <- index.html
    PASS  el                           HTTP 200  text   46/46  images   13/13  links     8/8  title ok    fixes  2  <- indexGreek.html
    PASS  en/our-choir                 HTTP 200  text 144/144  images     9/9  links     0/0  title ok    fixes  1  <- ourchoir.html
    PASS  el/our-choir                 HTTP 200  text 106/106  images     7/7  links     0/0  title ok    fixes  1  <- ourchoirGreek.html
    PASS  en/our-conductor             HTTP 200  text   37/37  images     1/1  links     0/0  title ok    fixes  3  <- ourconductor.html
    PASS  el/our-conductor             HTTP 200  text   37/37  images     1/1  links     0/0  title ok    fixes  1  <- ourconductorGreek.html
    PASS  en/festivals                 HTTP 200  text 130/130  images   56/56  links     0/0  title ok    fixes  4  <- previousFestivals.html
    PASS  el/festivals                 HTTP 200  text 130/130  images   56/56  links     0/0  title ok    fixes  4  <- previousFestivalsGreek.html
    PASS  en/masterclasses             HTTP 200  text   13/13  images     6/6  links     0/0  title ok    fixes  5  <- previousMasteclasses.html
    PASS  el/masterclasses             HTTP 200  text   13/13  images     6/6  links     0/0  title ok    fixes  5  <- previousMasteclassesGreek.html
    PASS  en/festival/2015             HTTP 200  text 106/106  images   11/11  links     0/0  title ok    fixes  3  <- single-2015.html
    PASS  el/festival/2015             HTTP 200  text 112/112  images   11/11  links     0/0  title ok    fixes  1  <- single-2015Greek.html
    PASS  en/festival/2016             HTTP 200  text 181/181  images   25/25  links     0/0  title ok    fixes  3  <- single-2016.html
    PASS  el/festival/2016             HTTP 200  text 172/172  images   25/25  links     0/0  title ok    fixes  1  <- single-2016Greek.html
    PASS  en/festival/2017             HTTP 200  text 231/231  images   25/25  links     0/0  title ok    fixes  2  <- single-2017.html
    PASS  el/festival/2017             HTTP 200  text 249/249  images   25/25  links     0/0  title ok    fixes  1  <- single-2017Greek.html
    PASS  en/festival/2018             HTTP 200  text 585/585  images   49/49  links     0/0  title ok    fixes  5  <- single-2018.html
    PASS  el/festival/2018             HTTP 200  text 633/633  images   49/49  links     0/0  title ok    fixes  3  <- single-2018Greek.html
    PASS  en/festival/2019             HTTP 200  text 540/540  images   63/63  links     0/0  title ok    fixes  5  <- single-2019.html
    PASS  el/festival/2019             HTTP 200  text 765/765  images   63/63  links     0/0  title ok    fixes  4  <- single-2019Greek.html
    PASS  en/festival/2021             HTTP 200  text 426/426  images   15/15  links     1/1  title ok    fixes  4  <- single-2021.html
    PASS  el/festival/2021             HTTP 200  text 512/512  images   15/15  links     1/1  title ok    fixes  3  <- single-2021Greek.html
    PASS  en/festival/2022             HTTP 200  text 788/788  images   36/36  links     0/0  title ok    fixes  2  <- single-2022.html
    PASS  el/festival/2022             HTTP 200  text 922/922  images   36/36  links     0/0  title ok    fixes  1  <- single-2022Greek.html
    PASS  en/festival/2023             HTTP 200  text 384/384  images     9/9  links     0/0  title ok    fixes  4  <- single-2023.html + schedule2023.html
    PASS  el/festival/2023             HTTP 200  text 383/383  images     9/9  links     0/0  title ok    fixes  3  <- single-2023Greek.html + schedule2023Greek.html
    PASS  en/festival/2024             HTTP 200  text 637/637  images   31/31  links     0/0  title ok    fixes  4  <- single-2024.html
    PASS  el/festival/2024             HTTP 200  text 723/723  images   31/31  links     0/0  title ok    fixes  1  <- single-2024Greek.html
    PASS  en/festival/2025             HTTP 200  text 939/939  images   43/43  links     3/3  title ok    fixes  4  <- single-2025.html
    PASS  el/festival/2025             HTTP 200  text 1028/1028  images   43/43  links     3/3  title ok    fixes  3  <- single-2025Greek.html
    PASS  en/festival/2026             HTTP 200  text 1195/1195  images   40/40  links     8/8  title ok    fixes  5  <- ICFP2026.html
    PASS  el/festival/2026             HTTP 200  text 1444/1444  images   40/40  links     8/8  title ok    fixes  2  <- ICFP2026-el.html
    PASS  en/masterclass/2017          HTTP 200  text 112/112  images   17/17  links     0/0  title ok    fixes  1  <- masterclass2017.html
    PASS  el/masterclass/2017          HTTP 200  text 124/124  images   17/17  links     0/0  title ok    fixes  1  <- masterclass2017Greek.html
    PASS  en/masterclass/2018          HTTP 200  text 113/113  images   17/17  links     0/0  title ok    fixes  2  <- masterclass2018.html
    PASS  el/masterclass/2018          HTTP 200  text 124/124  images   17/17  links     0/0  title ok    fixes  3  <- masterclass2018Greek.html
    PASS  en/masterclass/2019          HTTP 200  text 171/171  images   17/17  links     0/0  title ok    fixes  3  <- masterclass2019.html
    PASS  el/masterclass/2019          HTTP 200  text 189/189  images   17/17  links     0/0  title ok    fixes  3  <- masterclass2019Greek.html
    PASS  en/masterclass/2021          HTTP 200  text   40/40  images     1/1  links     0/0  title ok    fixes  1  <- masterclass2021.html
    PASS  el/masterclass/2021          HTTP 200  text   42/42  images     1/1  links     0/0  title ok    fixes  1  <- masterclass2021Greek.html
    PASS  en/masterclass/2022          HTTP 200  text 182/182  images     3/3  links     0/0  title ok    fixes  4  <- masterclass2022.html
    PASS  el/masterclass/2022          HTTP 200  text 186/186  images     3/3  links     0/0  title ok    fixes  4  <- masterclass2022Greek.html
    PASS  en/masterclass/2023          HTTP 200  text 149/149  images     7/7  links     0/0  title ok    fixes  5  <- masterclass2023.html
    PASS  el/masterclass/2023          HTTP 200  text 147/147  images     5/5  links     0/0  title ok    fixes  3  <- masterclass2023Greek.html
    PASS  en/masterclass/2026          HTTP 200  text 226/226  images     6/6  links     2/2  title ok    fixes  2  <- masterclass2026.html
    PASS  el/masterclass/2026          HTTP 200  text 239/239  images     6/6  links     2/2  title ok    fixes  1  <- masterclass2026Greek.html
    PASS  en/competition/composition-2022 HTTP 200  text 220/220  images     5/5  links     0/0  title ok    fixes  2  <- icc2022.html
    PASS  el/competition/composition-2022 HTTP 200  text 207/207  images     5/5  links     0/0  title ok    fixes  1  <- icc2022Greek.html
    PASS  en/competition/composition-2025 HTTP 200  text 160/160  images   14/14  links     0/0  title ok    fixes  1  <- icc2025.html
    PASS  el/competition/composition-2025 HTTP 200  text 191/191  images   14/14  links     0/0  title ok    fixes  1  <- icc2025Greek.html
    PASS  en/competition/conducting-2022 HTTP 200  text 221/221  images   14/14  links     0/0  title ok    fixes  5  <- iccc2022.html
    PASS  el/competition/conducting-2022 HTTP 200  text 250/250  images   14/14  links     0/0  title ok    fixes  2  <- iccc2022Greek.html
    PASS  en/competition/conducting-2025 HTTP 200  text 350/350  images     4/4  links     9/9  title ok    fixes  2  <- iccc2025.html
    PASS  el/competition/conducting-2025 HTTP 200  text 330/330  images     4/4  links     9/9  title ok    fixes  1  <- iccc2025Greek.html
    PASS  en/news/berlin-2024          HTTP 200  text   61/61  images     6/6  links     0/0  title ok    fixes  1  <- berlin2024Greek.html
    PASS  el/news/berlin-2024          HTTP 200  text   63/63  images     6/6  links     0/0  title ok    fixes  2  <- berlin2024.html
    PASS  en/news/france-2024          HTTP 200  text   61/61  images     9/9  links     0/0  title ok    fixes  2  <- france2024.html
    PASS  el/news/france-2024          HTTP 200  text   63/63  images     9/9  links     0/0  title ok    fixes  2  <- france2024Greek.html
    PASS  en/news/erasmus              HTTP 200  text   18/18  images     3/3  links     0/0  title ok    fixes  2  <- erasmus.html
    PASS  el/news/erasmus              HTTP 200  text   19/19  images     3/3  links     0/0  title ok    fixes  1  <- erasmusGreek.html
    PASS  en/news/saint-peter          HTTP 200  text   16/16  images     3/3  links     0/0  title ok    fixes  1  <- saintpeter.html
    PASS  el/news/saint-peter          HTTP 200  text   15/15  images     3/3  links     0/0  title ok    fixes  2  <- saintpeterGreek.html
    PASS  en/news/cfn                  HTTP 200  text   42/42  images     3/3  links     0/0  title ok    fixes  1  <- cfn.html
    PASS  el/news/cfn                  HTTP 200  text   29/29  images     3/3  links     0/0  title ok    fixes  2  <- cfnGreek.html
    PASS  en/news/december-2025        HTTP 200  text   53/53  images     3/3  links     0/0  title ok    fixes  1  <- report091225.html
    PASS  el/news/december-2025        HTTP 200  text   46/46  images     3/3  links     0/0  title ok    fixes  1  <- report091225Greek.html

## Visual fidelity (2026-10-10)

The site now reproduces the legacy look, checked with side-by-side headless
screenshots against the old pages (desktop and phone width):

- Cover banner `img/MainCover.jpg` (full screen on the home page with the
  welcome sentence placed as on the old site, 300px strip elsewhere); fixed
  transparent menu that turns rgba(0,0,0,0.8) on scroll, festival logo on
  festival/masterclass/competition pages, "Home" link on inner pages, flag
  switch; legacy footer (#2b287a, 5/5/2 columns, maroon Font Awesome icons --
  the invented copyright line is gone); legacy typography (Segoe UI 14px/300,
  justified indented paragraphs, #222 headings, Bootstrap-blue links).
- Content keeps the legacy layout: main column + bordered sidebar boxes, then
  full-width sections; portraits beside bios on alternating sides; centred
  medal lists; justified photo galleries; Bootstrap and Tailwind columns
  (news photo beside text, listing poster grids); home page document cards,
  3-up news carousel (12s autoplay, dots) and collaboration cards.
- Fixed along the way: a global CSS rule made every heading dark (invisible on
  navy); dates were printed twice on edition pages.

**Still plainer than the original:** the newest pages that the legacy site
styled individually with Tailwind -- festival 2026 (including its tabbed
day-by-day programme), masterclass 2026, conducting competition 2025 and parts
of festival 2025. Their content is complete and in order, but the card panels,
accent colours and the programme tabs are not reproduced yet.

## Typography and accessibility (2026-10-10)

The site's text was redesigned (on request) for a professional, minimal look:

- **Font:** Inter (variable, optical sizes), self-hosted via
  `@fontsource-variable/inter` -- includes full Greek, no Google Fonts call.
- **One type scale** in `web/app/app.css` (`type-display`, `type-h1`...`type-h6`,
  `type-lead`, `type-body`, `type-small`, `type-caption`, `type-label`),
  fluid between a 360px phone and a 1280px desktop (body 16->17px, page
  titles 28->42px). Every component uses these names; no ad-hoc font sizes.
- **Readability:** body line height 1.7, paragraphs left-aligned (no
  justification or first-line indent) and capped at ~72 characters per line,
  balanced heading wrapping, visible keyboard focus, underlined links.
- **Contrast (WCAG):** ink #0f172a 17.8:1, body #1e293b 14.6:1, muted #475569
  7.6:1 (AAA), links #1d4ed8 6.7:1; hero text is white with a soft shadow
  instead of navy on red.
- **Audit:** `npm run a11y` (serve `web/build/client` on port 8090 first) runs
  axe-core WCAG 2.1 A/AA on all 66 pages at desktop and phone width.
  Result: **no violations** at either width (fixed: image-only links without
  names, keyboard access to the scrollable statistics table).

## Festival page layout (2026-10-11)

The single festival page (`/[lang]/festival/[year]`, `FestivalContent.tsx`) has its own
layout, built from the same verbatim content. No scroll/motion effects (removed on request;
`components/motion/` deleted).

- Width: 1440px container (sections, header, navigator); legacy narrow-column markers are
  ignored on this page.
- Hero: the cover image with the dates chip (from the page's own dates line -- checked equal to
  the listing dates on all 22 pages), the title and a one-line hero text per year. The hero
  lines are NEW site copy, kept by hand in `web/app/content/festival-hero.ts` (facts from each
  year's page only; marked `data-legacy-ignore`). Review/edit them there.
- Overview below the hero: the poster large (560px, sticky, opens in the viewer) beside the
  introduction and the organising committee. Pages without an introduction get section tiles;
  2026's welcome letter (the first text of its main column) is used as its introduction.
- Photo viewer (`Lightbox.tsx`, native `<dialog>`): jury portraits, choir photos, posters and
  gallery photos open large, with previous/next within their group, arrow keys and Esc. Each is
  a real link to the image file, so it still works without JavaScript.
- Dates to know: the 2026 poster's "9–12 July 2026" is the 30th Competition; the festival is
  6–12 July (the page's dates line). 2025's EN intro says "8 to 13 of July" while its dates line
  and poster say 10–13 -- the hero uses 10–13; the intro text stays verbatim.
- Section navigator ("On this page"): sticky bar under the menu with scroll-spy and smooth
  scrolling. Section titles are left-aligned with a maroon marker; backgrounds alternate.
- Section bodies are cut into parts:
  - Jury (name + portrait + bio): two columns of profile cards, portraits all 4:5 at one
    size, bio clipped to the photo height with a "Read more" toggle (full text stays in the
    HTML; the button is `data-legacy-ignore`, added after hydration).
  - Participating choirs (name + photo + text): 2-column grid, photos all 16:9, text clipped
    with "Read more", buttons aligned at the card bottom.
  - Medals, categories, rules (heading + text/lists, 2+ in a row): masonry of cards.
  - Programme days (2023, 2026): in date order; short days side by side, long days full
    width with their events in columns.
  - Partner logos (2025 co-organisers etc., split off the last choir card): one logo strip.
  - Galleries: uniform 4:3 thumbnail grid (6 per row on desktop).
  - Runs of very short sections (2025's three "Document ... Download" competitions) share
    one band as cards.
- Text site-wide: justified from tablet width up with automatic hyphenation in the page
  language and `text-wrap: pretty`; ragged-right on phones.
- Checks: content loose/strict/reverse 0 (`diff-content` now ignores any `nav`/`button`
  marked `data-legacy-ignore`), assets 0, axe WCAG 2.1 AA 0 violations at 1440px and 390px.

## People and choirs kept once (2026-10-11)

- Jury members, mentors and choirs that appeared on several edition pages were copied in full
  on each page (e.g. Ambrož Čopi 15 times).
- They now live once in shared registries:
  - `web/app/content/people.ts`: 18 people (jury members and mentors);
  - `web/app/content/choirs.ts`: 24 choirs. Most are the 2019 list repeated on the 2022 page;
    also Ave Chamber Choir, Voci Contra Tempo and Ambitus.
- Pages refer to an entry, e.g. `...person("ambroz-copi", "en", {level: 3})`, keeping only their
  own heading level and alignment, and their own name heading when it links somewhere.
- Result: 234 copies replaced (117 per language) on 21 pages; the page data is 17% smaller.
- Generated by `scripts/legacy/registry.mjs`, run by `legacy:import` after the edition pages:
  - an entry is a name heading with its photo and text;
  - English and Greek are paired by photo, otherwise by name;
  - jump-link markers inside a biography stay on the page.
- The version kept:
  - Text and photo: the most recent page's, unless `scripts/legacy/registry-choices.json` names
    another page.
  - Name: the most complete spelling any page used ("Marco Antonio García de Paz",
    "Klaus-Jürgen Etzold").
- The 2026 festival page shortened some biographies. The client chose the fuller versions:
  `registry-choices.json` sets these to `"fullest"`, i.e. the longest text, the most recent of
  equally long ones:
  - Ambrož Čopi: 2025
  - Pearl Shangkuan: 2017
  - Katerina Vassilikou: 2021
  - Marco Antonio García de Paz: 2019
  - Eduardo García-Novelli: 2024
- Checks: `registry.mjs` writes `registry-substitutions.json` (per route, the legacy text and
  photos replaced by the kept version). `diff-content` expects exactly those to differ and
  allows the kept version, which is verbatim from another legacy page. Everything else still
  compares at 0 differences.

## Section order; masterclass pages in the festival design (2026-10-11)

- Festival and masterclass pages (both use `FestivalContent`) show sections in this order after
  the hero and overview:
  1. the jury (masterclasses: the mentors);
  2. the participating choirs (masterclasses: the demonstrative choirs);
  3. everything else, in the legacy order.
  - Festival 2026 Results come first among the rest.
  - Section titles are matched by role in both languages (`JURY` / `CHOIRS` in
    FestivalContent.tsx).
- Single choirs that the legacy pages set as section titles are folded into their choirs or
  repertoire section, so the section bar shows only real sections (Festival 2018, Masterclass
  2019 and 2022).
- Masterclasses 2017–2019 list their mentors after the seminar topics with no heading. These
  entries become a "Mentors / Μέντορες" section (the heading is new, marked
  `data-legacy-ignore`).
- Masterclass 2026: its opening title and dates headings join the introduction beside the poster.
- Festival 2023 has no jury members or choir list (its "Jury" heading belongs to the rules), so
  nothing moves there. Masterclasses 2021 and 2022 have no mentors section.
- Competition pages (ICCP composition, ICCCP conducting) use the same design (2026-10-11).
  - Order: jury, then competing conductors, then demonstrative choirs, then the rest.
  - Pages without the legacy "wide" marker (composition 2022/2025) end the overview at their
    first section title.
- Edition navigation: every festival, masterclass and competition page ends with "Other
  Festivals / Masterclasses / Competitions". It lists every other edition of the kind, newest
  first, with poster, title and dates (`app/content/edition-nav.ts`, marked
  `data-legacy-ignore`).
  - It replaces the legacy navigation, removed by approved corrections ("site structure"):
    - the sidebar "Recent Festivals / Recent Posts" widget on the 22 festival pages;
    - the previous/next strip on masterclasses 2023/2026 and the 2023 schedule.
  - The side box's lists of links to the page's own sections are no longer shown; the section
    bar does that. `diff-content` therefore skips legacy `href="#…"` link labels in the forward
    check.
- Greek conducting 2025: "Taipei Philharmonic Chamber Choir" / "Taipei Philharmonic Chorus" are
  now in Latin script (9 places, greek-names-2.mjs).
- Old-site typo noted: "ΥποΥποδειγματικές Χορωδίες" (Greek masterclasses 2019 and 2022).

## Non-Greek names on the Greek pages (2026-10-11)

- Client rule: on the Greek pages, names that are not Greek are written in their original
  (Latin-script) spelling, as on the English pages.
- Applied to people, choirs and ensembles (the Greek descriptor stays, e.g. Μικτή Χορωδία
  "Crescendo"), composers, and prizes or institutions named after people.
- Scale: 392 exact replacements in 25 Greek legacy pages. Examples:
  - Αμπρόζ Τσόπι → Ambrož Čopi
  - Θεοδώρα Παυλοβίτς → Theodora Pavlovitch
  - Ανέλια Στεφάνοβα → Anelia Stefanova
  - "Τριμόρντιουμ" → "Trimontium"
- Where the list lives: `web/scripts/legacy/greek-names.json`, applied through `corrections.mjs`,
  so the content check still compares with the legacy pages plus these fixes.
- Unchanged:
  - Greek and Cypriot people and Greek choirs (e.g. Κατερίνα Βασιλικού, Κωστής Κωνσταντάρας);
  - places (cities and countries), e.g. Βερολίνο, Τιμισοάρα.
- Spellings follow the English page even where it has typos ("Paqual Dusapin", "Azuoliukas",
  "Eriks Ešenvalds").
- Client decisions (2026-10-11, second part, `web/scripts/legacy/greek-names-2.mjs`, 46 entries):
  - Non-Greek choir names are always in the original language, including Greek choirs with
    Latin names (Ambitus, Rosarte), Estonian Television Concert Choir and Coro Universidad
    Autónoma de Bucaramanga.
  - Venues are in the original language: Kennedy Center, Lincoln Center, Mariinsky Theatre,
    Monumental Theater, Saint Peter’s College, Saint Cuthbert’s Church, St. Vitus, São Martinho
    de Tibães.
  - Titles of works are in the original language: Te Deum, Magnificat, St. John Passion, Tebe
    Poem, Ergen Deda, Dilmano, Dilbero, Pričastno, Doamne, buzele mele, Eleftheria, and the CD
    "V načale bě Slovo".
  - Festivals, competitions and organisations are in the original language: Preobrajenie, Viva
    il Canto, Psallite Deo, Zlatna vila, Young Soloists of the Principality of Asturias, KÓTA,
    Hungarian Kodály Association, Eastman School of Music, KAWAI, Walton, the Stuttgart
    Hochschule, NTNU.
  - People with conventional Greek forms are in Latin script too: Mother Teresa, Pope John
    Paul II.
  - The composer written in Cyrillic is now Ivan Kavaldzhiev (the English page has the typo
    "VIvan Kavaldijev").
  - Towns stay in Greek: the 210 foreign town names in `greek-names-open.json` are not changed.
- Legacy errors fixed with the client's go-ahead:
  - "Ζάγκρεμπ, Σερβία" becomes "Ζάιετσαρ, Σερβία" (Lavirint is from Zaječar, as the English page
    says).
  - "Νόβι Σάντς" becomes "Νόβι Σοντς" (Nowy Sącz, 3×).
  - "Gøtα" becomes "Gøta".
  - A stray control character inside "Τιμπάες" is removed.
  - Already handled by the first pass: Nikodem Antosikiem, "Ζίβα ιλ Τσάντο" → "Viva il Canto",
    Eastman School of Music.
  - "Άγιος Πέτρος" went with the old news strips.

## News post layout (2026-10-11)

- All news posts use one editorial layout (`web/app/templates/NewsPostPage.tsx`).
- Hero: the cover artwork with a "News" label and the title, as on the festival pages.
- Below the hero, everything shares one centred reading column (46rem) and its edges:
  - text;
  - body photos: rounded, open in the photo viewer; small images such as logos stay at their
    natural size;
  - the gallery: 3 per row, a short last row centred;
  - the "Other News" cards: 2 per row, on a light band.
- The legacy narrow-column markers are ignored here; they only limited the width.
- The first paragraph is set as a lead.
- "Other News" (before the footer, like the festival pages' bottom navigation):
  - the site's news list, i.e. the home page news slider (`home.ts` `newsItems`, newest first),
    in the same order, without the current page. It includes entries that open festival,
    masterclass or competition pages (e.g. the 2026 results, Masterclass 2026);
  - `berlin-2024` repeats the France 2024 story: it isn't in the slider, and on it the France
    2024 entry counts as the current page;
  - it replaces the legacy per-page previous/next strip, which `corrections.mjs` ("site
    structure") removes from the 12 legacy news files. The strip's non-news links (festival
    2023 schedule, Masterclass 2026) are therefore no longer on news pages; both pages stay in
    the menu;
  - the section is marked `data-legacy-ignore`.
- Home news slider: it can be dragged with a mouse or swiped by touch. Past 60px (or a quick
  flick) it moves one page. Vertical scrolling is left to the browser, a drag never opens a card,
  and autoplay pauses while it is held.

## "Other News" strip (2026-10-11)

- Some legacy pages end with a previous/next strip (`section.nav-area`: a linked thumbnail, then
  "Other News" and a linked title, twice).
  - News pages already turned it into related links.
  - The edition importer had copied it into the page content: Festival 2023 (from
    `schedule2023`), Masterclass 2023 (English only) and Masterclass 2026.
  - `gen-edition.mjs` now makes it a related block too. It shows in the bottom navigation on
    festival pages and in the side column on masterclass pages.
- A block that only one language's page has is marked `lang`, so the Greek Masterclass 2023
  page doesn't show it.
- Legacy quirks kept as published:
  - On Festival 2023, the "Masterclass 2026" card uses the Masterclass 2023 poster.
  - On the Greek Festival 2023 page, the CFN link is titled "Κέντρο Πολιτισμού Νέας
    Φιλαδέλφειας".

## Images: WebP (2026-10-11)

- Every image in `web/public/img` is WebP (`node web/scripts/images/optimize.mjs`, sharp).
  367 JPEG/PNG went from 345 MB to 56 MB; 10 oversized WebPs that were already there went
  from 8.5 MB to 3.4 MB. Images in `web/public/img` now total about 62 MB, down from about 380 MB.
- Settings: long edge capped at 2400px; photos quality 82; PNGs quality 90 with full alpha
  (small PNGs lossless when that is smaller); EXIF rotation applied. A side-by-side check
  at full size shows no visible difference.
- Names that differed only by extension or case get it in the new name (`anelia-jpg.webp`,
  `kgbl-jpg.webp` / `kgbl-jpeg.webp`). Old to new paths: `web/scripts/images/webp-map.json`.
- Removed from `web/public/img` (not used by any page; the originals stay in the repo-root
  `img/`): two saved-webpage `_files` folders, unfinished `.crdownload` downloads,
  `.DS_Store` files and unused drafts and photos (69 files, about 53 MB).
- `legacy:import` rewrites the generated `.jpg`/`.png` paths to WebP (`optimize.mjs --refs`),
  and `diff-content` compares legacy images through the map. All checks still pass.

## Proofreading review: fixes applied (2026-10-12)

The editorial/spelling/logic review of every page in both languages (507 findings, published as
a private review page) was approved for fixing in full. The fixes are recorded corrections like the
earlier ones, one module per area in `web/scripts/legacy/qa/*.mjs` (739 entries, each naming the
finding IDs it resolves, e.g. `F19-03`), loaded by `corrections.mjs` after the existing fixes.
Check a module with `node scripts/legacy/qa-validate.mjs scripts/legacy/qa/<name>.mjs --show`;
`qa-show.mjs "<text>"` finds text in the corrected legacy pages. Hand-maintained files edited
directly: `pages/home.ts` (card dates in one style, Erasmus date), `news/berlin-nikopolis-genk-2026.ts`,
and the listing `dates` of festivals/masterclasses/competitions (en dash; conducting 2025 is 8–10 July).
`registry-choices.json`: García de Paz pinned to festivals/2019 (where his bio was fixed).
`legacy:import`, `typecheck` and `legacy:check` (loose + strict) all pass.

Changes that remove or move content (worth a look):
- Conducting 2025: the Taipei choir text is kept once; the short KGBL and Armonia "Demonstrative
  choir / Category" sections are removed (their facts were moved into the full texts).
- Festival 2023: the second copy of Accommodation / Selection / Conditions (with the 2021 deadline)
  is removed; the second application section is now "Application Procedure for the Competition".
- Festival 2017 (Greek): results completed from the English (Category A winner, all 10 Free
  Programme choirs); the Greek special-prize list replaced by a translation of the English one.
- Festival 2025 (Greek): repertoire rule now matches the English (a cappella; "or with instruments"
  removed). Masterclass 2023 (Greek): three Greek-only paragraphs in the Urša Lah bio removed (a
  "2021 Preveza award" not supported by the 2021 page). Łukaszewski (Greek) is now a translation
  of the English bio. News France/Berlin 2024: closing paragraph copied from the CFN post removed.
- Our Choir (Greek): paragraphs put in the English order; Previous Festivals: country names
  translated on the Greek page, table renumbered 01–46. Previous Masterclasses: the 7th (2026)
  entry, commented out on the old page, is now shown.
- Workshop titles unified as "Nth Choral Conducting Workshop & Seminar" / "Νο Εργαστήριο &
  Σεμινάριο Διεύθυνσης Χορωδίας"; "Mrian/Miran Kozina Prize" → Marjan Kozina Prize (Čopi bio).

### Settled for launch (2026-10-12, `web/scripts/legacy/qa/answers.mjs`; the choir can overrule)
Decided from the pages themselves and public sources; each correction's `why` gives the evidence.
- Festivals list: 2022 is the **26th** competition (the 2022 page: "the 26th … canceled 2 years
  ago"); 2023 stays the 27th. 2021: the 39th festival was held without a competition
  (epirusgate.gr), so "26th International Choral Competition" is removed from the 2021 card; the
  2021 page keeps its invitation text. 2020: cancelled because of COVID (atpreveza.gr).
- Masterclass 2017: **Tuesday 4 – Thursday 6 July 2017** (EN/EL page, listing, metadata). The
  dates were copied from 2019; the weekdays and the last evening's opening ceremony (festival from
  6 July) fit, as in 2018 and 2019.
- Conducting 2022: finals rehearsal **3:00 p.m.** (the day's summary). Conducting 2025: final
  concert **8:30 p.m.** (the Final Concert section).
- 2019/2022 results: male choir NAPEV from **Batuje** (its bio; zpzp.si). 2024 (Greek): Vox Humana
  **bronze** in Athens 1996 and Rhodes 2001, as the English (Rhodes 2001 review: bronze).
- 2026: Aulon Naçi **b. 1983** (sq.wikipedia; the page's other entry). Gøtu Kirkju Ungdómskór from
  **Gøta**, not Toftir (sclfestival.org).
- Committee member Dimou: **Efstathia / Ευσταθία** ("Eftathia" and "Ευταθία" are both one letter
  short; no public source — please confirm).
- Kept as they are: Justin Smith's bio on the 2017 page (as supplied; the later events are true);
  Serebrovsky choir 83.75 (fits its silver medal; no other source); Masterclass 2023 fees
  (200€/120€, as 2021); Kla-sch's three named members (the university lists a different 2024
  line-up — Efemberg, Kobus, Jeziorowski, Łęski — so the fourth for 2026 is unknown).

### Still needs the choir's answer (text left unchanged)
- Home: date of the Saint Petersburg post (5 October 2017, or ≈10 August 2017?).
- 2015: organising committee identical to 2019's — right for 2015? Donati bio (2015) mentions
  later years — keep or trim?
- 2017: Lautitia score shown as "93.67 - 2 = 91.67" — show 91.67 only?
- 2018: Lyra "more than 42 years" (founded 1974) — update to 44?
- 2021: workshop participants "8–11 July 2021" (the festival ran 7–10 July)?
- 2023: programme heading 5–9 or 6–9 July? Saturday 16:45 Category C rehearsal with no C slot.
- 2025: Athena Gratsouna's diploma (violin + NKUA, or choral conducting)? Co-organiser: Regional
  Unit of Preveza or Region of Epirus?
- 2026: Thomas Greaves (1550–1650)? Sacred-music competition since 1995 — is 2026 the 30th?
- Composition 2022: the identical 90.63 / 83.00 scores. Composition 2025: Gianpiero or Giampiero
  Castagna; Nasti Daniela or Daniele? Masterclass 2026: Monica and Daniele Nasti both "(1969)"?
- Conducting 2022: Ambitus — edition numbers of the 2016 (22nd) and 2018/2019 (24th)
  competitions. Conducting 2025: which movement of Brahms' Requiem is drawn by lot?
- Masterclass 2021: the "two novelties … conducting competition" paragraph looks like 2022's.
- People: Meligopoulou — Assistant or Associate Professor, and her PhD field? Kontogeorgiou "over
  800 oratorios"? Kostis Konstantaras (form used).
- News: "Ι. Μ." in the Erasmus/France post — Holy Metropolis or Holy Monastery? The "Berlin 2024"
  post is word-for-word the France 2024 article (no Berlin content). Saint Petersburg festival name
  differs in Greek («Κόσμος του Τραγουδιού» / «Τραγουδώντας τον Κόσμο»).
- Conducting 2025 (Greek): Greek composers Konstantinos Matis / Tasos Pappas are in Latin script —
  their Greek spelling?

## New content (not on the legacy site)

- 2026-10-11: collaboration **Musica Orbis**
  (https://www.musicaorbis.com/prague-festival/2027/, logo `img/musica-orbis.png` /
  `web/public/img/musica-orbis.webp`) added to the home page in both languages.
- It is declared in `corrections.mjs` under "new content" so that `legacy:check` still compares
  like with like. The legacy `index.html` / `indexGreek.html` on disk are unchanged.
- To show it on the old site before cutover, add the same block to those two files and drop the
  correction.
- 2026-10-11: **2026 competition results**.
  - Files: 11 result images, originals in repo-root `img/results-2026/`, WebP at quality 88 in
    `web/public/img/results-2026/`.
  - On the 2026 festival page they form a "Results" section (`#results`). It comes first after the
    overview, is listed in the section navigator, and its images open in the photo viewer as one
    series.
  - Data and captions: `web/app/content/festival-results.ts`, maintained by hand.
  - The home-page news has a new first card, "Results of the 30th International Choral Competition
    of Preveza" (July 2026), linking to `/festival/2026#results` (`added: true` in `home.ts`).
  - Both are marked `data-legacy-ignore`, so the content check skips them.
  - Neither is on the old site.
- 2026-10-11: **two news posts**, maintained by hand in `web/app/content/news/`.
  - Greek: verbatim as supplied. English: my translation, to be reviewed.
  - Photos: originals in repo-root `img/news/`, WebP in `web/public/img/news/`.
  - On the home-page news carousel they come first, in this order:
    1. `berlin-nikopolis-genk-2026`: press release, Berlin (3–7 Sept), Ancient Nikopolis
       (28 Sept) and Genk (2–6 Oct).
    2. `nikopolis-2026`: the Children's Choir at the Great Theatre of Nikopolis.
    3. `taipei-lena-herber-2026`: Lena Herber (winner of the 2nd conducting competition, 2025)
       with the Taipei Philharmonic Chamber Choir, National Concert Hall, Taipei. The photos show
       the Taipei International Choral Festival 2026 (24 Jul – 2 Aug), so the card says "Summer
       2026". The post's ordering date is 2 Aug 2026.
  - In the Greek text of the Berlin–Genk press release, "Ανέλια(ς) Στεφάνοβα" is written
    "Anelia Stefanova". This follows the client's rule that non-Greek names stay in Latin script.
  - The supplied Greek text of the press release has these slips, kept as supplied (not fixed):
    - "του ταξιδιου" (accent missing);
    - "«Αρμονίας»,ταξίδεψε" (space missing after the comma);
    - "κ.κ.  Κωνσταντίνου" ("κ.κ." is the plural form, followed by a double space);
    - "τα σύνορα της ." (space before the full stop);
    - "το Γενκ" where the lead says "τη Γενκ".

- 2026-10-13: **Festival 2027 page** (`/festival/2027`), maintained by hand in `web/app/content/festivals/2027.ts`.
  - English: taken (shortened) from the 2027 documents on the site, `Rules45thICFP-EN.docx` and `RulesICCP2027.docx`.
    Greek: my translation, to be reviewed. French, Italian, German, Spanish: translated and checked as usual.
  - Poster: the festival logo until a 2027 poster exists. Menu: "Festival 2027" added above "Festival 2026".
    The home page's 45th-festival banner links to it.
  - Update it as news comes (programme, jury, choirs, poster); new English text then needs translating
    (`node scripts/i18n/status.mjs`).
  - The 2027 documents disagree with each other or with the site (kept out of the page; for the choir):
    - `ApplicationForm45thICFP-EN.docx` gives the dates as "6 – 11 July 2027"; everything else says 8–11 July.
    - `ApplicationFormICCP2027.docx` says "44th International Choral Festival of Preveza (31st International
      Choral Competition)"; it should be the 45th.
    - The festival rules list the committee as "Sylvia Soldatou" and "Ioannis Ditsos, Member" (also "Member" for
      Kotsi and Antoniou); the site writes "Silvia Soldatou", "Ioannis Ntitsos" and "Commissioner". The page
      follows the site.
    - The competition rules name the composer "Daniela Nasti"; the composition competition pages also have
      "Daniele" (already on the open list).
    - There are no Greek versions of the 2027 documents; the Greek page links to the English ones.
  - Compulsory works 2027 (page `/festival/2027/compulsory-works`, files in `web/public/compulsory-works-2027/`,
    from the committee's WeTransfer of 2026-10-15). The page follows the competition rules; the scores differ:
    - The rules write "Gianpiero Castagna"; his scores (Jubilate Domino, Moonlight) write "Giampiero".
    - The score of "Trees" says "2nd award … Competition of Preveza 2026"; the others and the rules say 2025.
    - The composition competition 2025 page lists "I PAINTED A PEACE"; the score and the rules say "I painted peace".
    - "Ode to the Universe" (a scanned score) prints only "Text Daniela Nasti", no composer line.
    - Category A has no recordings; durations of Jubilate Domino and Moonlight are not printed on their scores.

## Remaining before cutover

Ready since 2026-10-12 (branch `new-site`):
- `.github/workflows/deploy.yml` builds `web/` and publishes `web/build/client` to GitHub Pages;
  it type-checks and checks every file and link first, and publishes nothing if a check fails.
- Search engines: every page has a canonical link, EN↔EL `hreflang` links, a description (the
  legacy pages' were empty) and link-preview tags; `sitemap.xml`, `robots.txt` and a bilingual
  `404.html` are written at build time (`web/scripts/seo.mjs`, run by `npm run build`).
- Legacy URLs keep working through the redirect pages (`npm run legacy:redirects`); they now point
  at the final address (trailing slash), as do the canonical links.

To switch:
1. Visual review in the browser (the checks prove content, not layout): `cd web && npm run build`,
   then `npx vite preview` (http://127.0.0.1:4317/en/).
2. Merge `new-site` into `main`.
3. GitHub: Settings > Pages > Build and deployment > Source: **GitHub Actions**. Then Actions >
   "Deploy site" > Run workflow (or it runs on the next push that changes `web/`).
4. Google Search Console: submit `https://armoniachoir.org/sitemap.xml`.

Rollback: set the Pages source back to "Deploy from a branch" (main, root): the legacy HTML is
still in the repository and is served again within a minute.

Not carried over: old addresses of individual images (`/img/….jpg`); the pages themselves all
redirect. The choir's open questions (above) don't block the switch: those texts stay as on the
legacy site until answered.

## Session notes (history)

> The Aug 2026 notes below describe the first, hand-transcribed pass. Its
> "verified" claims did not hold up (see Status above); the content they
> describe has since been regenerated verbatim. Kept for the legacy-quirk
> details they record.

- 2026-08-13: found two wiring bugs left over from the prior session that
  silently broke the build/output despite content files being "extracted":
  `web/app/content/festivals/index.ts` was stubbed to an empty array with
  the real `2025.ts` import commented out (a leftover
  "unblock typecheck" TODO), and `festivals/2025.ts` imported the shared
  schema via the `~/content/types` alias instead of the relative `../types`
  path every other content file uses -- the alias isn't resolvable at the
  point `react-router.config.ts` loads (chicken-and-egg: the Vite plugin
  that understands `~/*` isn't active yet while the config that registers
  it is still being loaded), which broke `npm run typecheck`/`build`
  entirely once `2025.ts` was wired back in. Also `news/index.ts` had
  `berlin-2024.ts` fully extracted but never imported. All three fixed;
  `npm run typecheck` and `npm run build` (full prerender) both pass clean
  now with 2025 festival, 2026 masterclass, both 2025 competitions, and
  both news posts all rendering.
- 2026-08-13: extracted and verified single-2015, single-2016, single-2017,
  single-2018 (23 participating choirs -- the largest page so far).
  Widened `participatingChoirSchema.description` from a single localized
  string to localized rich text (paragraph array) in `types.ts`, and
  updated `ParticipatingChoirs.tsx` to render each paragraph, because
  2018's choir write-ups run 2-4 paragraphs each and the old single-string
  field would have silently squashed paragraph breaks into one run-on
  block. Also found (not yet fixed): **`festivals/2025.ts`'s
  `participatingChoirs` array is empty** even though the file's own
  header comment describes detailed extraction decisions for choir
  highlights/bullets/countries -- the content described in the comment was
  apparently never actually written into the data, or was lost. Needs a
  revisit: re-read single-2025.html's choir section and fill in the array
  before 2025 can be marked `verified`.
- 2026-08-13 (cont'd): extracted and verified single-2019 (28 gallery
  images, 22 choirs, 6-category medals table), single-2021 and single-2023
  (pre-festival rules/call-for-participation pages -- no jury/choirs/medals
  exist on these, captured as `sections` instead, following 2025.ts's
  established pattern for freeform policy copy; 2023's day-by-day
  programme folded in from schedule2023.html as `schedule`), single-2022
  (found and documented, not silently fixed, that its entire choir list
  and medal results are a verbatim copy-paste of 2019's -- same choirs,
  scores, and even the same missing "Category B" gap, but independently
  re-translated into Greek -- flagging for whoever verifies the real 2022
  results with the organizers), and single-2024 (5 jury + 19 choirs, plus
  the same rules boilerplate as 2021/2023 with fees bumped to reflect
  2024). **All 9 pending festival years (2015-2019, 2021-2024) are now
  verified** -- combined with the already-extracted 2025, every full
  edition through 2025 has been transcribed. Only `ICFP2026` (the current,
  still-forming flagship edition) and revisiting 2025's empty
  `participatingChoirs` remain in the Festivals table. `npm run typecheck`
  and `npm run build` pass clean after every single addition this session.
  before 2025 can be marked `verified` (currently correctly still marked
  `extracted`, not `verified`, so this hasn't shipped as broken -- but
  don't assume the comment describes real data without checking).
- 2026-08-13 (cont'd): extracted and verified masterclass2017 (1st Choral
  Conducting Workshop & Seminar, 2-4 July 2017; 2 mentor bios -- Ambrož
  Čopi, Theodora Pavlovitch; 10 topics; 3-day schedule; the audience/leaders/
  active-passive-participation blockquote captured as a `sections` entry
  since `masterclassSchema` has no dedicated field for it). Noted:
  Pavlovitch's bio is split into 3 paragraphs on both language pages but at
  *different* sentence boundaries between English and Greek -- transcribed
  verbatim per page rather than reconciled. The demonstrative ensemble
  ("Academic Choir of the University of Primorska") is named only in the
  blockquote with no bio/photo on this page, so `demonstrativeChoirs` is
  left empty rather than fabricated. `npm run typecheck` and `npm run
  build` pass clean; both `/en/masterclass/2017` and `/el/masterclass/2017`
  grep-verified against the rendered HTML.
- 2026-08-13 (cont'd): extracted and verified masterclass2018 (2nd Choral
  Conducting Workshop & Seminar, 3-5 July 2018; same two mentors as 2017,
  word-for-word identical bios on both pages, reused verbatim). Found a
  genuine legacy bug on **both** language pages: the schedule's three day
  headers read "...2019" instead of "...2018" (e.g. "Tuesday, July 2nd,
  2019") even though the page's title/poster/intro and the blockquote's own
  festival dates all say 2018 -- transcribed verbatim per the
  don't-silently-fix policy, flagged in the file's header comment. Also
  transcribed a literal "?" in the Greek blockquote where a semicolon is
  clearly intended (mirrors the English text's "; "). `npm run typecheck`
  and `npm run build` pass clean; both locale pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified masterclass2019 (3rd Choral
  Conducting Workshop & Seminar, 2-4 July 2019; 3 mentors -- Ambrož Čopi,
  Theodora Pavlovitch [bios reused verbatim from 2017/2018], and Marco A.
  García de Paz with a *different* bio here than the one used for him on
  `masterclasses/2026.ts`, transcribed as printed rather than reconciled;
  same broken "img/Marco Antonio García de Paz.jpeg" path fixed to the
  real `MarcoAntonioGarcíadePaz.jpeg` asset as in the festival years).
  First masterclass page with real `demonstrativeChoirs` bios (Chamber
  Choir of the Music and Ballet Conservatory Ljubljana + Chamber Choir
  KGBL, both fully captured). Found and transcribed verbatim two more
  legacy date/link bugs in the blockquote on both language pages: a date
  range that mixes years ("Friday, 5th July 2018 to Sunday, 7th July
  2019"), and a demonstrative-ensemble sentence naming the Ljubljana choir
  but linking to the *other* choir's website (choirkgbl.eu) right after.
  `npm run typecheck` and `npm run build` pass clean; both locale pages
  grep-verified.
- 2026-08-13 (cont'd): extracted and verified masterclass2021 (4th Choral
  Conducting Workshop and Seminar, 4-6 July 2021). Like the 2021/2023
  festival pages, this is a pre-event call-for-participation page with no
  topics list, schedule, mentor bios, or demonstrative-choir bios -- just
  the poster, an 8-name jury sidebar list with no bios attached to anyone,
  and a single blockquote. Since `mentors[].bio` is required, the 8 names
  were captured as a `sections` entry ("Jury Committee") instead of
  fabricating bios or forcing them into `mentors`. `npm run typecheck` and
  `npm run build` pass clean; both locale pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified masterclass2022 (5th Choral
  Conducting Workshop and Seminar, 4-6 July 2022). Same "call for
  participation" shape as 2021 for the 8-name jury sidebar (no bios,
  captured as a `sections` entry), but this page also has two
  demonstrative choirs with real bios (Voci Contra Tempo / conductor Sofia
  Gioldasi, and Ambitus Choir / conductor Katerina Vassilikou) plus a full
  repertoire list and schedule -- so it's a hybrid of the two prior
  patterns. Found and transcribed verbatim: an EN/EL length mismatch in
  Katerina Vassilikou's bio (one short paragraph in English vs. four much
  more detailed paragraphs in Greek); two schedule day headers reading
  "2021" instead of "2022"; a schedule slot ("Discussion with Gary
  Graden...") printed three times in a row identically on both language
  pages; and typos "04-30 p.m." and "Award Giving Ceremoney". Repertoire
  spans two demonstrative choirs x two tracks (Masterclass/Seminar) with
  no schema field for that grouping, so each `piece` gets a
  "[Choir – Track]" tag appended rather than losing the grouping entirely.
  `npm run typecheck` and `npm run build` pass clean; both locale pages
  grep-verified.
- 2026-08-13 (cont'd): extracted and verified masterclass2023 (6th Choral
  Conducting Seminar and Masterclass, 1-4 July 2023) -- **all 6 pending
  masterclass years (2017-2019, 2021-2023) are now verified**, matching
  festivals; only masterclass2026 (already extracted, not yet verified)
  remains outstanding in that table. Richest masterclass page so far:
  organizing committee, 2 mentors (Ragnar Rasmussen, Urša Lah), 1
  demonstrative choir (Utopia & Reality Chamber Choir), 4-day schedule,
  16-piece repertoire, and fees. Found and documented the most severe
  EN/EL divergence yet: Urša Lah's bio is 3 paragraphs in English vs. 6 in
  Greek (extra content about a 2021 Preveza competition result and her
  focus on composer Ola Gjeilo), and the page's closing "who can apply"
  content is *entirely different* between languages (English: eligibility
  bullets + fees + CV/video process; Greek: three unrelated sentences about
  registration-only signup and no hotel accommodation) -- both transcribed
  in full under one `sections` entry rather than reconciled. Also found and
  **deliberately did not carry over** a stray English-only blockquote at
  the page bottom referencing "the 38th ICF of Preveza" and dates from
  2021 -- a leftover copy-paste fragment with no Greek counterpart and no
  home in the schema; documented in the file's header comment rather than
  silently dropped without a trace. `npm run typecheck` and `npm run build`
  pass clean; both locale pages grep-verified.
- 2026-08-13 (cont'd): masterclasses fully caught up with festivals, so
  moved on to Competitions. Extracted and verified icc2022 (1st
  International Choral Composition Competition of Preveza) -- 4-member
  jury with full bios (Ambrož Čopi, Vytautas Miškinis, Javier Busto, Ko
  Matsushita; Miškinis's bio is much shorter in Greek, missing his
  adjudicating-panel history and works catalogue entirely), a 12-entry
  awards list across two categories plus 3 special prizes, and 3
  jury-recommended works. Found and transcribed verbatim a same-page
  spelling inconsistency in the English source itself: the medals list
  calls a composer "Luce Mayernik" while the prose recap two paragraphs
  later calls the same person "Luke Mayernik" (Greek is internally
  consistent, always "Λουκ Μάγιερνικ" / Luke). Also flagged: all 6
  Category A medal-list entries print the identical score "90.63 Points"
  even for entries that only earned a Certificate of Attendance, not a
  cash prize -- almost certainly a copy-paste artifact in the source, kept
  as printed. `npm run typecheck` and `npm run build` pass clean; both
  locale pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified iccc2022 (1st International
  Choral Conductors' Competition of Preveza) -- **Competitions table is
  now fully caught up** (composition-2022, composition-2025,
  conducting-2022, conducting-2025 all verified). Unlike its composition
  sibling, this page is a pre-event roster/program page with no announced
  winners, so `awards` is empty and the tier/rules text lives in a
  `sections` entry instead (matching `conducting-2025.ts`); `jury` here is
  name-only for all 7 members (no bios or profile links exist anywhere on
  the page, unlike icc2022's or iccc2025's jury). `competitionSchema` has
  no `schedule` field, so the day-by-day program was flattened into a
  `sections` entry, and its entries were transcribed in the exact
  (chronologically jumbled) order the source prints them, on both language
  pages. No dedicated field exists for a roster of named competitors
  either, so the 10 competing conductors' photos went to `gallery` (with
  `alt` as their name) and their bios into a "Competing Conductors"
  section as "Name: bio" paragraphs. Found and transcribed verbatim: the
  recurring 2022-template year bug (Tuesday/Wednesday schedule headers say
  "2021" instead of "2022," same as `masterclasses/2022.ts`); an English
  heading/body name mismatch ("Tommas Szarka" vs. "Tamas Szarka"); a
  he/she pronoun slip in Alexandros Komnas's English bio; and a Greek
  copy-paste slip where the Voci Contra Tempo paragraph's subject reads
  "Υποδειγματικές Χορωδίες" (the section heading) instead of the choir's
  own name. `npm run typecheck` and `npm run build` pass clean; both
  locale pages grep-verified.
- 2026-08-13 (cont'd): moved on to News. Extracted and verified erasmus
  (WestEastChord Erasmus+ kick-off meeting, Nov 2017) -- a short
  single-image announcement with no itinerary, acknowledgments, or
  gallery. `npm run typecheck` and `npm run build` pass clean; both locale
  pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified saint-peter (2nd prize,
  folklore category, 15th "Singing World" festival, Saint Petersburg,
  August 2017). No explicit publish date on the page, so `date` uses the
  day after the festival's stated end date as a reasonable inferred value
  (documented in the file's header comment, not stated verbatim in the
  source). Found and transcribed verbatim a Greek mistranslation: "Saint
  Petersburg" is rendered the first time as "τον Άγιο Πέτρο" (literally
  "Saint Peter," as if a person's name) before the same paragraph
  correctly switches to "Αγία Πετρούπολη" for the rest of the piece.
  `npm run typecheck` and `npm run build` pass clean; both locale pages
  grep-verified.
- 2026-08-13 (cont'd): extracted and verified cfn (International Choral
  Festival of Preveza joins the Choral Festival Network). This page has no
  publish date on it at all; the "29th March, 2019" date used here was
  recovered from this same post's entry in the home page's news carousel
  (`web/app/content/pages/home.ts`) -- the only place a date exists for
  it. `npm run typecheck` and `npm run build` pass clean; both locale
  pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified report091225, split into two
  entries per issue #6 -- **News is now fully caught up (7/7 posts
  verified)**: `hospital-thank-you` (the choir's Dec 7, 2025 breastfeeding-
  awareness charity concert thank-you note, with the bulleted thanks list
  captured in `acknowledgments` rather than duplicated in body prose,
  matching `berlin-2024.ts`'s pattern) and `thessaly-2025` (the two
  upcoming Dec 13/14, 2025 Tyrnavos and Larissa festival participations,
  with the two-day schedule also captured as a structured `itinerary`).
  `npm run typecheck` and `npm run build` pass clean; all four locale pages
  (two entries x two languages) grep-verified.
- 2026-08-13 (cont'd): fixed `festivals/2025.ts`. A background subagent
  attempted this first but was terminated early by a session/usage limit
  before finishing; the fix was then completed directly. The file's own
  header comment already described detailed extraction decisions for
  `participatingChoirs`, `sponsors`, `documents`, and `sections`, but all
  four arrays were actually EMPTY -- the described work had apparently
  never been written into the data, or was lost. Filled in from a full
  re-read of both `single-2025.html` and `single-2025Greek.html`: all 19
  participating choirs (the page numbers them 1-2, 4-20 -- there's no
  "Choir 3", not a gap in this extraction), 4 sponsor tiers (8 sponsors),
  3 competition-rules .docx documents, and 11 policy sections
  (Introduction through Broadcasting Rights). Re-confirmed the
  already-documented country/flag bug still holds exactly as described
  (choirs 14-19 wrongly show "🇵🇹 Portugal" on the English page; Greek
  footers are correct and used instead; choir 20 has no footer on either
  page). **2025 festival, and with it all of Festivals, Masterclasses,
  Competitions, and News, are now fully verified.** Only `ICFP2026` (the
  current, still-forming flagship edition) remains pending anywhere in
  this file. `npm run typecheck` and `npm run build` pass clean; both
  locale pages grep-verified.
- 2026-08-13 (cont'd): extracted and verified `ICFP2026.html` /
  `ICFP2026-el.html` -- by far the largest single page in this migration.
  **This was the last pending row in the entire file -- every table
  (Festivals, Masterclasses, Competitions, News) is now fully verified.**
  Captured into `festivals/2026.ts`: the president's invitation letter
  (intro + pullQuote), the 7-member organising committee, the 7-member
  International Jury Committee with full bios, all 26 participating-choir
  bios, the 6-subsection + final-note Programme Explanations (as 7
  `sections` entries), and all 8 real `.docx` downloads (4 English + 4
  Greek -- this page, unlike 2025's, links to genuinely separate files per
  language, confirmed on disk; both kept as distinct `documents` entries
  rather than dropping one language's set).
  - Per explicit user instruction (asked via AskUserQuestion given the
    schedule's density -- dozens of events across 7 days, each listing
    several choirs with full repertoire), the entire schedule was captured
    at full fidelity, flattened into the `description` string of each
    `scheduleEventSchema` event (category, venue, choir roster and every
    repertoire piece/composer folded into one string per event, choirs
    separated by " | ", pieces by "; ") rather than summarized or
    dropped. All 7 days, every event, and all 100+ repertoire pieces are
    represented.
  - Confirmed by direct comparison that repertoire piece titles are
    identical (untranslated) between the English and Greek pages for
    choirs singing non-Greek-language repertoire, but that choirs singing
    Greek-language folk/art-song repertoire (Argostoli, Anatoli,
    BELCANTES, Nafplio, Mixed Choir of Livadia "Erkyna", Pieria Teachers'
    Choir SEPE) get real Greek-script piece titles (with « » quotes) on
    the Greek page versus a Latin-script transliteration on the English
    page -- both transcribed as printed on their own page rather than
    invented or translated by us.
  - The English "Essence of Elements" bio (and its Greek counterpart)
    contains a duplicated block: a shorter first version of its three
    paragraphs, then a longer second version repeating the same facts plus
    two new ones (the performers are Saint Louis College of Music
    students; the choir's participation is under the Erasmus+ programme).
    Only the longer, more complete version was kept, per the
    already-established "don't re-duplicate a copy-paste that adds no new
    fact" pattern from `festivals/2018.ts`'s "Lyra" choir.
  - Dr. Leo Li's English jury bio ends "...Carnegie Hall.GR" -- a stray
    "GR" glued onto the sentence with nothing corresponding to it on the
    Greek page. Treated as a leftover paste fragment and not reproduced.
  - The English Organising Committee list spells "Commissioner"
    inconsistently ("Commisioner" for two members, "Commissioner" for the
    third) -- kept verbatim per member. The Greek list uses the plain word
    "Μέλος" ("Member") for all three, not the "Επίτροπος" translation used
    by 2025's committee -- also kept verbatim rather than harmonized.
  - `country`/`flagEmoji` for all 26 choirs were derived directly from
    each choir's own stated location line (e.g. "Mol, Belgium" ->
    Belgium/🇧🇪) since, unlike 2025's numbered choir list, this page has no
    per-choir footer stating them explicitly.
  - `npm run typecheck` and `npm run build` pass clean; both `/en/
    festival/2026` and `/el/festival/2026` grep-verified against the
    rendered static HTML for jury names, choir names, venue names (English
    and Greek), and section headings.

- 2026-10-10: compared every page text-by-text against the legacy HTML
  and found the August transcription unreliable (see Status). Added
  per-language names/dates/links, ordered rich-text blocks (lists,
  headings, photos, links, statistics table), sidebars ("related" links),
  page-specific titles and `<html lang>`, then regenerated all content
  verbatim with `web/scripts/legacy/` and verified 0 differences in loose
  and strict mode, plus a reverse check and a missing-file check.

## How to continue this migration

1. After any change to a legacy page: `cd web && npm run legacy:import &&
   npm run legacy:check`. Both comparisons must report 0 differences.
2. To fix another legacy mistake, add it to `web/scripts/legacy/corrections.mjs`
   (not to the generated data files), then import and check again.
3. Work through "Still needs your decision" and "Remaining before cutover" above.
4. Only then talk about DNS/CNAME cutover -- the old site keeps serving
   traffic until then.
