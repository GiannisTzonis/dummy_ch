// Every language the site can be shown in. English and Greek are the source languages (the legacy
// pages): every localized value has both. French, Italian, German and Spanish are translations
// (app/content/translations), optional per value: where one is missing the English is shown.
// Which languages are published is set in app/content/site-locales.ts.
// (Kept apart from types.ts so pages can use these without loading the schema library.)
export const allLocales = ["en", "el", "fr", "it", "de", "es"] as const;
export type Locale = (typeof allLocales)[number];
export const sourceLocales = ["en", "el"] as const;
export type SourceLocale = (typeof sourceLocales)[number];
export const isLocale = (v: unknown): v is Locale => typeof v === "string" && (allLocales as readonly string[]).includes(v);
