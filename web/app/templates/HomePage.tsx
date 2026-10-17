import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { HomePageContent, Locale } from "~/content/types";
import { localizedHref, pick, useLocale, tr } from "~/lib/locale";
import { Stage } from "~/components/home/Stage";
import { Countdown, Figures, Tilt } from "~/components/home/Effects";
import { responsive, sized } from "~/lib/img";
import { ArtIcon } from "~/components/ArtIcons";

// Layout and styles follow index.html / indexGreek.html and css/main.css.

const labels = {
  download: { en: "Download", el: "Λήψη", fr: "Télécharger", it: "Scarica", de: "Herunterladen", es: "Descargar" },
  festivalPage: { en: "Festival page", el: "Σελίδα του φεστιβάλ", fr: "Page du festival", it: "Pagina del festival", de: "Zur Festivalseite", es: "Página del festival" },
  news: {
    en: "News - Announcements",
    el: "Νέα - Ανακοινώσεις",
    fr: "Actualités - Annonces",
    it: "Notizie - Annunci",
    de: "Neuigkeiten - Ankündigungen",
    es: "Noticias - Anuncios",
  },
  newsIntro: {
    en: "Stay tuned with all the latest news about our festival.",
    el: "Μείνετε ενήμεροι με όλα τα τελευταία νέα για το φεστιβάλ μας.",
    fr: "Suivez toute l'actualité de notre festival.",
    it: "Resti aggiornato su tutte le ultime notizie del nostro festival.",
    de: "Bleiben Sie über alle Neuigkeiten unseres Festivals auf dem Laufenden.",
    es: "Manténgase al día de todas las novedades de nuestro festival.",
  },
  // the "New" card under the countdown (WhatsNew)
  newBadge: { en: "New", el: "Νέο", fr: "Nouveau", it: "Novità", de: "Neu", es: "Nuevo" },
  newTitle: {
    en: "Compulsory Works – Categories A and C",
    el: "Υποχρεωτικά έργα – Κατηγορίες Α και Γ",
    fr: "Œuvres imposées – Catégories A et C",
    it: "Brani d'obbligo – Categorie A e C",
    de: "Pflichtstücke – Kategorien A und C",
    es: "Obras obligatorias – Categorías A y C",
  },
  newText: {
    en: "The scores of the six works for the 2027 competition, and recordings of the Category C works, are ready to download.",
    el: "Οι παρτιτούρες των έξι έργων του διαγωνισμού 2027 και οι ηχογραφήσεις των έργων της Κατηγορίας Γ είναι διαθέσιμες για λήψη.",
    fr: "Les partitions des six œuvres du concours 2027 et les enregistrements des œuvres de la catégorie C sont disponibles au téléchargement.",
    it: "Le partiture dei sei brani del concorso 2027 e le registrazioni dei brani della categoria C sono disponibili per il download.",
    de: "Die Noten der sechs Werke des Wettbewerbs 2027 und die Aufnahmen der Werke der Kategorie C stehen zum Download bereit.",
    es: "Las partituras de las seis obras del concurso 2027 y las grabaciones de las obras de la categoría C están disponibles para descargar.",
  },
  newLink: { en: "See the works", el: "Δείτε τα έργα", fr: "Voir les œuvres", it: "Vedi i brani", de: "Zu den Werken", es: "Ver las obras" },
  collaborations: { en: "Collaborations", el: "Συνεργασίες", fr: "Collaborations", it: "Collaborazioni", de: "Kooperationen", es: "Colaboraciones" },
  website: { en: "Website", el: "Ιστοσελίδα", fr: "Site web", it: "Sito web", de: "Website", es: "Sitio web" },
  readMore: { en: "Read more", el: "Διαβάστε περισσότερα", fr: "Lire la suite", it: "Leggi di più", de: "Weiterlesen", es: "Leer más" },
  newTab: {
    en: "(opens in a new tab)",
    el: "(ανοίγει σε νέα καρτέλα)",
    fr: "(s'ouvre dans un nouvel onglet)",
    it: "(si apre in una nuova scheda)",
    de: "(öffnet in einem neuen Tab)",
    es: "(se abre en una nueva pestaña)",
  },
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
          <h2 id="collaborations" className="type-h2 text-ink">{tr(labels.collaborations, locale)}</h2>
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
                  className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgb(15_23_42/0.06)] ring-1 ring-slate-900/[0.08] transition duration-300 hover:shadow-[0_18px_40px_-12px_rgb(43_40_122/0.28)] hover:ring-brand-maroon/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
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
                      {/* phones: a short generic label (the addresses are wider than the cards) */}
                      <span className="sm:hidden">{tr(labels.website, locale)}</span>
                      <span className="hidden sm:inline">{host(c.link)}</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                        <path d="M6 4h10v10h-2V7.4l-8.3 8.3-1.4-1.4L12.6 6H6V4Z" />
                      </svg>
                      <span className="sr-only">{tr(labels.newTab, locale)}</span>
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
    // (a space before each break: phones hide the breaks, and the words must not run together)
    ...(i > 0 ? [" ", <br key={`br${i}`} />] : []),
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
function Hero({ text, locale }: { text: string; locale: Locale }) {
  return (
    <Stage locale={locale}>
      <h1 className="stage-title type-display absolute inset-x-4 top-[28%] max-sm:[@media(max-height:700px)]:top-[19%] max-lg:[&_br]:hidden text-center font-light text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.45),0_0_24px_rgb(0_0_0/0.25)] min-[1651px]:left-auto min-[1651px]:right-[93px] min-[1651px]:top-[160px] min-[1651px]:max-w-[40rem] min-[1651px]:text-right">
        {welcomeLines(text)}
      </h1>
    </Stage>
  );
}

