import type { ReactNode } from "react";
import type { Locale } from "~/content/types";
import { page, labels, type CompulsoryWork } from "~/content/compulsory-works-2027";
import { localizedHref, tr, useLocale } from "~/lib/locale";
import { ArtIcon } from "~/components/ArtIcons";

// The compulsory works of the 2027 competition, inside the festival page's own section (its
// content places it with {embed: "compulsory-works-2027"} under the section title): an
// introduction, then each category with a card per work (prize, title, composer, voicing, text,
// duration), its score to download and, where the committee sent one, its recording to play.

// **bold** and [text](href) ("@/path": a page in the visitor's language)
function inline(text: string, locale: Locale): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      m[1] !== undefined ? (
        <a key={m.index} href={m[2].startsWith("@") ? localizedHref(locale, m[2].slice(1)) : m[2]} className="text-link underline decoration-1 underline-offset-2 transition-colors hover:text-link-hover">
          {m[1]}
        </a>
      ) : (
        <strong key={m.index} className="font-semibold text-ink">{m[3]}</strong>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

// the medal colours: gold, silver, bronze
const medal = {
  1: "from-[#f3d36b] to-[#b8891f] text-[#4a3505]",
  2: "from-[#eef1f5] to-[#9aa4b1] text-[#2a313b]",
  3: "from-[#e9b385] to-[#9c5a2c] text-[#3b1d07]",
} as const;

function WorkCard({ work, locale }: { work: CompulsoryWork; locale: Locale }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-20px_rgb(43_40_122/0.35)] ring-1 ring-slate-900/[0.08] lg:p-7">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy via-[#5b3f8f] to-brand-maroon" />
      <p className="type-caption flex items-center gap-2.5 font-semibold text-muted">
        <span aria-hidden="true" className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[13px] font-bold shadow-sm ring-1 ring-black/10 ${medal[work.prize]}`}>
          {work.prize}
        </span>
        {tr(labels.prize[work.prize], locale)}
      </p>
      <h3 className="type-h4 mt-5 text-ink">{work.title}</h3>
      {work.subtitle && <p className="mt-1 text-body italic">{work.subtitle}</p>}
      <p className="mt-3 font-semibold text-brand-navy">
        {work.composer} <span className="font-normal text-muted">· {tr(work.country, locale)}</span>
      </p>
      <dl className="type-small mt-4 space-y-1.5 border-t border-rule pt-4 text-body">
        <div>{tr(work.voicing, locale)}</div>
        {work.text && (
          <div>
            <dt className="inline text-muted">{tr(labels.text, locale)} </dt>
            <dd className="inline">{tr(work.text, locale)}</dd>
          </div>
        )}
        {work.duration && (
          <div>
            <dt className="inline text-muted">{tr(labels.duration, locale)} </dt>
            <dd className="inline">{work.duration}</dd>
          </div>
        )}
      </dl>
      <div className="mt-auto pt-6">
        {work.audio && (
          <div className="mb-4">
            <p className="type-caption mb-2 font-semibold tracking-wide text-muted uppercase">{tr(labels.recording, locale)}</p>
            <audio controls preload="none" src={work.audio} className="h-10 w-full" />
          </div>
        )}
        <a
          href={work.score}
          download
          className="type-small inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-5 py-2.5 font-semibold text-white shadow-[0_10px_24px_-12px_rgb(43_40_122/0.7)] transition-colors duration-300 hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        >
          <ArtIcon name="score" small className="size-4" />
          {tr(labels.score, locale)}
        </a>
        {work.note && <p className="type-caption mt-3 text-muted">{tr(work.note, locale)}</p>}
      </div>
    </article>
  );
}

export function CompulsoryWorks() {
  const locale = useLocale();
  return (
    // "compulsory-works": the home page links here (its "New" card under the countdown); the scroll
    // margin is the section's own (the sticky bars) plus the ~160px of the section title above
    <div id="compulsory-works" className="w-full scroll-mt-[330px]">
      <p className="type-lead text-body">{inline(tr(page.intro, locale), locale)}</p>
      {page.categories.map((c) => (
        <div key={c.id} id={c.id} className="scroll-mt-40">
          <h3 className="type-h3 pt-10 text-ink">{tr(c.name, locale)}</h3>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.works.map((w) => (
              <li key={w.title}>
                <WorkCard work={w} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
