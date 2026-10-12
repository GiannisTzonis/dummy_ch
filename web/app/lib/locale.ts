import { useParams } from "react-router";
import { isLocale, type Locale } from "~/content/locales";
import type { MaybeLocalized } from "~/content/types";
import { siteLocales } from "~/content/site-locales";

// The language of an address's first segment ("/fr/festival/2026" -> "fr"): one of the published
// languages, else English.
export function localeOf(lang: string | undefined): Locale {
  return isLocale(lang) && siteLocales.includes(lang) ? lang : "en";
}

export function useLocale(): Locale {
  const { lang } = useParams<{ lang: string }>();
  return localeOf(lang);
}

export function localizedHref(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

// A localized value in the given language, or the English where it has no translation yet (the
// source texts always have English and Greek; French, Italian, German and Spanish are added by
// translation). Also for the interface wording tables in the components.
// (Typed as the English value, so wording tables declared `as const` can be used too.)
export function tr<V extends { readonly en: unknown }>(value: V, locale: Locale): V["en"] {
  return ((value as Partial<Record<Locale, unknown>>)[locale] ?? value.en) as V["en"];
}

export function pick(value: MaybeLocalized, locale: Locale) {
  return typeof value === "string" ? value : tr(value, locale);
}

const siteName: Record<Locale, string> = {
  en: "Armonia Choir",
  el: "Χορωδία Αρμονία",
  fr: "Chœur Armonia",
  it: "Coro Armonia",
  de: "Chor Armonia",
  es: "Coro Armonia",
};
export const siteNameOf = (locale: Locale) => siteName[locale];

// Browser-tab title: "<page> | Armonia Choir" (each language with the choir's name in it).
export function pageTitle(title: string, locale: Locale) {
  return `${title} | ${siteName[locale]}`;
}

// A page's long text (content, aside) for the data a prerendered page sends to the browser: its
// own language only (the other languages' pages have their own copies). A translated page also
// keeps the English: the fallback for anything not yet translated, and the source the page layout
// is worked out from (FestivalContent).
export function forLocale<T extends { content?: Record<string, unknown>; aside?: Record<string, unknown> }>(edition: T, locale: Locale): T {
  const keep = <V extends Record<string, unknown>>(v: V | undefined) => {
    if (!v) return v;
    const out: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(v)) out[k] = k === locale || (k === "en" && locale !== "el") ? val : [];
    return out as V;
  };
  return { ...edition, content: keep(edition.content), aside: keep(edition.aside) };
}
