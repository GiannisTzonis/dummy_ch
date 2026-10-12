import { useLoaderData } from "react-router";
import { newsPosts } from "~/content/news";
import home from "~/content/pages/home";
import { NewsPostPage } from "~/templates/NewsPostPage";
import { localeOf, pageTitle, tr } from "~/lib/locale";
import { fallbackMeta, translate, translationId } from "~/lib/translations.server";

// Runs at build time (the site is prerendered): the story in its language (French etc.: its
// translation, English where there is none), with the site's news list for "Other News".
export function loader({ params }: { params: { lang?: string; slug?: string } }) {
  const locale = localeOf(params.lang);
  const source = newsPosts.find((p) => p.slug === params.slug);
  if (!source) return null;
  const { data: post, translated } = translate(translationId.news(source.slug), source, locale);
  const newsItems = translate(translationId.page("home"), home, locale).data.newsItems;
  return { post, newsItems, translated, title: pageTitle(tr(post.title, locale), locale), fallback: fallbackMeta(locale, translated) };
}

export function meta({ loaderData: data }: { loaderData: ReturnType<typeof loader> }) {
  return data ? [{ title: data.title }, ...data.fallback] : [{ title: "Armonia Choir" }];
}

export default function NewsPostRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Story not found.</div>;
  return <NewsPostPage post={data.post} newsItems={data.newsItems} />;
}
