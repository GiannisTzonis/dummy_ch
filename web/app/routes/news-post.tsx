import { pageTitle } from "~/lib/locale";
import { useParams } from "react-router";
import { newsPosts } from "~/content/news";
import { NewsPostPage } from "~/templates/NewsPostPage";
import type { Locale } from "~/content/types";

export function meta({ params }: { params: { lang?: string; slug?: string } }) {
  const locale: Locale = params.lang === "el" ? "el" : "en";
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) return [{ title: "Armonia Choir" }];
  return [{ title: pageTitle(post.title[locale], locale) }];
}

export default function NewsPostRoute() {
  const { slug } = useParams<{ slug: string }>();
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="mx-auto max-w-3xl px-4 py-24 text-center">Story not found.</div>;
  }

  return <NewsPostPage post={post} />;
}
