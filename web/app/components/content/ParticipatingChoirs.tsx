import type { ParticipatingChoir } from "~/content/types";
import { useLocale } from "~/lib/locale";
import { RichText } from "~/components/content/RichText";
import { responsive } from "~/lib/img";

export function ParticipatingChoirs({
  title,
  choirs,
}: {
  title: string;
  choirs: ParticipatingChoir[];
}) {
  const locale = useLocale();
  if (choirs.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 type-h2 text-ink">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {choirs.map((choir) => (
          <div key={choir.name} className="overflow-hidden rounded-lg border border-surface-muted">
            {choir.photo && (
              <img {...responsive(choir.photo, "(min-width: 768px) 33vw, 100vw")} alt={choir.name} className="h-48 w-full object-cover" />
            )}
            <div className="p-5">
              <div className="mb-1 flex items-center gap-2">
                {choir.flagEmoji && <span>{choir.flagEmoji}</span>}
                <h3 className="font-semibold text-ink">{choir.name}</h3>
              </div>
              {(choir.location || choir.country) && (
                <p className="mb-2 type-label text-muted">
                  {[choir.location, choir.country].filter(Boolean).join(", ")}
                </p>
              )}
              {choir.conductor && (
                <p className="mb-3 type-small text-muted">
                  <span className="font-medium text-ink">Conductor: </span>
                  {choir.conductor}
                </p>
              )}
              <div className="mb-3 type-small">
                <RichText paragraphs={choir.description[locale]} />
              </div>
              {choir.highlights && choir.highlights.length > 0 && (
                <ul className="space-y-1 type-small text-muted">
                  {choir.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-maroon">•</span>
                      <span>{h[locale]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
