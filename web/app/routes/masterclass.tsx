import { forLocale, pageTitle } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { masterclasses } from "~/content/masterclasses";
import { masterclassNav } from "~/content/edition-nav";
import { MasterclassPage } from "~/templates/MasterclassPage";
import type { Locale } from "~/content/types";

// Runs at build time (the site is prerendered): the browser downloads this masterclass only.
export function loader({ params }: { params: { lang?: string; year?: string } }) {
  const locale: Locale = params.lang === "el" ? "el" : "en";
  const masterclass = masterclasses.find((m) => String(m.year) === params.year);
  if (!masterclass) return null;
  return {
    masterclass: forLocale(masterclass, locale),
    others: masterclassNav(masterclass.slug, locale),
    title: masterclass.pageTitle?.[locale] ?? pageTitle(masterclass.title[locale], locale),
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  return [{ title: data ? data.title : "Armonia Choir" }];
}

export default function MasterclassRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Masterclass not found.</div>;
  return <MasterclassPage masterclass={data.masterclass} others={data.others} />;
}
