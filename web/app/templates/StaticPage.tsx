import type { StaticPageContent } from "~/content/types";
import { useLocale } from "~/lib/locale";
import { PageHero } from "~/components/content/PageHero";
import { ContentSections } from "~/components/content/ContentSections";

export function StaticPage({ page }: { page: StaticPageContent }) {
  const locale = useLocale();

  return (
    <div>
      <PageHero
        title={page.hideTitle ? undefined : page.title[locale]}
        subtitle={page.subtitle?.[locale]}
        image={page.hero}
      />

      <div className="mx-auto max-w-[1140px] space-y-16 px-[15px] py-[50px]">
        <ContentSections sections={page.sections} />

        {page.milestones && page.milestones.length > 0 && (
          <ol className="space-y-6 border-l-2 border-surface-muted pl-6">
            {page.milestones.map((m, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[29px] flex h-3 w-3 rounded-full bg-brand-maroon" />
                <span className="type-small font-semibold text-brand-navy">{m.year}</span>
                <p className="text-body">{m.description[locale]}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
