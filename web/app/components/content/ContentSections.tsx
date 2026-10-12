import type { ContentSection } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";
import { RichText } from "./RichText";
import { responsive } from "~/lib/img";

function SectionImages({ images }: { images: ContentSection["images"] }) {
  const locale = useLocale();
  const list = !images ? [] : Array.isArray(images) ? images : tr(images, locale);
  if (list.length === 0) return null;
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {list.map((src) => (
        <img key={src} {...responsive(src, "(min-width: 768px) 33vw, 50vw")} alt="" className="aspect-square w-full rounded-lg object-cover" />
      ))}
    </div>
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  const locale = useLocale();
  if (sections.length === 0) return null;

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {section.title && <h2 className="mb-4 type-h2 text-ink">{tr(section.title, locale)}</h2>}
          <RichText paragraphs={tr(section.body, locale)} />
          <SectionImages images={section.images} />
        </section>
      ))}
    </div>
  );
}