// A news card: framed, with the picture on a soft blurred copy of itself so posters and photos of
// any shape fill the same 4:3 stage uncropped. The date sits on the picture as a chip, a maroon
// rule leads into the title, and the whole card is one link that lifts on hover.
function NewsCard({ item, href, locale }: { item: HomePageContent["newsItems"][number]; href: string; locale: Locale }) {
  return (
    <Link
      to={href}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgb(15_23_42/0.06),0_4px_16px_rgb(15_23_42/0.06)] ring-1 ring-rule transition-all duration-300 hover:shadow-[0_2px_4px_rgb(15_23_42/0.06),0_18px_40px_rgb(15_23_42/0.14)] hover:ring-brand-navy/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
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
          <ArtIcon name="calendar" small className="size-4" />
          {pick(item.date, locale)}
        </p>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <div className="mb-3 h-0.5 w-8 bg-brand-maroon transition-all duration-300 group-hover:w-14" aria-hidden="true" />
        <h3 className="type-h5 text-ink transition-colors group-hover:text-brand-navy">{tr(item.title, locale)}</h3>
        {item.subtitle && <p className="type-small mt-2 line-clamp-3 text-muted">{tr(item.subtitle, locale)}</p>}
        <div className="min-h-5 flex-1" aria-hidden="true" />
        <p
          data-legacy-ignore=""
          className="type-label inline-flex items-center gap-1.5 border-t border-rule pt-4 font-semibold tracking-wide text-brand-navy uppercase"
        >
          {tr(labels.readMore, locale)}
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
                <Tilt className="flex w-full">
                  <NewsCard item={item} href={href} locale={locale} />
                </Tilt>
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

// News of the coming festival, under the countdown: one highlighted link (new site, not on the
// legacy page). Change or remove it when the news is no longer new.
function WhatsNew({ locale }: { locale: Locale }) {
  return (
    <Link
      data-legacy-ignore=""
      to={localizedHref(locale, "/festival/2027#compulsory-works")}
      className="reveal group relative mt-12 flex flex-col gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-maroon/30 via-white/[0.07] to-white/[0.04] p-6 ring-1 ring-white/20 backdrop-blur-md transition duration-300 hover:ring-white/45 sm:flex-row sm:items-center sm:gap-6 sm:p-7 lg:mt-14"
    >
      <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
        <ArtIcon name="notes" className="size-8 text-white" />
      </span>
      <div className="flex-1">
        <span className="type-label mb-2 inline-block rounded-full bg-brand-maroon px-2.5 py-1 text-white uppercase shadow-[0_6px_16px_-6px_rgb(172_46_72/0.9)]">
          {tr(labels.newBadge, locale)}
        </span>
        <h3 className="type-h4 text-white">{tr(labels.newTitle, locale)}</h3>
        <p className="type-small mt-1 text-white/75">{tr(labels.newText, locale)}</p>
      </div>
      <span className="type-small inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 font-semibold text-brand-navy shadow-lg transition-colors duration-300 group-hover:bg-[#ffe3e9] sm:self-center">
        {tr(labels.newLink, locale)}
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

// The upcoming festival as a concert band: deep blue with slowly drifting coloured light and a faint
// staff, the title, dates and a live countdown, then the application forms and rules as glass cards
// (in the legacy order: competition, then festival).
function Upcoming({ page, locale }: { page: HomePageContent; locale: Locale }) {
  const up = page.upcomingEdition;
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-dark py-16 text-white lg:py-24">
      <div aria-hidden="true" className="drift absolute -top-1/3 -left-1/4 -z-10 h-[80%] w-[60%] rounded-full bg-brand-maroon/45 blur-[120px]" />
      <div aria-hidden="true" className="drift absolute -right-1/4 -bottom-1/3 -z-10 h-[80%] w-[60%] rounded-full bg-[#5b5bd6]/35 blur-[120px]" style={{ animationDelay: "-8s" }} />
      <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-32 w-full text-white/[0.07]">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M0 ${30 + i * 15} C 300 ${-10 + i * 15}, 600 ${90 + i * 15}, 1200 ${20 + i * 15}`} fill="none" stroke="currentColor" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {up && (
          <div className="reveal grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="type-h1 text-white [text-wrap:balance]">{tr(up.title, locale)}</h2>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <div className="type-h5 inline-block rounded-full bg-brand-maroon px-6 py-3 text-white shadow-[0_12px_30px_-10px_rgb(172_46_72/0.8)]">
                  {tr(up.dates, locale)}
                </div>
                {up.href && (
                  // new site navigation (not on the legacy page): the content check skips it
                  <Link
                    data-legacy-ignore=""
                    to={localizedHref(locale, up.href)}
                    className="type-small group inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-5 py-2.5 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-brand-navy"
                  >
                    {tr(labels.festivalPage, locale)}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                )}
              </div>
            </div>
            {up.startsAt && <Countdown target={up.startsAt} locale={locale} />}
          </div>
        )}
        {up?.href === "/festival/2027" && <WhatsNew locale={locale} />}
        {page.documents.length > 0 && (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
            {page.documents.map((doc, i) => (
              <div
                key={doc.href}
                className="reveal group relative flex flex-col rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-md transition duration-300 hover:bg-white/[0.1] hover:ring-white/35"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <h4 className="type-h5 mb-3 text-white">{tr(doc.label, locale)}</h4>
                {doc.date && (
                  <div className="mb-5 flex items-center gap-2">
                    <ArtIcon name="calendar" small className="size-4 text-[#ff9db0]" />
                    <span className="type-small font-semibold text-white/80">{tr(doc.date, locale)}</span>
                  </div>
                )}
                <a
                  href={doc.href}
                  download
                  className="type-small mt-auto inline-flex items-center justify-center gap-2 self-start rounded-lg bg-white px-5 py-2.5 font-semibold text-brand-navy shadow-lg transition-colors duration-300 hover:bg-[#ffe3e9]"
                >
                  <ArtIcon name="score" small className="size-5" />
                  <span>{tr(labels.download, locale)}</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function HomePage({ page }: { page: HomePageContent }) {
  const locale = useLocale();

  return (
    <div>
      <Hero text={tr(page.welcome, locale)} locale={locale} />

      {(page.upcomingEdition || page.documents.length > 0) && <Upcoming page={page} locale={locale} />}

      <Figures locale={locale} />

      {page.newsItems.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-[1140px] px-[15px]">
            <div className="reveal mx-auto pb-10 text-center lg:w-5/6">
              <span aria-hidden="true" className="mx-auto mb-4 block h-1 w-12 rounded-full bg-brand-maroon" />
              <h2 className="type-h1 mb-3 text-ink">{tr(labels.news, locale)}</h2>
              <p className="type-lead text-muted">{tr(labels.newsIntro, locale)}</p>
            </div>
            <NewsCarousel items={page.newsItems} />
          </div>
        </section>
      )}

      {page.collaborations.length > 0 && <Collaborations items={page.collaborations} locale={locale} />}
    </div>
  );
}
