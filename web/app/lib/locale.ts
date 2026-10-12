import { useParams } from "react-router";
import type { Locale, MaybeLocalized } from "~/content/types";

export function useLocale(): Locale {
  const { lang } = useParams<{ lang: Locale }>();
  return lang === "el" ? "el" : "en";
}

export function localizedHref(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export function pick(value: MaybeLocalized, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

const siteName = { en: "Armonia Choir", el: "Χορωδία Αρμονία" } as const;

// Browser-tab title: "<page> | Armonia Choir" (Greek pages use the Greek name).
export function pageTitle(title: string, locale: Locale) {
  return `${title} | ${siteName[locale]}`;
}

// A page's long text (content, aside) in its own language only, for the data a prerendered page
// sends to the browser: the other language's page has its own copy.
export function forLocale<T extends { content?: { en: unknown[]; el: unknown[] }; aside?: { en: unknown[]; el: unknown[] } }>(edition: T, locale: Locale): T {
  const keep = <V extends { en: unknown[]; el: unknown[] }>(v: V | undefined) =>
    v && ({ ...v, [locale === "en" ? "el" : "en"]: [] } as V);
  return { ...edition, content: keep(edition.content), aside: keep(edition.aside) };
}
