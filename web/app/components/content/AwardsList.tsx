import type { Award } from "~/content/types";
import { useLocale } from "~/lib/locale";

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
            <h3 className="font-semibold text-brand-navy">{award.title[locale]}</h3>
            {award.notAwarded ? (
              <p className="mt-1 type-small italic text-muted">
                {locale === "el" ? "Δεν απονεμήθηκε" : "Not Awarded"}
              </p>
            ) : (
              <div className="mt-1 type-small text-muted">
                {award.prize && <p className="font-medium text-ink">{award.prize[locale]}</p>}
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
