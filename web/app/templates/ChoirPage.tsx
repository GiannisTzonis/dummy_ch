import type { StaticPageContent } from "~/content/types";
import { useLocale, tr, localizedHref } from "~/lib/locale";
import { responsive } from "~/lib/img";
import { LightboxProvider } from "~/components/content/Lightbox";
import { ArtIcon } from "~/components/ArtIcons";
import { Link } from "react-router";
import {
  aboutLabels as L,
  chaptersOf,
  container,
  navLabel,
  NextPages,
  Photo,
  Rule,
  Section,
  Text,
  Timeline,
  type Chapter,
} from "~/components/about/AboutParts";

// "Our Choir": a photo cover with the title, then one chapter per legacy section (the mixed
// choir's history, the children's choir), each with its photos and its milestones on a stave.
// All text is the legacy page's, in its order; see AboutParts.tsx.

const ids = ["history", "childrens-choir"];

// a trailing "Main Stations in History:" line introduces the list: it becomes the timeline's label
function splitLabel(intro: string[]) {
  const last = intro.at(-1);
  return last && last.endsWith(":") && last.length < 80 ? { intro: intro.slice(0, -1), label: last } : { intro, label: undefined };
}

// Mosaic cells: the first photo large (2×2), the rest single; the last one widens to close the
// row (2 columns on phones, 4 from tablets up).
// 6, 10… photos: a second large tile (the last photo), placed after two small ones so the rows
// close (4 columns: big, 2 small | big; phones: big, 2 small, big, 2 small)
const twoBig = (n: number) => n % 4 === 2 && n > 2;
function mosaicOrder(n: number) {
  const idx = [...Array(n).keys()];
  return twoBig(n) ? [0, 1, 2, n - 1, ...idx.slice(3, n - 1)] : idx;
}

