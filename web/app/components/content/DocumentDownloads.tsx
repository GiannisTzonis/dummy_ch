import type { DocumentLink } from "~/content/types";
import { useLocale } from "~/lib/locale";

export function DocumentDownloads({ documents }: { documents: DocumentLink[] }) {
  const locale = useLocale();
  if (documents.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {documents.map((doc) => (
        <a
          key={doc.href}
          href={doc.href}
          download
          className="flex items-center gap-3 rounded-lg border border-surface-muted p-4 transition hover:border-brand-navy hover:bg-surface"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-brand-navy type-label text-white">
            {doc.type}
          </span>
          <span className="type-small font-medium text-ink">{doc.label[locale]}</span>
        </a>
      ))}
    </div>
  );
}
