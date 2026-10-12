import type { SponsorTier } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";
import { sized } from "~/lib/img";

export function SponsorTiers({ tiers }: { tiers: SponsorTier[] }) {
  const locale = useLocale();
  if (tiers.length === 0) return null;

  return (
    <section className="space-y-8">
      {tiers.map((tier) => (
        <div key={tier.tier.en}>
          <h4 className="mb-4 type-label text-muted">
            {tr(tier.tier, locale)}
          </h4>
          <div className="flex flex-wrap items-center gap-8">
            {tier.sponsors.map((sponsor) => {
              const logo = (
                <img
                  src={sized(sponsor.logo, 400)}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain grayscale transition hover:grayscale-0"
                />
              );
              return sponsor.link ? (
                <a key={sponsor.name} href={sponsor.link} title={sponsor.name}>
                  {logo}
                </a>
              ) : (
                <div key={sponsor.name} title={sponsor.name}>
                  {logo}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
