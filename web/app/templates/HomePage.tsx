import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { HomePageContent, Locale } from "~/content/types";
import { localizedHref, pick, useLocale } from "~/lib/locale";
import { CoverBanner } from "~/components/content/PageHero";
import { responsive, sized } from "~/lib/img";

// Layout and styles follow index.html / indexGreek.html and css/main.css.

const labels = {
  download: { en: "Download", el: "Λήψη" },
  news: { en: "News - Announcements", el: "Νέα - Ανακοινώσεις" },
  newsIntro: {
    en: "Stay tuned with all the latest news about our festival.",
    el: "Μείνετε ενήμεροι με όλα τα τελευταία νέα για το φεστιβάλ μας.",
  },
  collaborations: { en: "Collaborations", el: "Συνεργασίες" },
  readMore: { en: "Read more", el: "Διαβάστε περισσότερα" },
} as const;

// Partner wall over a faint five-line music staff. Every logo sits on the same square stage
// (mix-blend-multiply drops the white backgrounds some logo files have), named underneath with
// the site it links to. Cards wrap centred, so a short last row never hangs to one side.
function Collaborations({ items, locale }: { items: HomePageContent["collaborations"]; locale: Locale }) {
  const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");
  return (
    <section aria-labelledby="collaborations" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/4 text-brand-navy/[0.07]"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M0 ${30 + i * 15} C 300 ${-10 + i * 15}, 600 ${90 + i * 15}, 1200 ${20 + i * 15}`} fill="none" stroke="currentColor" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="mb-10 text-center lg:mb-14">
          <span aria-hidden="true" className="mx-auto mb-4 block h-1 w-12 rounded-full bg-brand-maroon" />
          <h2 id="collaborations" className="type-h2 text-ink">{labels.collaborations[locale]}</h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {items.map((c) => {
            const name = pick(c.name, locale);
            return (
              <li key={c.link} className="w-[calc(50%-0.5rem)] sm:w-[200px] lg:w-[204px]">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgb(15_23_42/0.06)] ring-1 ring-slate-900/[0.08] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgb(43_40_122/0.28)] hover:ring-brand-maroon/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-surface to-[#eef0f8]">
                    <img
                      src={sized(c.logo, 400)}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center px-1 pt-4 pb-1 text-center">
                    <h3 className="type-h6 leading-snug text-ink transition-colors group-hover:text-brand-maroon">{name}</h3>
                    <p data-legacy-ignore className="mt-1 inline-flex items-center gap-1 text-[12px] text-muted">
                      {host(c.link)}
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                        <path d="M6 4h10v10h-2V7.4l-8.3 8.3-1.4-1.4L12.6 6H6V4Z" />
                      </svg>
                      <span className="sr-only">{locale === "el" ? "(ανοίγει σε νέα καρτέλα)" : "(opens in a new tab)"}</span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// "**Welcome** to ...\n**Armonia Choir** & ..." -> highlighted spans and line breaks.
function welcomeLines(text: string): ReactNode[] {
  return text.split("\n").flatMap((line, i) => [
    ...(i > 0 ? [<br key={`br${i}`} />] : []),
    ...line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
      part.startsWith("**") ? (
        <span key={`${i}-${j}`} className="font-semibold">
          {part.slice(2, -2)}
        </span>
      ) : (
        part
      ),
    ),
  ]);
}

// Centred up to 1650px wide, top right above that (as on the legacy site). White text
// with a soft shadow keeps it legible on both the red and the blue of the artwork.
function Hero({ text }: { text: string }) {
  return (
    <CoverBanner fullscreen>
      <h1 className="type-display absolute inset-x-4 top-[28%] max-lg:[&_br]:hidden text-center font-light text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.45),0_0_24px_rgb(0_0_0/0.25)] min-[1651px]:left-auto min-[1651px]:right-[93px] min-[1651px]:top-[160px] min-[1651px]:max-w-[40rem] min-[1651px]:text-right">
        {welcomeLines(text)}
      </h1>
    </CoverBanner>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5 text-brand-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

// A news card: framed, with the picture on a soft blurred copy of itself so posters and photos of
// any shape fill the same 4:3 stage uncropped. The date sits on the picture as a chip, a maroon
// rule leads into the title, and the whole card is one link that lifts on hover.
function NewsCard({ item, href, locale }: { item: HomePageContent["newsItems"][number]; href: string; locale: Locale }) {
  return (
    <Link
      to={href}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgb(15_23_42/0.06),0_4px_16px_rgb(15_23_42/0.06)] ring-1 ring-rule transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgb(15_23_42/0.06),0_18px_40px_rgb(15_23_42/0.14)] hover:ring-brand-navy/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy-dark">
        <img src={sized(item.thumbnail, 400)} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl" />
        <img
          {...responsive(item.thumbnail, "(min-width: 900px) 360px, (min-width: 768px) 50vw, 100vw")}
          alt=""
          loading="lazy"
          className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent" aria-hidden="true" />
        <p className="type-caption absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-semibold text-brand-maroon shadow-sm backdrop-blur">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {pick(item.date, locale)}
        </p>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <div className="mb-3 h-0.5 w-8 bg-brand-maroon transition-all duration-300 group-hover:w-14" aria-hidden="true" />
        <h3 className="type-h5 text-ink transition-colors group-hover:text-brand-navy">{item.title[locale]}</h3>
        {item.subtitle && <p className="type-small mt-2 line-clamp-3 text-muted">{item.subtitle[locale]}</p>}
        <div className="min-h-5 flex-1" aria-hidden="true" />
        <p
          data-legacy-ignore=""
          className="type-label inline-flex items-center gap-1.5 border-t border-rule pt-4 font-semibold tracking-wide text-brand-navy uppercase"
        >
          {labels.readMore[locale]}
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </p>
      </div>
    </Link>
  );
}

// Owl Carousel as configured in js/main.js: 1 / 2 / 3 items (0 / 768 / 900px),
// 30px gap, autoplay every 12s, looping, square dots. Draggable with mouse, pen or touch (as Owl's
// mouseDrag/touchDrag): the cards follow the pointer, and letting go past 60px (or after a quick
// flick) moves one page; vertical page scrolling on touch screens is left to the browser.
// The card width is set in CSS per breakpoint, so the prerendered page already shows the right
// number of cards before the script runs; the script only counts pages (the dots). (900px is
// written 56.25rem: Tailwind orders a px breakpoint before rem ones like md, which would win.)
function NewsCarousel({ items }: { items: HomePageContent["newsItems"] }) {
  const locale = useLocale();
  const [perView, setPerView] = useState<number | null>(null); // known once the script runs
  const [page, setPage] = useState(0);
  const [drag, setDrag] = useState<number | null>(null); // px offset while dragging
  const [interacted, setInteracted] = useState(false);
  const start = useRef<{ x: number; y: number; t: number; id: number; horizontal: boolean | null } | null>(null);
  const moved = useRef(false);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 900 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.ceil(items.length / (perView ?? 3));
  const current = page % pages;
  useEffect(() => {
    if (drag !== null) return; // no autoplay while the user holds the slider
    const t = setTimeout(() => setPage((p) => (p + 1) % pages), 12000);
    return () => clearTimeout(t);
  }, [page, pages, drag]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY, t: e.timeStamp, id: e.pointerId, horizontal: null };
    moved.current = false;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (s.horizontal === null && Math.abs(dx) + Math.abs(dy) > 6) {
      s.horizontal = Math.abs(dx) > Math.abs(dy);
      if (!s.horizontal) { start.current = null; return; } // a vertical swipe scrolls the page
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (!s.horizontal) return;
    moved.current = true;
    // resist past the first and last page
    const edge = (current === 0 && dx > 0) || (current === pages - 1 && dx < 0);
    setDrag(edge ? dx / 3 : dx);
  };
  const onPointerEnd = (e: React.PointerEvent) => {
    const s = start.current;
    start.current = null;
    if (!s || s.id !== e.pointerId || drag === null) { setDrag(null); return; }
    const dx = e.clientX - s.x;
    const fast = Math.abs(dx) / Math.max(1, e.timeStamp - s.t) > 0.5;
    if (dx < -60 || (fast && dx < -20)) setPage(Math.min(current + 1, pages - 1));
    else if (dx > 60 || (fast && dx > 20)) setPage(Math.max(current - 1, 0));
    else setPage(current);
    setInteracted(true);
    setDrag(null);
  };

  return (
    <div>
      <div
        className={`-mx-3 -my-4 touch-pan-y overflow-hidden px-3 py-4 select-none ${drag !== null ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        // a drag is not a click on the card under the pointer
        onClickCapture={(e) => { if (moved.current) { e.preventDefault(); e.stopPropagation(); moved.current = false; } }}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          className={`flex ease-out ${drag !== null ? "" : interacted ? "transition-transform duration-500" : "transition-transform duration-[3000ms] ease-in-out"}`}
          style={{ transform: `translateX(calc(-${current * 100}% - ${current * 30}px + ${drag ?? 0}px))` }}
        >
          {items.map((item) => {
            const href = localizedHref(locale, item.href);
            return (
              <div
                key={item.href}
                data-legacy-ignore={item.added ? "" : undefined}
                className="mr-[30px] flex w-full shrink-0 md:w-[calc((100%-30px)/2)] min-[56.25rem]:w-[calc((100%-60px)/3)]"
              >
                <NewsCard item={item} href={href} locale={locale} />
              </div>
            );
          })}
        </div>
      </div>
      {/* the dots appear once the page count is known (the row keeps its height before that) */}
      <div className="mt-5 min-h-[10px] text-center leading-[0]">
        {perView !== null && Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}`}
            onClick={() => setPage(i)}
            className={`mx-[5px] inline-block h-[10px] w-[10px] transition-colors duration-300 ${i === current ? "bg-brand-navy" : "bg-[rgba(127,127,127,0.5)]"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function HomePage({ page }: { page: HomePageContent }) {
  const locale = useLocale();
  // The legacy card lists the documents down two columns: competition, then festival.
  const half = Math.ceil(page.documents.length / 2);
  const columns = [page.documents.slice(0, half), page.documents.slice(half)];

  return (
    <div>
      <Hero text={page.welcome[locale]} />

      {(page.upcomingEdition || page.documents.length > 0) && (
        <section className="py-8 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl">
            {page.upcomingEdition && (
              <div className="flex w-full flex-col items-center justify-between px-4 pt-3 lg:flex-row">
                <h2 className="type-h1 text-center text-ink lg:text-left">
                  {page.upcomingEdition.title[locale]}
                </h2>
                <div className="type-h5 mt-4 inline-block shrink-0 rounded-full bg-brand-maroon px-6 py-3 text-white shadow-md lg:mt-0">
                  {page.upcomingEdition.dates[locale]}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-2">
              {columns.map((docs, c) => (
                <div key={c} className="flex flex-col justify-center space-y-6">
                  {docs.map((doc) => (
                    <div
                      key={doc.href}
                      className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-md"
                    >
                      <h4 className="type-h4 mb-3 text-center text-ink">
                        {doc.label[locale]}
                      </h4>
                      {doc.date && (
                        <div className="mb-3 flex items-center space-x-3">
                          <CalendarIcon />
                          <span className="type-small font-semibold text-brand-maroon">{doc.date[locale]}</span>
                        </div>
                      )}
                      <a
                        href={doc.href}
                        download
                        className="type-small inline-flex items-center space-x-2 rounded-lg bg-brand-navy px-5 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-navy-dark lg:hover:scale-105"
                      >
                        <DownloadIcon />
                        <span>{labels.download[locale]}</span>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.newsItems.length > 0 && (
        <section className="bg-surface py-[30px]">
          <div className="mx-auto max-w-[1140px] px-[15px]">
            <div className="mx-auto pb-[30px] text-center lg:w-5/6">
              <h2 className="type-h1 mt-5 mb-3 text-ink">{labels.news[locale]}</h2>
              <p className="type-lead text-muted">{labels.newsIntro[locale]}</p>
            </div>
            <NewsCarousel items={page.newsItems} />
          </div>
        </section>
      )}

      {page.collaborations.length > 0 && <Collaborations items={page.collaborations} locale={locale} />}
    </div>
  );
}