const wide: Record<number, string> = { 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4" };
function mosaicClass(i: number, n: number) {
  if (i === 0 || (twoBig(n) && i === n - 1)) return "col-span-2 row-span-2";
  if (twoBig(n)) return "";
  const cells = 4 + (n - 1);
  let c = "";
  if (i === n - 1 && cells % 2) c += " max-md:col-span-2";
  if (i === n - 1 && cells % 4) c += ` ${wide[1 + (4 - (cells % 4))]}`;
  return c;
}

// the phone cover fills a tall box, so the photo is drawn at about 1.6x the box height in width
// (far wider than the screen): always the full-size file, or it shows blurred
const MOBILE_COVER = "/img/pages/choir-on-stage-thessaloniki.webp";

export function ChoirPage({ page }: { page: StaticPageContent }) {
  const locale = useLocale();
  const chapters = chaptersOf(tr(page.sections[0].body, locale));
  const [first, ...rest] = chapters;
  const cover = first?.photos[0];

  return (
    <LightboxProvider locale={locale}>
      {/* Cover: the mixed choir, full width, with the title over a navy fade */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-brand-navy-dark text-white h-[82svh] max-h-[880px] lg:h-[88svh]">
        {cover && (
          <picture>
            {/* phones: the choir on stage in Thessaloniki, which holds up in a tall crop (owner's pick) */}
            <source media="(max-width: 639px)" srcSet={MOBILE_COVER} />
            <img {...responsive(cover, "(max-width: 1023px) 1600px, 100vw")} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_35%]" />
          </picture>
        )}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/5 to-transparent [background-size:100%_30%] bg-no-repeat" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/30 via-35% to-transparent to-75%" />
        <div data-legacy-ignore="" className={`${container} w-full pb-12 sm:pb-16 lg:pb-20`}>
          <p className="type-label inline-flex items-center gap-2 rounded-full bg-brand-navy-dark/70 px-3.5 py-1.5 text-white ring-1 ring-white/25 shadow-[0_6px_20px_-8px_rgb(0_0_0/0.6)] backdrop-blur-md">
            <ArtIcon name="choir" small className="size-4" />
            <span className="hidden sm:inline">{tr(L.society, locale)}</span>
            <span aria-hidden="true" className="hidden opacity-60 sm:inline">·</span>
            {tr(L.since, locale)}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.75rem,1.6rem+5.2vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white [text-shadow:0_4px_40px_rgb(0_0_0/0.35)]">
            {tr(page.title, locale)}
          </h1>
          {chapters.length > 1 && (
            <nav aria-label={tr(L.jump, locale)} className="mt-8 flex flex-wrap gap-3">
              {chapters.map((c, i) =>
                c.heading ? (
                  <a
                    key={i}
                    href={`#${ids[i] ?? `part-${i + 1}`}`}
                    className="type-small inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-brand-navy shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)] transition-colors hover:bg-[#ffe3e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {c.heading}
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
                      <path d="M10 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4L9 13.6V4a1 1 0 0 1 1-1Z" />
                    </svg>
                  </a>
                ) : null,
              )}
            </nav>
          )}
        </div>
      </section>

      {first && <HistoryChapter chapter={first} id={ids[0]} locale={locale} cover={cover} />}
      {rest.map((c, i) => (
        <BandChapter key={i} chapter={c} id={ids[i + 1] ?? `part-${i + 2}`} locale={locale} />
      ))}

      <NextPages
        heading={tr(L.more, locale)}
        locale={locale}
        links={[
          { href: "/our-conductor", kicker: tr(L.conductor, locale) },
          { href: "/festival/2027", kicker: tr(L.festival, locale) },
        ]}
      />
    </LightboxProvider>
  );
}

// The first chapter: text beside a staggered pair of photos, then the milestones, then the
// closing paragraph as a highlighted note.
function HistoryChapter({ chapter, id, locale, cover }: { chapter: Chapter; id: string; locale: Parameters<typeof tr>[1]; cover?: string }) {
  const { intro, label } = splitLabel(chapter.intro);
  const photos = chapter.photos.filter((p) => p !== cover);
  const gallery = chapter.photos.map((src) => ({ src }));
  const at = (src: string) => chapter.photos.indexOf(src);

  return (
    <Section id={id} className="py-16 sm:py-20 lg:py-28">
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16`}>
        <div className="lg:order-2">
          <Rule />
          {chapter.heading && <h2 className="type-h1 text-ink">{chapter.heading}</h2>}
          <div className="mt-6 space-y-5">
            {intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[1.15rem] leading-[1.7] text-ink sm:text-[1.25rem] lg:text-[1.35rem]" : "type-body text-body"}>
                <Text>{p}</Text>
              </p>
            ))}
          </div>
        </div>

        {photos.length > 0 && (
          <div className="relative lg:sticky lg:top-[130px] lg:order-1">
            <Photo images={gallery} index={at(photos[0])} locale={locale} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-[88%]" />
            {photos[1] && (
              <Photo
                images={gallery}
                index={at(photos[1])}
                locale={locale}
                sizes="(min-width: 1024px) 30vw, 70vw"
                className="relative -mt-[18%] ml-auto aspect-[4/3] w-[68%] ring-[6px] ring-white"
              />
            )}
            {/* the cover photo again, small, so every photo of the chapter can be opened */}
            {cover && chapter.photos.includes(cover) && (
              <Photo
                images={gallery}
                index={at(cover)}
                locale={locale}
                sizes="200px"
                className="relative -mt-[14%] ml-[6%] aspect-square w-[34%] ring-[6px] ring-white max-sm:hidden"
              />
            )}
          </div>
        )}
      </div>

      {/* the chapter's other photos (more than the collage holds): a row below it */}
      {photos.length > 2 && (
        <div className={`${container} mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 ${photos.length - 2 >= 3 ? "sm:grid-cols-3" : ""}`}>
          {photos.slice(2).map((src, i, more) => (
            <Photo
              key={src}
              images={gallery}
              index={at(src)}
              locale={locale}
              sizes="(min-width: 640px) 33vw, 50vw"
              className={`aspect-[4/3] ${more.length % 2 && i === more.length - 1 ? "max-sm:col-span-2 max-sm:aspect-[16/9]" : ""}`}
            />
          ))}
        </div>
      )}

      {chapter.list.length > 0 && (
        <div className={`${container} mt-16 lg:mt-24`}>
          <div className="-mx-4 bg-surface px-4 py-10 ring-1 ring-black/5 sm:mx-0 sm:rounded-3xl sm:px-10 sm:py-14 lg:px-14">
            <Timeline items={chapter.list} label={label} />
          </div>
        </div>
      )}

      {chapter.outro.length > 0 && (
        <div className={`${container} mt-10 lg:mt-14`}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-maroon to-brand-maroon-dark px-6 py-9 text-white shadow-[0_30px_70px_-35px_rgb(132_31_54/0.9)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:gap-10 lg:px-14">
            <ArtIcon name="laurel" className="mb-5 size-14 shrink-0 text-white lg:mb-0 lg:size-20" />
            <div className="space-y-4">
              {chapter.outro.map((p, i) => (
                <p key={i} className="text-[1.1rem] leading-[1.65] sm:text-[1.25rem]">
                  <Text>{p}</Text>
                </p>
              ))}
              <Link
                data-legacy-ignore=""
                to={localizedHref(locale, "/our-conductor")}
                className="type-small mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-brand-maroon-dark transition-colors hover:bg-[#ffe3e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {navLabel("/our-conductor", locale)}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

// Later chapters (the children's choir): a navy band with the introduction and a photo mosaic,
// then the milestones.
function BandChapter({ chapter, id, locale }: { chapter: Chapter; id: string; locale: Parameters<typeof tr>[1] }) {
  const { intro, label } = splitLabel(chapter.intro);
  const gallery = chapter.photos.map((src) => ({ src }));
  const n = chapter.photos.length;

  return (
    <Section id={id}>
      <div className="relative isolate overflow-hidden bg-brand-navy-dark py-16 text-white sm:py-20 lg:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_85%_0%,rgb(172_46_72/0.45),transparent_70%),radial-gradient(60%_50%_at_0%_100%,rgb(76_72_168/0.5),transparent_70%)]" />
        <div className={`${container}`}>
          <div className="mx-auto max-w-[820px] text-center">
            <div className="flex justify-center">
              <Rule light />
            </div>
            {chapter.heading && <h2 className="type-h1 text-white">{chapter.heading}</h2>}
            <div className="mt-6 space-y-5">
              {intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-[1.15rem] leading-[1.7] text-white sm:text-[1.25rem] lg:text-[1.35rem]" : "type-body mx-auto max-w-[68ch] text-left text-white/80"}>
                  <Text>{p}</Text>
                </p>
              ))}
            </div>
          </div>

          {n > 0 && (
            <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 lg:mt-16 lg:auto-rows-[230px]">
              {mosaicOrder(n).map((i) => (
                <Photo
                  key={chapter.photos[i]}
                  images={gallery}
                  index={i}
                  locale={locale}
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className={`h-full ring-white/10 ${mosaicClass(i, n)}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {chapter.list.length > 0 && (
        <div className={`${container} py-16 sm:py-20 lg:py-24`}>
          <Timeline items={chapter.list} label={label} />
        </div>
      )}
      {chapter.outro.length > 0 && (
        <div className={`${container} -mt-6 pb-16 space-y-4`}>
          {chapter.outro.map((p, i) => (
            <p key={i} className="type-body max-w-[72ch] text-body">
              <Text>{p}</Text>
            </p>
          ))}
        </div>
      )}
    </Section>
  );
}
