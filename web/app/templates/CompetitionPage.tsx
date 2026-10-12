import type { Competition } from "~/content/types";
import { FestivalContent } from "~/components/content/FestivalContent";
import type { EditionNav } from "~/content/edition-nav";
import { useLocale, tr } from "~/lib/locale";
import { PageHero } from "~/components/content/PageHero";
import { CommitteeList } from "~/components/content/CommitteeList";
import { JuryList } from "~/components/content/JuryList";
import { AwardsList } from "~/components/content/AwardsList";
import { ContentSections } from "~/components/content/ContentSections";
import { GalleryGrid } from "~/components/content/GalleryGrid";
import { RichText } from "~/components/content/RichText";
import { responsive } from "~/lib/img";

const labels = {
  committee: { en: "Organising Committee", el: "Οργανωτική Επιτροπή", fr: "Comité d'organisation", it: "Comitato organizzatore", de: "Organisationskomitee", es: "Comité Organizador" },
  jury: { en: "Jury Committee", el: "Κριτική Επιτροπή", fr: "Jury", it: "Giuria", de: "Jury", es: "Jurado" },
  awards: { en: "Awards", el: "Βραβεία", fr: "Prix", it: "Premi", de: "Preise", es: "Premios" },
  recommended: {
    en: "Recommended Works for Performance",
    el: "Προτεινόμενα Έργα για Εκτέλεση",
    fr: "Œuvres recommandées pour l'exécution",
    it: "Opere raccomandate per l'esecuzione",
    de: "Zur Aufführung empfohlene Werke",
    es: "Obras recomendadas para su interpretación",
  },
  demoChoirs: {
    en: "Demonstrative Choirs",
    el: "Επίδειξη Χορωδιών",
    fr: "Chœurs de démonstration",
    it: "Cori dimostrativi",
    de: "Demonstrationschöre",
    es: "Coros de demostración",
  },
  gallery: { en: "Gallery", el: "Φωτογραφίες", fr: "Photos", it: "Galleria fotografica", de: "Fotogalerie", es: "Galería de fotos" },
} as const;

export function CompetitionPage({ competition, others }: { competition: Competition; others: EditionNav }) {
  const locale = useLocale();

  if (competition.content) {
    return (
      // same page design as the festival and masterclass pages
      <FestivalContent
        title={tr(competition.title, locale)}
        content={competition.content}
        aside={competition.aside}
        others={others}
      />
    );
  }

  return (
    <div>
      <PageHero
        title={tr(competition.title, locale)}
        subtitle={(competition.dates && tr(competition.dates, locale))}
        image={competition.poster}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-16">
          <RichText paragraphs={tr(competition.intro, locale)} />

          <ContentSections sections={competition.sections} />

          {competition.kind === "composition" && (
            <>
              <AwardsList title={tr(labels.awards, locale)} awards={competition.awards} />
              {competition.recommendedWorks.length > 0 && (
                <div>
                  <h2 className="mb-4 type-h2 text-ink">{tr(labels.recommended, locale)}</h2>
                  <ul className="space-y-1 text-body">
                    {competition.recommendedWorks.map((w, i) => (
                      <li key={i}>
                        <span className="font-medium text-ink">{w.composer}: </span>
                        {w.piece}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {competition.kind === "conducting" && competition.demonstrativeChoirs.length > 0 && (
            <div>
              <h2 className="mb-6 type-h2 text-ink">{tr(labels.demoChoirs, locale)}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {competition.demonstrativeChoirs.map((choir) => (
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

          <JuryList title={tr(labels.jury, locale)} members={competition.jury} />

          {competition.gallery.length > 0 && (
            <div>
              <h2 className="mb-4 type-h2 text-ink">{tr(labels.gallery, locale)}</h2>
              <GalleryGrid images={competition.gallery} />
            </div>
          )}
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CommitteeList title={tr(labels.committee, locale)} members={competition.committee} />
        </div>
      </div>
    </div>
  );
}
