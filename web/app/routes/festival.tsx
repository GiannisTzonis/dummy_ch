import { forLocale, pageTitle } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { festivals } from "~/content/festivals";
import { festivalHero } from "~/content/festival-hero";
import { festivalResults } from "~/content/festival-results";
import { festivalNav } from "~/content/edition-nav";
import { FestivalPage } from "~/templates/FestivalPage";
import type { Locale } from "~/content/types";

// Runs at build time (the site is prerendered): each page's data is written next to it, so the
// browser downloads this festival only, not every edition's content.
export function loader({ params }: { params: { lang?: string; year?: string } }) {
  const locale: Locale = params.lang === "el" ? "el" : "en";
  const festival = festivals.find((f) => String(f.year) === params.year);
  if (!festival) return null;
  return {
    festival: forLocale(festival, locale),
    heroText: festivalHero[festival.year]?.[locale],
    results: festivalResults[festival.year],
    others: festivalNav(festival.slug, locale),
    title: festival.pageTitle?.[locale] ?? pageTitle(festival.title[locale], locale),
    description: festival.intro[locale][0] ?? "",
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  if (!data) return [{ title: "Armonia Choir" }];
  return [{ title: data.title }, { name: "description", content: data.description }];
}

export default function FestivalRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Festival not found.</div>;
  return <FestivalPage festival={data.festival} heroText={data.heroText} results={data.results} others={data.others} />;
}
