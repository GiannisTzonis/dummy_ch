import { pageTitle } from "~/lib/locale";
import page from "~/content/pages/our-conductor";
import { StaticPage } from "~/templates/StaticPage";
import type { Locale } from "~/content/types";

export function meta({ params }: { params: { lang?: string } }) {
  const locale: Locale = params.lang === "el" ? "el" : "en";
  return [{ title: pageTitle(page.title[locale], locale) }];
}

export default function OurConductorRoute() {
  return <StaticPage page={page} />;
}
