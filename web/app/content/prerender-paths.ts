import { siteLocales } from "./site-locales";
import { festivals } from "./festivals";
import { masterclasses } from "./masterclasses";
import { competitions } from "./competitions";
import { newsPosts } from "./news";

/**
 * Every route in this app lives under a static, content-driven set of
 * paths (no user-generated/runtime content), so we enumerate them all
 * explicitly for `prerender` in react-router.config.ts rather than relying
 * on the framework's `getStaticPaths()` -- which only sees paths with no
 * dynamic segments, and almost everything here is nested under `:lang`.
 *
 * Add a path here whenever a new route file is added to routes.ts.
 */
export async function getPrerenderPaths(
  _getStaticPaths: () => string[],
): Promise<string[]> {
  const paths = ["/"];

  for (const lang of siteLocales) {
    paths.push(`/${lang}`);
    paths.push(`/${lang}/festivals`);
    paths.push(`/${lang}/masterclasses`);
    paths.push(`/${lang}/our-choir`);
    paths.push(`/${lang}/our-conductor`);

    for (const festival of festivals) {
      paths.push(`/${lang}/festival/${festival.year}`);
    }
    for (const masterclass of masterclasses) {
      paths.push(`/${lang}/masterclass/${masterclass.year}`);
    }
    for (const competition of competitions) {
      paths.push(`/${lang}/competition/${competition.slug}`);
    }
    for (const post of newsPosts) {
      paths.push(`/${lang}/news/${post.slug}`);
    }
  }

  return paths;
}
