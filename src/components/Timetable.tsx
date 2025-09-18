import { useEffect, useRef } from 'react';
import useSWR from 'swr';
import { minuteToMs } from '../utils/lib';

export default function Timetable() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const { data } = useSWR<TimetableDto>(`/timetable/public/today`, {
    refreshInterval: minuteToMs(1),
  });

  useEffect(() => {
    for (const element of refs.current) {
      if (element == null) {
        continue;
      }

      if (element.clientWidth > element.parentElement!.clientWidth) {
        element.classList.add('animate-text-overflow');
      }
    }

    refs.current = [];
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <section className="relative">
      <p className="bg-background text-4xl text-center shadow-lg rounded-lg font-bold p-1 mb-2">
        {data.classtime.number} Pamoka {data.classtime.startTime} - {data.classtime.endTime}
      </p>
      {data.timetable.map((x) => {
        return (
          <div
            key={x.id}
            className="bg-background shadow-lg mb-[0.15rem] p-0 rounded-lg px-3 text-2xl whitespace-nowrap flex gap-2"
          >
            <span className="font-bold">{x.classRoom}</span>
            <div className="overflow-hidden">
              <span className="inline-block" ref={(e) => refs.current.push(e)}>
                {x.className}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
