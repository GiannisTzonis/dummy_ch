import type { ReactNode } from "react";
import type { HomePageContent, Locale, NewsPost, RichBlock } from "~/content/types";
import { Link } from "react-router";
import { localizedHref, useLocale, tr } from "~/lib/locale";
import { RichText } from "~/components/content/RichText";
import { LightboxProvider, Zoomable, type LightboxImage } from "~/components/content/Lightbox";
import { responsive } from "~/lib/img";

const labels = {
  kicker: { en: "News", el: "Νέα", fr: "Actualités", it: "Notizie", de: "Neuigkeiten", es: "Noticias" },
  itinerary: { en: "Itinerary", el: "Πρόγραμμα Ταξιδιού", fr: "Itinéraire", it: "Itinerario", de: "Reiseverlauf", es: "Itinerario" },
  thanks: { en: "Acknowledgments", el: "Ευχαριστίες", fr: "Remerciements", it: "Ringraziamenti", de: "Danksagung", es: "Agradecimientos" },
  other: { en: "Other News", el: "Άλλα Νέα", fr: "Autres actualités", it: "Altre notizie", de: "Weitere Neuigkeiten", es: "Otras noticias" },
} as const;

type Img = Extract<RichBlock, { img: string }>;
const isImg = (b: RichBlock): b is Img => typeof b !== "string" && "img" in b;
const isImageFile = (href: string) => /\.(jpe?g|png|webp|gif)$/i.test(href);

// Editorial layout shared by every news post:
//  - hero: the site cover artwork with the title, as on the festival pages
//  - article: one centred reading column; text and photos share its edges (photos never wider than
//    the text, small images such as logos stay at their natural size, centred). The legacy
//    narrow-column markers only limited width and are ignored. The first paragraph is the lead.
//  - gallery (legacy posts): an even grid; every photo opens in the viewer
//  - "Other News": navigation to other posts in a full-width band before the footer
//  The article and its gallery share the reading column's edges.
const column = "mx-auto w-full max-w-[46rem] px-4 sm:px-6";

function Figure({ img, group, index, locale }: { img: Img; group: LightboxImage[]; index: number; locale: Locale }) {
  const image = <img {...responsive(img.img, "(min-width: 768px) 800px, 100vw")} alt="" loading={index === 0 ? "eager" : "lazy"} className="mx-auto h-auto max-w-full" />;
  // a photo that linked to another page keeps its link; others open in the viewer
  const inner =
    img.href && !isImageFile(img.href) ? (
      <a href={img.href} className="block">
        {image}
      </a>
    ) : (
      <Zoomable images={group} index={index} locale={locale} className="mx-auto w-fit max-w-full overflow-hidden rounded-xl">
        {image}
      </Zoomable>
    );
  return (
    <figure className="my-10 first:mt-0 [&_img]:rounded-xl [&_img]:shadow-[0_24px_60px_-28px_rgb(15_23_42/0.45)] [&_img]:ring-1 [&_img]:ring-black/5">
      {inner}
    </figure>
  );
}

function Article({ blocks, locale }: { blocks: RichBlock[]; locale: Locale }) {
  const flow = blocks.filter((b) => typeof b === "string" || !("narrow" in b || "wide" in b));
  const photos = flow.filter(isImg);
  const group = photos.map((p) => ({ src: p.href && isImageFile(p.href) ? p.href : p.img }));
  const out: ReactNode[] = [];
  let run: RichBlock[] = [];
  const flush = () => {
    if (run.length) out.push(<RichText key={out.length} paragraphs={run} />);
    run = [];
  };
  for (const b of flow) {
    if (isImg(b)) {
      flush();
      out.push(<Figure key={out.length} img={b} group={group} index={photos.indexOf(b)} locale={locale} />);
    } else run.push(b);
  }
  flush();
  return (
    <div
      className={[
        "type-body text-body",
        // text fills the column exactly, like the photos
        "[&_p]:max-w-none [&_ul]:max-w-none [&_li]:max-w-none",
        // the opening paragraph is the lead
        "[&>div:first-child>p:first-of-type]:text-[1.1875rem] [&>div:first-child>p:first-of-type]:leading-relaxed [&>div:first-child>p:first-of-type]:text-ink",
      ].join(" ")}
    >
      {out}
    </div>
  );
}

