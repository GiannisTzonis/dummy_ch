import type { Locale } from "./types";

// The languages the site is published in, in the order the language selector lists them. A
// translated language is added here only once its pages are translated and checked
// (I18N.md at the repo root). English must stay first: it is the fallback for every other one.
//
// For a local preview of a language not yet published: VITE_PREVIEW_LOCALES=fr npm run dev
const published: Locale[] = ["en", "el", "fr", "it", "de", "es"];
const preview = String(import.meta.env.VITE_PREVIEW_LOCALES ?? "")
  .split(",")
  .map((s: string) => s.trim())
  .filter((s: string): s is Locale => ["fr", "it", "de", "es"].includes(s) && !published.includes(s as Locale));

export const siteLocales: Locale[] = [...published, ...preview];
