import type { Masterclass } from "~/content/types";
import { FestivalContent } from "~/components/content/FestivalContent";
import type { EditionNav } from "~/content/edition-nav";
import { useLocale, tr } from "~/lib/locale";
import { PageHero } from "~/components/content/PageHero";
import { CommitteeList } from "~/components/content/CommitteeList";
import { JuryList } from "~/components/content/JuryList";
import { ScheduleList } from "~/components/content/ScheduleList";
import { ContentSections } from "~/components/content/ContentSections";
import { RichText } from "~/components/content/RichText";
import { responsive } from "~/lib/img";

const labels = {
  committee: { en: "Organising Committee", el: "Οργανωτική Επιτροπή", fr: "Comité d'organisation", it: "Comitato organizzatore", de: "Organisationskomitee", es: "Comité Organizador" },
  mentors: { en: "Mentors", el: "Μέντορες", fr: "Mentors", it: "Docenti", de: "Dozenten", es: "Mentores" },
  topics: { en: "Topics", el: "Θεματολογία", fr: "Thèmes", it: "Argomenti", de: "Themen", es: "Temas" },
  demoChoirs: {
    en: "Demonstrative Choirs",
    el: "Επίδειξη Χορωδιών",
    fr: "Chœurs de démonstration",
    it: "Cori dimostrativi",
    de: "Demonstrationschöre",
    es: "Coros de demostración",
  },
  schedule: { en: "Schedule", el: "Πρόγραμμα", fr: "Programme", it: "Programma", de: "Programm", es: "Programa" },
  repertoire: { en: "Repertoire", el: "Ρεπερτόριο", fr: "Répertoire", it: "Repertorio", de: "Repertoire", es: "Repertorio" },
  fees: { en: "Fees", el: "Δίδακτρα", fr: "Frais d'inscription", it: "Quote di iscrizione", de: "Teilnahmegebühren", es: "Cuotas de inscripción" },
} as const;

export function MasterclassPage({ masterclass, others }: { masterclass: Masterclass; others: EditionNav }) {
  const locale = useLocale();

  if (masterclass.content) {
    return (
      // same page design as the festival pages
      <FestivalContent
        title={tr(masterclass.title, locale)}
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
        title={tr(masterclass.title, locale)}
        subtitle={tr(masterclass.dates, locale)}
        image={masterclass.poster}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-16">
          {(tr(masterclass.intro, locale).length > 0 || masterclass.pullQuotes.length > 0) && (
            <div>
              <RichText paragraphs={tr(masterclass.intro, locale)} />
              {masterclass.pullQuotes.map((quote, i) => (
                <blockquote key={i} className="mt-6 border-l-4 border-brand-maroon pl-4 type-lead italic text-ink">
                  {tr(quote, locale)}
                </blockquote>
              ))}
            </div>
          )}

          {masterclass.topics.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.topics, locale)}</h2>
              <ol className="list-decimal space-y-2 pl-5 text-body">
                {masterclass.topics.map((topic, i) => (
                  <li key={i}>{tr(topic, locale)}</li>
                ))}
              </ol>
            </div>
          )}

          {masterclass.schedule.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.schedule, locale)}</h2>
              <ScheduleList days={masterclass.schedule} />
            </div>
          )}

          {masterclass.demonstrativeChoirs.length > 0 && (
            <div>
              <h2 className="mb-6 type-h2 text-ink">{tr(labels.demoChoirs, locale)}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {masterclass.demonstrativeChoirs.map((choir) => (
                  <div key={choir.name} className="overflow-hidden rounded-lg border border-surface-muted">
                    {choir.photo && (
                      <img {...responsive(choir.photo, "(min-width: 768px) 33vw, 100vw")} alt={choir.name} className="h-40 w-full object-cover" />
                    )}
                    <div className="p-4">
                      <h3 className="mb-2 font-semibold text-ink">{choir.name}</h3>
                      <div className="type-small">
                        <RichText paragraphs={tr(choir.bio, locale)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <JuryList title={tr(labels.mentors, locale)} members={masterclass.mentors} />

          {masterclass.repertoire.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.repertoire, locale)}</h2>
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
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.fees, locale)}</h2>
              <ul className="space-y-2 text-body">
                {masterclass.fees.map((fee, i) => (
                  <li key={i} className="flex justify-between border-b border-surface-muted pb-2 sm:max-w-sm">
                    <span>{tr(fee.label, locale)}</span>
                    <span className="font-medium text-ink">{fee.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ContentSections sections={masterclass.sections} />
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CommitteeList title={tr(labels.committee, locale)} members={masterclass.committee} />
        </div>
      </div>
    </div>
  );
}
