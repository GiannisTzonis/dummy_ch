import type { ScheduleDay } from "~/content/types";
import { useLocale } from "~/lib/locale";

export function ScheduleList({ days }: { days: ScheduleDay[] }) {
  const locale = useLocale();
  if (days.length === 0) return null;

  return (
    <div className="space-y-8">
      {days.map((day) => (
        <div key={day.day.en}>
          <h4 className="mb-3 type-h4 text-ink">{day.day[locale]}</h4>
          <ol className="space-y-2">
            {day.events.map((event, i) => (
              <li key={i} className="flex gap-4 type-small">
                <span className="w-32 flex-shrink-0 font-medium text-brand-navy">
                  {event.time}
                </span>
                <span className="text-body">{event.description[locale]}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
