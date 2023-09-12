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

      if (element.clientWidth < element.scrollWidth) {
        element.classList.add('animate-text-overflow');
      }
    }

    refs.current = [];
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <section className="text-5xl relative">
      <p className="bg-background text-center shadow-lg rounded-lg font-extrabold p-2 border-b-4 border-b-yellow-300 mb-2">
        {data.classtime.number} Pamoka {data.classtime.startTime} - {data.classtime.endTime}
      </p>
      {data.timetable.map((x) => {
        return (
          <div
            key={x.id}
            className="bg-background shadow-lg mb-2 rounded-lg px-3 py-[0.15rem] text-[2.75rem] whitespace-nowrap flex gap-2"
          >
            <span className="font-bold">
              {x.classRoom}
              {':  '}
            </span>
            <div className="overflow-hidden">
              <p ref={(e) => refs.current.push(e)}>{x.className}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
