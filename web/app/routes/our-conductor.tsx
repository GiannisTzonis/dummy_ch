import { useLoaderData } from "react-router";
import page from "~/content/pages/our-conductor";
import { ConductorPage } from "~/templates/ConductorPage";
import { localeOf, pageTitle, tr } from "~/lib/locale";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Runs at build time (the site is prerendered): the page in its language (French etc.: its
// translation, English where there is none).
export function loader({ params }: { params: { lang?: string } }) {
  const locale = localeOf(params.lang);
  const { data, translated } = translate(translationId.page("our-conductor"), page, locale);
  return { page: data, translated, title: pageTitle(tr(data.title, locale), locale), fallback: fallbackMeta(locale, translated) };
}

export function meta({ loaderData: data }: { loaderData: ReturnType<typeof loader> }) {
  return [{ title: data.title }, ...data.fallback];
}

export default function OurConductorRoute() {
  return <ConductorPage page={useLoaderData<typeof loader>().page} />;
}
