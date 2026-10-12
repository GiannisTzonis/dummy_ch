import type { Festival } from "~/content/types";
import { FestivalContent } from "~/components/content/FestivalContent";
import { useLocale } from "~/lib/locale";
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
  committee: { en: "Organising Committee", el: "Οργανωτική Επιτροπή" },
  jury: { en: "International Jury Committee", el: "Διεθνής Κριτική Επιτροπή" },
  choirs: { en: "Participating Choirs", el: "Συμμετέχουσες Χορωδίες" },
  sponsors: { en: "Sponsors & Supporters", el: "Χορηγοί & Υποστηρικτές" },
  documents: { en: "Documents", el: "Έγγραφα" },
  schedule: { en: "Schedule", el: "Πρόγραμμα" },
  gallery: { en: "Gallery", el: "Φωτογραφίες" },
} as const;

// heroText, results and others come from the route's loader (built per page, so a page does not
// download every edition's content)
export function FestivalPage({ festival, heroText, results, others }: { festival: Festival; heroText?: string; results?: FestivalResults; others: EditionNav }) {
  const locale = useLocale();

  if (festival.content) {
    return (
      <FestivalContent
        title={festival.title[locale]}
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
        title={festival.title[locale]}
        subtitle={festival.dates[locale]}
        image={festival.poster}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-16">
          <div>
            <RichText paragraphs={festival.intro[locale]} />
            {festival.pullQuote && (
              <blockquote className="mt-6 border-l-4 border-brand-maroon pl-4 type-lead italic text-ink">
                {festival.pullQuote[locale]}
              </blockquote>
            )}
          </div>

          {festival.documents.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.documents[locale]}</h2>
              <DocumentDownloads documents={festival.documents} />
            </div>
          )}

          <ContentSections sections={festival.sections} />

          {festival.schedule.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.schedule[locale]}</h2>
              <ScheduleList days={festival.schedule} />
            </div>
          )}

          <JuryList title={labels.jury[locale]} members={festival.jury} />

          <ParticipatingChoirs title={labels.choirs[locale]} choirs={festival.participatingChoirs} />

          {festival.sponsors.length > 0 && (
            <div>
              <h2 className="mb-6 type-h2 text-ink">{labels.sponsors[locale]}</h2>
              <SponsorTiers tiers={festival.sponsors} />
            </div>
          )}

          {festival.gallery.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{labels.gallery[locale]}</h2>
              <GalleryGrid images={festival.gallery} />
            </div>
          )}
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CommitteeList title={labels.committee[locale]} members={festival.committee} />
        </div>
      </div>
    </div>
  );
}
