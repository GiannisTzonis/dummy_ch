# Brief for translating work packets

You translate the website of the International Choral Festival of Preveza and the Armonia Choir
(Preveza, Greece) from English into one target language: French (fr), Italian (it), German (de) or
Spanish (es). The site is the festival's official face to choirs, conductors and composers
worldwide: the result must read as if written by a professional native writer for a cultural
institution — accurate, clear, natural, never machine-like.

## Read first

- `web/app/content/translations/GLOSSARY.md` — mandatory terms and forms. Follow it exactly.

## Input and output

- Input packet: `web/scripts/i18n/work/<lang>-b<batch>-<n>.in.json` =
  `{ "lang": "fr", "units": [ { "fp": "606ba8bd", "en": <English>, "el": <Greek, sometimes>, "where": "page:field" } ] }`
- Output: `web/scripts/i18n/work/<lang>-b<batch>-<n>.out.json` = one JSON object with **every** unit
  of the packet: `{ "<fp>": <translation>, ... }`. Write it with the Write tool (valid JSON, UTF-8,
  real characters, no escapes needed for accents).
- `en` is either a string, or a block object. The translation has **exactly the same shape**:
  - string -> string
  - `{ "heading": "...", "level": 2, "align": "center" }` -> same keys and same level/align, only
    `heading` translated
  - `{ "p": "...", "align": "center" }` -> same, only `p` translated
  - `{ "list": ["...", "..."] }` -> same number of items in the same order, each translated
  - `{ "stats": ... }` -> only `head` labels and each row's `country` translated; serial, flag,
    visits, percent unchanged
  - never add or drop fields.
- `where` tells you the page and field (e.g. `festival-2026:content[37]`, `page-home:newsItems.3.title`):
  use it for context (a heading vs a button vs a paragraph). Units are in page order, so
  neighbouring units are neighbouring text.
- `el` (Greek) is reference only: translate from the English; use the Greek only to resolve an
  ambiguity.

## Rules (an automatic checker rejects violations)

1. **Meaning and facts exactly as the English.** Nothing added, nothing dropped, nothing softened,
   no explanations. Every sentence of the English is translated.
2. **Numbers**: every number of the English appears in the translation (years, dates, scores,
   prices, ordinals, phone numbers, counts). Write dates/ordinals/prices/times the target
   language's way per the glossary (decimal comma is fine: 91,67; "8:30 p.m." may become 20:30 /
   20h30).
3. **Names never translated**: people, choirs, ensembles, works, foreign venues and
   organisations exactly as in the English (with all diacritics: Ambrož Čopi, Ēriks Ešenvalds,
   García). Greek towns per the glossary.
4. **Markup**: keep `[text](link)` links (translate the text, never touch the link), `**bold**`
   markers (same number), and line breaks `\n` (same number, same places).
5. **Capitals**: a text written all in capitals in the English stays all in capitals.
6. **Terms**: the glossary's terms, consistently across all units.
7. **Register**: formal, warm, professional; addressing the reader formally (vous / Lei / Sie /
   usted). Choral and musical vocabulary as a musician of that language would use it.
8. **Length**: about as long as the English (the checker rejects a translation under 60% or over
   190% of the English's length for longer texts).
9. Short texts that are only a name, a number or a code (e.g. "Ambrož Čopi", "SATB", "a cappella")
   stay as they are.

## Check your work

After writing an output file run, from `web/`:

    node scripts/i18n/accept.mjs <lang> <batch> --dry

It checks every packet of that language and batch and lists each failing unit with the reason.
Fix the failures in your .out.json files and run it again until it reports 0 failed and 0
missing. Do not edit anything except your `.out.json` files. Do not run git.
