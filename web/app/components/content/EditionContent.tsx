import type { RelatedLinks as RelatedLinksData, RichBlock } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";
import { RichText } from "./RichText";
import { RelatedLinks } from "./RelatedLinks";

// Layout for an edition page whose body is the verbatim legacy content:
// main column on the left, the legacy sidebar on the right.
export function EditionContent({
  title,
  content,
  aside,
  related,
}: {
  title: string;
  content: { en: RichBlock[]; el: RichBlock[] };
  aside?: { en: RichBlock[]; el: RichBlock[] };
  related?: RelatedLinksData[];
}) {
  const locale = useLocale();
  const hasSide = (aside && tr(aside, locale).length > 0) || (related && related.length > 0);
  // Legacy pages put only the top of the page beside the sidebar; the rest
  // (jury, choirs, results, gallery...) runs full width below it.
  const blocks = tr(content, locale);
  const split = blocks.findIndex((b) => typeof b !== "string" && "wide" in b);
  const top = split < 0 ? blocks : blocks.slice(0, split);
  const wide = split < 0 ? [] : blocks.slice(split + 1);

  return (
    <>
    <div
      className={`mx-auto grid max-w-[1140px] grid-cols-1 gap-[30px] px-[15px] py-[50px] ${hasSide ? "lg:grid-cols-[2fr_1fr]" : ""}`}
    >
      <div className="min-w-0">
        <h1 className="type-h1 mb-8">{title}</h1>
        <RichText paragraphs={top} />
      </div>
      {hasSide && (
        // The legacy sidebar's widgets are plain bordered boxes.
        <aside className="space-y-[30px]">
          {aside && tr(aside, locale).length > 0 && (
            <div className="border border-[#eee] p-[30px]">
              <RichText paragraphs={tr(aside, locale)} />
            </div>
          )}
          {related && (
            <div className="border border-[#eee] p-[30px]">
              <RelatedLinks blocks={related} vertical />
            </div>
          )}
        </aside>
      )}
    </div>
    {wide.length > 0 && (
      <div className="mx-auto max-w-[1140px] px-[15px] pb-[50px]">
        <RichText paragraphs={wide} />
      </div>
    )}
    </>
  );
}
