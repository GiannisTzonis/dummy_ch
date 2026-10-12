import { forLocale, pageTitle, localeOf, tr } from "~/lib/locale";
import { useLoaderData } from "react-router";
import { masterclasses } from "~/content/masterclasses";
import { masterclassNav } from "~/content/edition-nav";
import { MasterclassPage } from "~/templates/MasterclassPage";
import type { Locale } from "~/content/types";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Runs at build time (the site is prerendered): the browser downloads this masterclass only, in
// the page's language (French etc.: its translation, English where there is none).
export function loader({ params }: { params: { lang?: string; year?: string } }) {
  const locale: Locale = localeOf(params.lang);
  const source = masterclasses.find((m) => String(m.year) === params.year);
  if (!source) return null;
  const { data: masterclass, translated } = translate(translationId.masterclass(source.year), source, locale);
  return {
    masterclass: forLocale(masterclass, locale),
    translated,
    others: masterclassNav(masterclass.slug, locale),
    title: (masterclass.pageTitle && tr(masterclass.pageTitle, locale)) ?? pageTitle(tr(masterclass.title, locale), locale),
    fallback: fallbackMeta(locale, translated),
  };
}

export function meta({ loaderData: data }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  return data ? [{ title: data.title }, ...data.fallback] : [{ title: "Armonia Choir" }];
}

export default function MasterclassRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Masterclass not found.</div>;
  return <MasterclassPage masterclass={data.masterclass} others={data.others} />;
}
