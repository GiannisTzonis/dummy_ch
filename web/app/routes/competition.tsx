import { forLocale, pageTitle } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { competitions } from "~/content/competitions";
import { competitionNav } from "~/content/edition-nav";
import { CompetitionPage } from "~/templates/CompetitionPage";
import type { Locale } from "~/content/types";

// Runs at build time (the site is prerendered): the browser downloads this competition only.
export function loader({ params }: { params: { lang?: string; slug?: string } }) {
  const locale: Locale = params.lang === "el" ? "el" : "en";
  const competition = competitions.find((c) => c.slug === params.slug);
  if (!competition) return null;
  return {
    competition: forLocale(competition, locale),
    others: competitionNav(competition.slug, locale),
    title: pageTitle(competition.title[locale], locale),
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  return [{ title: data ? data.title : "Armonia Choir" }];
}

export default function CompetitionRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Competition not found.</div>;
  return <CompetitionPage competition={data.competition} others={data.others} />;
}
