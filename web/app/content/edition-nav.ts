// Used by the routes' loaders only (build time).
// The navigation before the footer of festival, masterclass and competition pages: every other
// edition of the same kind, newest first, with its poster, title and dates. (It replaces the
// legacy pages' hand-picked "Recent Festivals" lists and previous/next strips.)
import type { Locale } from "./types";
import { tr } from "~/lib/locale";
import { translate } from "~/lib/translations.server";
import { festivals } from "./festivals";
import { masterclasses } from "./masterclasses";
import { competitions } from "./competitions";

type Item = { href: string; title: string; subtitle?: string; image?: string };
export type EditionNav = { heading: { en: string; el: string } & Partial<Record<Locale, string>>; items: Item[] };

const headings = {
  festival: { en: "Other Festivals", el: "Άλλα Φεστιβάλ", fr: "Autres festivals", it: "Altri festival", de: "Weitere Festivals", es: "Otros festivales" },
  masterclass: {
    en: "Other Masterclasses",
    el: "Άλλα Masterclass",
    fr: "Autres masterclasses",
    it: "Altre masterclass",
    de: "Weitere Meisterkurse",
    es: "Otras clases magistrales",
  },
  competition: { en: "Other Competitions", el: "Άλλοι Διαγωνισμοί", fr: "Autres concours", it: "Altri concorsi", de: "Weitere Wettbewerbe", es: "Otros concursos" },
} as const;

type Text = { en: string } & Partial<Record<Locale, string>>;
type Edition = { slug: string; year: number; title: Text; dates?: Text; poster?: string };

function nav(kind: keyof typeof headings, list: Edition[], current: string, locale: Locale): EditionNav {
  return {
    heading: headings[kind],
    items: [...list]
      .filter((e) => e.slug !== current)
      .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug))
      // each edition's title and dates from its own translation (the page's translation file:
      // "festival-2026" etc.; English where there is none)
      .map((e) => {
        const t = translate(`${kind}-${e.slug}`, { title: e.title, dates: e.dates }, locale).data;
        return { href: `/${kind}/${e.slug}`, title: tr(t.title, locale), subtitle: t.dates && tr(t.dates, locale), image: e.poster };
      }),
  };
}

export const festivalNav = (slug: string, locale: Locale) => nav("festival", festivals, slug, locale);
export const masterclassNav = (slug: string, locale: Locale) => nav("masterclass", masterclasses, slug, locale);
export const competitionNav = (slug: string, locale: Locale) => nav("competition", competitions, slug, locale);
