import { Link } from "react-router";
import type { RelatedLinks as RelatedLinksData } from "~/content/types";
import { localizedHref, pick, useLocale, tr } from "~/lib/locale";
import { sized } from "~/lib/img";

export function RelatedLinks({ blocks, vertical = false, narrow = false }: { blocks: RelatedLinksData[]; vertical?: boolean; narrow?: boolean }) {
  const locale = useLocale();
  if (blocks.length === 0) return null;

  return (
    <div className="space-y-8">
      {blocks.map((block, b) => (
        <div key={b}>
          {block.heading && <h2 className="type-h4 mb-4 text-ink">{tr(block.heading, locale)}</h2>}
          <div className={vertical ? "grid grid-cols-1 gap-4" : narrow ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
            {block.items.map((item, i) => (
              <Link
                key={i}
                to={localizedHref(locale, pick(item.href, locale))}
                className="group flex items-center gap-4 rounded-lg border border-rule p-3 transition hover:border-brand-navy/40 hover:shadow-sm"
              >
                {item.image && (
                  <img src={sized(pick(item.image, locale), 400)} alt={pick(item.title, locale)} className="h-20 w-20 flex-shrink-0 rounded object-cover" />
                )}
                <div>
                  {item.kicker && <p className="type-label text-muted">{pick(item.kicker, locale)}</p>}
                  <p className="type-small font-semibold text-ink group-hover:text-brand-navy">{pick(item.title, locale)}</p>
                  {item.date && <p className="type-caption text-muted">{pick(item.date, locale)}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
