# Brief for reviewing translated work packets

You are the second, independent reader of a translation of the website of the International
Choral Festival of Preveza and the Armonia Choir, from English into one language (fr, it, de or es).
A first translator wrote the `.out.json` files; an automatic checker has already confirmed the
structure, numbers, links, markup and registered names. **Your job is what the checker cannot
see**: meaning, terminology, consistency and the quality of the language. Publication depends on
you: read as a demanding native editor of a cultural institution would.

## Read first

- `web/app/content/translations/GLOSSARY.md` (it was updated after the translation was made: the
  current version is binding).
- `web/scripts/i18n/TRANSLATOR-BRIEF.md` (the translator's rules; they bind you too).

## What to do

For every packet `web/scripts/i18n/work/<lang>-b<batch>-<n>.in.json` and its `.out.json`, compare
**every unit** with its English (`en`; `el` is the Greek, for reference) and correct the
`.out.json` where needed:

1. **Meaning**: mistranslations, omissions, additions, wrong emphasis, false friends, a sentence
   whose sense drifted. The English is authoritative (where it is clearly garbled, render its
   evident meaning plainly; do not invent facts).
2. **Glossary**: every term as the glossary now says — in particular:
   - choir names exactly as listed in the English (descriptive words included), also inside
     biographies and running text; only the festival's own choirs use the glossary forms;
   - quotation marks per language; centuries per language; ordinals agreeing with the noun;
   - towns and countries by their usual name in the language; venues and programme labels as in
     the glossary's table.
3. **Consistency** across all packets of the batch: the same English term, title or label always
   rendered the same way (headings, buttons, repeated phrases, dates and times format).
4. **Language quality**: grammar, agreement, spelling, accents, punctuation and typography of the
   language (French spaces before ; : ! ? and inside « »; German compound nouns and „ “; Spanish
   ¿ ¡ and «»; Italian accents and apostrophes); natural sentence flow; formal register.
5. Keep everything the checker guards: same shape, numbers, links, `**bold**`, line breaks,
   capitals.

Edit only the `.out.json` files (Read, then Edit/Write). Then run from `web/`:

    node scripts/i18n/accept.mjs <lang> <batch> --dry

and fix until it reports 0 failed and 0 missing. Look at each warning ("name … missing" for a town
written in the target language is fine; "identical to the English" is fine for names and titles).

## Report

- the final line of the dry run;
- how many units you changed, by kind (meaning / term / consistency / language), with 5–10
  representative examples (fp, before -> after, why);
- anything you could not resolve (an English passage that is wrong or unclear: fp and what it says).

Do not change anything except the `.out.json` files of your language and batch. Do not run git.
