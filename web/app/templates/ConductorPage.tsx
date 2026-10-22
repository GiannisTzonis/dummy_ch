import type { StaticPageContent } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";
import { responsive } from "~/lib/img";
import { ArtIcon } from "~/components/ArtIcons";
import { LightboxProvider, Zoomable } from "~/components/content/Lightbox";
import { aboutLabels as L, container, leadingYear, NextPages, Text } from "~/components/about/AboutParts";

// "Our Conductor": the portrait in a concert-hall arch beside the name, then the biography with
// the year each paragraph opens with set large in the margin. All text is the legacy page's, in
// its order; see AboutParts.tsx.

export function ConductorPage({ page }: { page: StaticPageContent }) {
  const locale = useLocale();
  const text = tr(page.sections[0].body, locale)
    .flatMap((b) => (typeof b === "string" ? [b] : "p" in b ? [b.p] : []))
    .flatMap((b) => b.split(/\n+/))
    .map((p) => p.trim())
    .filter(Boolean);
  const [lead, ...bio] = text;
  const last = bio.length > 1 ? bio.at(-1) : undefined;
  const body = last ? bio.slice(0, -1) : bio;
  const name = tr(page.title, locale);
  const subtitle = page.subtitle && tr(page.subtitle, locale);

  return (
    <LightboxProvider locale={locale}>
      {/* Hero: the site cover (as on the festival pages), darkened, with the portrait and name */}
      <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(80%_70%_at_100%_0%,rgb(172_46_72/0.75),transparent_65%),radial-gradient(70%_60%_at_0%_100%,rgb(76_72_168/0.6),transparent_70%)]" />
        {/* five staff lines sweeping across the band, as in the home page hero */}
        <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-x-0 top-[38%] -z-10 h-[46%] w-full text-white/[0.09]">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M0 ${250 + i * 26} C 360 ${120 + i * 26}, 760 ${420 + i * 26}, 1440 ${200 + i * 26}`} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className={`${container} grid items-end gap-10 pt-[120px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:pt-[150px] lg:gap-20`}>
          {page.hero && (
            <div className="relative mx-auto w-[82%] max-w-[340px] md:w-full md:max-w-none">
              {/* the arch: a maroon one behind, offset, and the portrait in front */}
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 -translate-y-4 rounded-t-[999px] bg-brand-maroon/80 md:translate-x-6 md:-translate-y-6" />
              <Zoomable images={[{ src: page.hero, caption: name }]} index={0} locale={locale} label={name} className="relative aspect-[4/5] rounded-t-[999px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] ring-1 ring-white/20">
                <img {...responsive(page.hero, "(min-width: 768px) 40vw, 360px")} alt={name} fetchPriority="high" className="h-full w-full object-cover object-[50%_30%]" />
              </Zoomable>
            </div>
          )}
          <div className="pb-12 md:pb-16 lg:pb-24">
            <p data-legacy-ignore="" className="type-label inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 ring-1 ring-white/30 backdrop-blur">
              <ArtIcon name="notes" small className="size-4" />
              {tr(L.conductor, locale)}
            </p>
            <h1 className="mt-5 text-[clamp(2.5rem,1.5rem+4.4vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white [text-wrap:balance]">{name}</h1>
            {subtitle && <p className="mt-3 text-[1.15rem] text-[#ffc2cf] sm:text-[1.3rem]">{subtitle.replace(/\s*\n\s*/g, " ")}</p>}
            {lead && (
              <p className="mt-7 max-w-[60ch] text-[1.05rem] leading-[1.75] text-white/90 sm:text-[1.15rem]">
                <Text>{lead}</Text>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Biography: a margin of years beside the paragraphs */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className={`${container} max-w-[1080px]`}>
          <div className="relative">
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-[1px] w-px bg-gradient-to-b from-brand-maroon via-brand-navy/25 to-transparent sm:left-[144px] lg:left-[178px]" />
            {body.map((p, i) => {
              const year = leadingYear(p);
              return (
                <div key={i} className="relative grid grid-cols-1 gap-x-10 pb-10 pl-6 last:pb-0 sm:grid-cols-[124px_1fr] sm:pl-0 lg:grid-cols-[150px_1fr] lg:gap-x-14">
                  <span aria-hidden="true" className={`absolute top-[9px] left-[-3px] size-[9px] rounded-full ring-4 ring-white sm:left-[140px] lg:left-[174px] ${year ? "bg-brand-maroon" : "bg-brand-navy/30"}`} />
                  <span data-legacy-ignore="" aria-hidden="true" className="mb-1 block text-[1.75rem] leading-none font-semibold tracking-tight text-brand-navy tabular-nums sm:mb-0 sm:text-right sm:text-[2.5rem] lg:text-[3rem]">
                    {year}
                  </span>
                  <p className="text-[1.03rem] leading-[1.8] text-body [text-wrap:pretty] sm:text-[1.08rem]">
                    <Text>{p}</Text>
                  </p>
                </div>
              );
            })}
          </div>

          {last && (
            <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-dark px-6 py-9 text-white shadow-[0_30px_70px_-35px_rgb(43_40_122/0.9)] sm:flex sm:items-center sm:gap-8 sm:px-10 sm:py-12">
              <ArtIcon name="laurel" className="mb-5 size-14 shrink-0 sm:mb-0 sm:size-16" />
              <p className="text-[1.15rem] leading-[1.65] sm:text-[1.3rem]">
                <Text>{last}</Text>
              </p>
            </div>
          )}
        </div>
      </section>

      <NextPages
        heading={tr(L.more, locale)}
        locale={locale}
        links={[
          { href: "/our-choir", kicker: tr(L.choir, locale) },
          { href: "/festival/2027", kicker: tr(L.festival, locale) },
        ]}
      />
    </LightboxProvider>
  );
}
