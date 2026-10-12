import type { Masterclass } from "~/content/types";
import { FestivalContent } from "~/components/content/FestivalContent";
import type { EditionNav } from "~/content/edition-nav";
import { useLocale } from "~/lib/locale";
import { PageHero } from "~/components/content/PageHero";
import { CommitteeList } from "~/components/content/CommitteeList";
import { JuryList } from "~/components/content/JuryList";
import { ScheduleList } from "~/components/content/ScheduleList";
import { ContentSections } from "~/components/content/ContentSections";
import { RichText } from "~/components/content/RichText";
import { responsive } from "~/lib/img";

const labels = {
  committee: { en: "Organising Committee", el: "Οργανωτική Επιτροπή" },
  mentors: { en: "Mentors", el: "Μέντορες" },
  topics: { en: "Topics", el: "Θεματολογία" },
  demoChoirs: { en: "Demonstrative Choirs", el: "Επίδειξη Χορωδιών" },
  schedule: { en: "Schedule", el: "Πρόγραμμα" },
  repertoire: { en: "Repertoire", el: "Ρεπερτόριο" },
  fees: { en: "Fees", el: "Δίδακτρα" },
} as const;

export function MasterclassPage({ masterclass, others }: { masterclass: Masterclass; others: EditionNav }) {
  const locale = useLocale();

  if (masterclass.content) {
    return (
      // same page design as the festival pages
      <FestivalContent
        title={masterclass.title[locale]}
        content={masterclass.content}
        aside={masterclass.aside}
        mentorsLabel={labels.mentors}
        others={others}
      />
    );
  }

  return (
    <div>
      <PageHero
        title={masterclass.title[locale]}
        subtitle={masterclass.dates[locale]}
        image={masterclass.poster}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-16">
          {(masterclass.intro[locale].length > 0 || masterclass.pullQuotes.length > 0) && (
            <div>
              <RichText paragraphs={masterclass.intro[locale]} />
              {masterclass.pullQuotes.map((quote, i) => (
                <blockquote key={i} className="mt-6 border-l-4 border-brand-maroon pl-4 type-lead italic text-ink">
                  {quote[locale]}
                </blockquote>
              ))}
            </div>
          )}

          {masterclass.topics.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.topics[locale]}</h2>
              <ol className="list-decimal space-y-2 pl-5 text-body">
                {masterclass.topics.map((topic, i) => (
                  <li key={i}>{topic[locale]}</li>
                ))}
              </ol>
            </div>
          )}

          {masterclass.schedule.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.schedule[locale]}</h2>
              <ScheduleList days={masterclass.schedule} />
            </div>
          )}

          {masterclass.demonstrativeChoirs.length > 0 && (
            <div>
              <h2 className="mb-6 type-h2 text-ink">{labels.demoChoirs[locale]}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {masterclass.demonstrativeChoirs.map((choir) => (
                  <div key={choir.name} className="overflow-hidden rounded-lg border border-surface-muted">
                    {choir.photo && (
                      <img {...responsive(choir.photo, "(min-width: 768px) 33vw, 100vw")} alt={choir.name} className="h-40 w-full object-cover" />
                    )}
                    <div className="p-4">
                      <h3 className="mb-2 font-semibold text-ink">{choir.name}</h3>
                      <div className="type-small">
                        <RichText paragraphs={choir.bio[locale]} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <JuryList title={labels.mentors[locale]} members={masterclass.mentors} />

          {masterclass.repertoire.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.repertoire[locale]}</h2>
              <ul className="space-y-1 text-body">
                {masterclass.repertoire.map((r, i) => (
                  <li key={i}>
                    <span className="font-medium text-ink">{r.composer}: </span>
                    {r.piece}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {masterclass.fees.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.fees[locale]}</h2>
              <ul className="space-y-2 text-body">
                {masterclass.fees.map((fee, i) => (
                  <li key={i} className="flex justify-between border-b border-surface-muted pb-2 sm:max-w-sm">
                    <span>{fee.label[locale]}</span>
                    <span className="font-medium text-ink">{fee.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ContentSections sections={masterclass.sections} />
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CommitteeList title={labels.committee[locale]} members={masterclass.committee} />
        </div>
      </div>
    </div>
  );
}
