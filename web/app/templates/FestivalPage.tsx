import type { Festival } from "~/content/types";
import { FestivalContent } from "~/components/content/FestivalContent";
import { useLocale, tr } from "~/lib/locale";
import { PageHero } from "~/components/content/PageHero";
import { CommitteeList } from "~/components/content/CommitteeList";
import { JuryList } from "~/components/content/JuryList";
import { ParticipatingChoirs } from "~/components/content/ParticipatingChoirs";
import { SponsorTiers } from "~/components/content/SponsorTiers";
import { DocumentDownloads } from "~/components/content/DocumentDownloads";
import { ContentSections } from "~/components/content/ContentSections";
import { ScheduleList } from "~/components/content/ScheduleList";
import { GalleryGrid } from "~/components/content/GalleryGrid";
import { RichText } from "~/components/content/RichText";
import type { FestivalResults } from "~/content/festival-results";
import type { EditionNav } from "~/content/edition-nav";

const labels = {
  committee: { en: "Organising Committee", el: "Οργανωτική Επιτροπή", fr: "Comité d'organisation", it: "Comitato organizzatore", de: "Organisationskomitee", es: "Comité Organizador" },
  jury: { en: "International Jury Committee", el: "Διεθνής Κριτική Επιτροπή", fr: "Jury international", it: "Giuria internazionale", de: "Internationale Jury", es: "Jurado Internacional" },
  choirs: { en: "Participating Choirs", el: "Συμμετέχουσες Χορωδίες", fr: "Chœurs participants", it: "Cori partecipanti", de: "Teilnehmende Chöre", es: "Coros participantes" },
  sponsors: {
    en: "Sponsors & Supporters",
    el: "Χορηγοί & Υποστηρικτές",
    fr: "Sponsors et partenaires",
    it: "Sponsor e sostenitori",
    de: "Sponsoren und Förderer",
    es: "Patrocinadores y colaboradores",
  },
  documents: { en: "Documents", el: "Έγγραφα", fr: "Documents", it: "Documenti", de: "Dokumente", es: "Documentos" },
  schedule: { en: "Schedule", el: "Πρόγραμμα", fr: "Programme", it: "Programma", de: "Programm", es: "Programa" },
  gallery: { en: "Gallery", el: "Φωτογραφίες", fr: "Photos", it: "Galleria fotografica", de: "Fotogalerie", es: "Galería de fotos" },
} as const;

// heroText, results and others come from the route's loader (built per page, so a page does not
// download every edition's content)
export function FestivalPage({ festival, heroText, results, others }: { festival: Festival; heroText?: string; results?: FestivalResults; others: EditionNav }) {
  const locale = useLocale();

  if (festival.content) {
    return (
      <FestivalContent
        title={tr(festival.title, locale)}
        heroText={heroText}
        content={festival.content}
        aside={festival.aside}
        results={results}
        others={others}
      />
    );
  }

  return (
    <div>
      <PageHero
        title={tr(festival.title, locale)}
        subtitle={tr(festival.dates, locale)}
        image={festival.poster}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-16">
          <div>
            <RichText paragraphs={tr(festival.intro, locale)} />
            {festival.pullQuote && (
              <blockquote className="mt-6 border-l-4 border-brand-maroon pl-4 type-lead italic text-ink">
                {tr(festival.pullQuote, locale)}
              </blockquote>
            )}
          </div>

          {festival.documents.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.documents, locale)}</h2>
              <DocumentDownloads documents={festival.documents} />
            </div>
          )}

          <ContentSections sections={festival.sections} />

          {festival.schedule.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.schedule, locale)}</h2>
              <ScheduleList days={festival.schedule} />
            </div>
          )}

          <JuryList title={tr(labels.jury, locale)} members={festival.jury} />

          <ParticipatingChoirs title={tr(labels.choirs, locale)} choirs={festival.participatingChoirs} />

          {festival.sponsors.length > 0 && (
            <div>
              <h2 className="mb-6 type-h2 text-ink">{tr(labels.sponsors, locale)}</h2>
              <SponsorTiers tiers={festival.sponsors} />
            </div>
          )}

          {festival.gallery.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.gallery, locale)}</h2>
              <GalleryGrid images={festival.gallery} />
            </div>
          )}
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CommitteeList title={tr(labels.committee, locale)} members={festival.committee} />
        </div>
      </div>
    </div>
  );
}
