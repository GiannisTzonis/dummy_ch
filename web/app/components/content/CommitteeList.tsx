import type { CommitteeMember } from "~/content/types";
import { useLocale, tr } from "~/lib/locale";

export function CommitteeList({
  title,
  members,
}: {
  title: string;
  members: CommitteeMember[];
}) {
  const locale = useLocale();
  if (members.length === 0) return null;

  return (
    <aside className="rounded-lg bg-surface p-6">
      <h3 className="mb-4 type-h4 text-ink">{title}</h3>
      <ul className="space-y-3">
        {members.map((m) => (
          <li key={m.name} className="type-small">
            <div className="font-medium text-ink">{m.name}</div>
            <div className="text-body">{tr(m.role, locale)}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
