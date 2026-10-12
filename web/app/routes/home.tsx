import { useLoaderData } from "react-router";
import page from "~/content/pages/home";
import { HomePage } from "~/templates/HomePage";
import type { Locale } from "~/content/types";
import { localeOf, tr } from "~/lib/locale";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Verbatim <title> of index.html / indexGreek.html (the translated ones: I18N.md).
const titles: { en: string } & Partial<Record<Locale, string>> = {
  en: "Armonia Choir | International Choral Festival of Preveza, Greece",
  el: "Χορωδία Αρμονία | Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  fr: "Chœur Armonia | Festival choral international de Preveza, Grèce",
  it: "Coro Armonia | Festival corale internazionale di Preveza, Grecia",
  de: "Chor Armonia | Internationales Chorfestival Preveza, Griechenland",
  es: "Coro Armonia | Festival Coral Internacional de Preveza, Grecia",
};

// Runs at build time (the site is prerendered): the page in its language.
export function loader({ params }: { params: { lang?: string } }) {
  const locale = localeOf(params.lang);
  const { data, translated } = translate(translationId.page("home"), page, locale);
  return { page: data, translated, title: tr(titles, locale), fallback: fallbackMeta(locale, translated) };
}

export function meta({ loaderData: data }: { loaderData: ReturnType<typeof loader> }) {
  return [{ title: data.title }, ...data.fallback];
}

export default function HomeRoute() {
  return <HomePage page={useLoaderData<typeof loader>().page} />;
}