// newsItems: the site's news list (home page slider), from the route's loader in the page's language
export function NewsPostPage({ post, newsItems }: { post: NewsPost; newsItems: HomePageContent["newsItems"] }) {
  const locale = useLocale();
  const gallery = post.gallery.map((g) => ({ src: g.src, caption: g.alt }));

  return (
    <LightboxProvider locale={locale}>
      <section className="relative isolate overflow-hidden bg-brand-maroon">
        <div className="absolute inset-0 -z-10 bg-[url(/img/MainCover.webp)] bg-[length:auto_230%] bg-[position:50%_42%] bg-no-repeat md:bg-cover md:bg-center" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/40 to-black/10" aria-hidden="true" />
        <div className={`${column} pt-[124px] pb-12 sm:pb-14 lg:pt-[150px] lg:pb-16`}>
          <p data-legacy-ignore="" className="type-label mb-4 inline-flex items-center gap-2 text-white/85">
            <span className="h-px w-8 bg-brand-maroon" aria-hidden="true" />
            {tr(labels.kicker, locale)}
          </p>
          <h1 className="type-h1 text-balance text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">{tr(post.title, locale)}</h1>
        </div>
      </section>

      <article className={`${column} py-12 lg:py-16`}>
        <Article blocks={tr(post.body, locale)} locale={locale} />

        {post.participantCount && (
          <p className="mt-10 rounded-xl bg-surface p-5 type-small font-medium text-ink">{tr(post.participantCount, locale)}</p>
        )}

        {post.itinerary && post.itinerary.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 type-h3 text-ink">{tr(labels.itinerary, locale)}</h2>
            <ol className="space-y-2">
              {post.itinerary.map((stop, i) => (
                <li key={i} className="flex gap-4 type-small">
                  <span className="w-28 flex-shrink-0 font-medium text-brand-navy">{stop.date}</span>
                  <span className="text-body">{tr(stop.description, locale)}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {post.acknowledgments && post.acknowledgments.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 type-h3 text-ink">{tr(labels.thanks, locale)}</h2>
            <ul className="space-y-2 type-small text-muted">
              {post.acknowledgments.map((a, i) => (
                <li key={i}>
                  <span className="font-medium text-ink">{a.name}</span> — {tr(a.title, locale)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* The legacy news pages show their photos without a heading. */}
      {gallery.length > 0 && (
        <div className={`${column} pb-14 lg:pb-20`}>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {gallery.map((g, i) => (
              <li key={g.src} className="w-[calc(50%-0.375rem)] sm:w-[calc((100%-2rem)/3)]">
                <Zoomable images={gallery} index={i} locale={locale} className="rounded-lg">
                  <img {...responsive(g.src, "(min-width: 1024px) 33vw, 50vw")} alt={g.caption ?? ""} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </Zoomable>
              </li>
            ))}
          </ul>
        </div>
      )}

      <OtherNews post={post} newsItems={newsItems} locale={locale} />
    </LightboxProvider>
  );
}

// The legacy berlin-2024 page carries the France 2024 story (same title, text and photos; see
// MIGRATION.md): on it, the France 2024 entry counts as the current page.
const sameStory: Record<string, string> = { "berlin-2024": "france-2024" };

// "Other News" navigation before the footer, as on the festival pages: the site's news list --
// the home page news slider (home.ts), newest first, including entries that open a festival,
// masterclass or competition page such as the 2026 results -- in the same order, without the
// current page. (It replaces the legacy per-page previous/next strip; see corrections.mjs.)
// New site furniture, skipped by the content check.
function OtherNews({ post, newsItems, locale }: { post: NewsPost; newsItems: HomePageContent["newsItems"]; locale: Locale }) {
  const self = `/news/${sameStory[post.slug] ?? post.slug}`;
  const seen = new Set<string>();
  const cards = newsItems
    .filter((n) => n.href !== self && n.href !== `/news/${post.slug}` && !seen.has(n.href) && seen.add(n.href))
    .map((n) => ({ href: n.href, title: tr(n.title, locale), image: n.thumbnail }));
  if (!cards.length) return null;

  return (
    <section aria-labelledby="other-news" className="border-t border-rule bg-surface py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <h2 id="other-news" data-legacy-ignore="" className="type-h2 mb-8 border-b border-rule pb-4 text-ink lg:mb-10">
          <span className="mr-3 inline-block h-6 w-1 translate-y-0.5 rounded-full bg-brand-maroon align-baseline" aria-hidden="true" />
          {tr(labels.other, locale)}
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.href} data-legacy-ignore="">
              <Link
                to={localizedHref(locale, c.href)}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06] transition duration-300 hover:shadow-[0_18px_40px_-14px_rgb(43_40_122/0.3)] hover:ring-brand-maroon/30"
              >
                <span className="block aspect-[16/10] overflow-hidden bg-surface-muted">
                  {c.image && <img {...responsive(c.image, "(min-width: 768px) 33vw, 100vw")} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />}
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="type-h6 leading-snug text-ink transition-colors group-hover:text-brand-navy">{c.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
