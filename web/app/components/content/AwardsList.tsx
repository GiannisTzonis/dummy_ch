import type { Award } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";

const notAwardedLabel = {
  en: "Not Awarded",
  el: "Δεν απονεμήθηκε",
  fr: "Non attribué",
  it: "Non assegnato",
  de: "Nicht vergeben",
  es: "Desierto",
} as const;

export function AwardsList({ title, awards }: { title: string; awards: Award[] }) {
  const locale = useLocale();
  if (awards.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 type-h2 text-ink">{title}</h2>
      <div className="space-y-4">
        {awards.map((award, i) => (
          <div
            key={i}
            className="rounded-lg border border-surface-muted p-5"
          >
            <h3 className="font-semibold text-brand-navy">{tr(award.title, locale)}</h3>
            {award.notAwarded ? (
              <p className="mt-1 type-small italic text-muted">
                {tr(notAwardedLabel, locale)}
              </p>
            ) : (
              <div className="mt-1 type-small text-muted">
                {award.prize && <p className="font-medium text-ink">{tr(award.prize, locale)}</p>}
                {award.piece && <p>{award.piece}</p>}
                {award.composer && <p>{award.composer}{award.country ? ` (${award.country})` : ""}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
