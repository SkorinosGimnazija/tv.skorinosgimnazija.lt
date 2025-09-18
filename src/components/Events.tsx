import useSWR from 'swr';
import { minuteToMs, formatDateTime } from '../utils/lib';

const MAX_EVENTS_TO_SHOW = 4;

export default function Events() {
  const { data } = useSWR<EventDto[]>(`/events/public/today`, {
    refreshInterval: minuteToMs(60),
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2 justify-end h-full relative">
      {data.slice(0, MAX_EVENTS_TO_SHOW).map((x) => {
        return (
          <div
            className="text-2xl bg-background shadow-lg rounded-lg p-2 border-l-8 border-l-green-500"
            key={x.id}
          >
            <p className="line-clamp-2">{x.title}</p>
            <p className="text-xl">{formatDateTime(x.startDate, x.startDateTime, x.endDate)}</p>
          </div>
        );
      })}
    </section>
  );
}
