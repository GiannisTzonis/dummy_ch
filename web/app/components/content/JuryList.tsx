import type { JuryMember } from "~/content/types";
import { useLocale } from "~/lib/locale";
import { RichText } from "./RichText";
import { sized } from "~/lib/img";

export function JuryList({ title, members }: { title: string; members: JuryMember[] }) {
  const locale = useLocale();
  if (members.length === 0) return null;

  return (
    <section className="space-y-10">
      <h2 className="type-h2 text-ink">{title}</h2>
      {members.map((member, i) => (
        <div
          key={member.name}
          className={`flex flex-col gap-6 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          {member.photo && (
            <img
              src={sized(member.photo, 400)}
              alt={member.name}
              className="h-48 w-48 flex-shrink-0 rounded-lg object-cover"
            />
          )}
          <div>
            <h3 className="mb-2 type-h4 text-ink">{member.name}</h3>
            {member.bio && <RichText paragraphs={member.bio[locale]} />}
            {member.profileLink && (
              <a
                href={member.profileLink}
                className="mt-2 inline-block type-small font-medium text-brand-navy hover:text-brand-maroon"
              >
                {member.profileLink}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
