import { forLocale, pageTitle, localeOf, tr } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { competitions } from "~/content/competitions";
import { competitionNav } from "~/content/edition-nav";
import { CompetitionPage } from "~/templates/CompetitionPage";
import type { Locale } from "~/content/types";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Runs at build time (the site is prerendered): the browser downloads this competition only, in
// the page's language (French etc.: its translation, English where there is none).
export function loader({ params }: { params: { lang?: string; slug?: string } }) {
  const locale: Locale = localeOf(params.lang);
  const source = competitions.find((c) => c.slug === params.slug);
  if (!source) return null;
  const { data: competition, translated } = translate(translationId.competition(source.slug), source, locale);
  return {
    competition: forLocale(competition, locale),
    translated,
    others: competitionNav(competition.slug, locale),
    title: pageTitle(tr(competition.title, locale), locale),
    fallback: fallbackMeta(locale, translated),
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  return data ? [{ title: data.title }, ...data.fallback] : [{ title: "Armonia Choir" }];
}

export default function CompetitionRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Competition not found.</div>;
  return <CompetitionPage competition={data.competition} others={data.others} />;
}
