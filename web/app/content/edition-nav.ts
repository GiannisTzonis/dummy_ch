// The navigation before the footer of festival, masterclass and competition pages: every other
// edition of the same kind, newest first, with its poster, title and dates. (It replaces the
// legacy pages' hand-picked "Recent Festivals" lists and previous/next strips.)
import type { Locale } from "./types";
import { festivals } from "./festivals";
import { masterclasses } from "./masterclasses";
import { competitions } from "./competitions";

type Item = { href: string; title: string; subtitle?: string; image?: string };
export type EditionNav = { heading: { en: string; el: string }; items: Item[] };

const headings = {
  festival: { en: "Other Festivals", el: "Άλλα Φεστιβάλ" },
  masterclass: { en: "Other Masterclasses", el: "Άλλα Masterclass" },
  competition: { en: "Other Competitions", el: "Άλλοι Διαγωνισμοί" },
} as const;

type Edition = { slug: string; year: number; title: Record<Locale, string>; dates?: Record<Locale, string>; poster?: string };

function nav(kind: keyof typeof headings, list: Edition[], current: string, locale: Locale): EditionNav {
  return {
    heading: headings[kind],
    items: [...list]
      .filter((e) => e.slug !== current)
      .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug))
      .map((e) => ({ href: `/${kind}/${e.slug}`, title: e.title[locale], subtitle: e.dates?.[locale], image: e.poster })),
  };
}

export const festivalNav = (slug: string, locale: Locale) => nav("festival", festivals, slug, locale);
export const masterclassNav = (slug: string, locale: Locale) => nav("masterclass", masterclasses, slug, locale);
export const competitionNav = (slug: string, locale: Locale) => nav("competition", competitions, slug, locale);
