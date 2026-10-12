import { forLocale, pageTitle, localeOf, tr } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { festivals } from "~/content/festivals";
import { festivalHero } from "~/content/festival-hero";
import { festivalResults } from "~/content/festival-results";
import { festivalNav } from "~/content/edition-nav";
import { FestivalPage } from "~/templates/FestivalPage";
import type { Locale } from "~/content/types";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Runs at build time (the site is prerendered): each page's data is written next to it, so the
// browser downloads this festival only, not every edition's content.
export function loader({ params }: { params: { lang?: string; year?: string } }) {
  const locale: Locale = localeOf(params.lang);
  const source = festivals.find((f) => String(f.year) === params.year);
  if (!source) return null;
  // this festival in the page's language (French etc.: its translation, English where there is none)
  const { data: festival, translated } = translate(translationId.festival(source.year), source, locale);
  const hero = translate("festival-hero", festivalHero, locale).data[festival.year];
  return {
    festival: forLocale(festival, locale),
    translated,
    heroText: hero && tr(hero, locale),
    results: festivalResults[festival.year] && translate("festival-results", festivalResults, locale).data[festival.year],
    others: festivalNav(festival.slug, locale),
    title: (festival.pageTitle && tr(festival.pageTitle, locale)) ?? pageTitle(tr(festival.title, locale), locale),
    description: tr(festival.intro, locale)[0] ?? "",
    fallback: fallbackMeta(locale, translated),
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  if (!data) return [{ title: "Armonia Choir" }];
  return [{ title: data.title }, { name: "description", content: data.description }, ...data.fallback];
}

export default function FestivalRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Festival not found.</div>;
  return <FestivalPage festival={data.festival} heroText={data.heroText} results={data.results} others={data.others} />;
}
