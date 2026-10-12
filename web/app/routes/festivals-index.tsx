import page from "~/content/pages/previous-festivals";
import { StaticPage } from "~/templates/StaticPage";
import { pageTitle } from "~/lib/locale";
import type { Route } from "./+types/festivals-index";

export function meta({ params }: Route.MetaArgs) {
  const locale = params.lang === "el" ? "el" : "en";
  return [{ title: pageTitle(page.title[locale], locale) }];
}

export default function FestivalsIndexRoute() {
  return <StaticPage page={page} />;
}
