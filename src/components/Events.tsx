import useSWR from 'swr';
import { minuteToMs, printDateTime } from '../utils/lib';

export default function Events() {
  const { data, error } = useSWR<EventDto[]>(`/events/public/today`, {
    refreshInterval: minuteToMs(60),
  });

  if (error || !data || data.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2 justify-end h-full">
      {data.slice(0, 4).map((x) => {
        return (
          <div
            className="text-3xl bg-white bg-opacity-90 shadow-lg rounded-lg p-2 border-l-8 border-l-green-500"
            key={x.id}
          >
            <p className="line-clamp-2">{x.title}</p>
            <p className="text-2xl first-letter:uppercase">
              {printDateTime(x.startDate ?? x.startDateTime!, x.endDate ?? x.endDateTime!)}
            </p>
          </div>
        );
      })}
    </section>
  );
}
