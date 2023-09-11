import useSWR from 'swr';
import { minuteToMs } from '../utils/lib';

export default function Timetable() {
  const { data, error } = useSWR<TimetableDto>(`/timetable/public/today`, {
    refreshInterval: minuteToMs(1),
  });

  if (error || !data) {
    return null;
  }

  return (
    <section className="text-5xl text-center relative">
      <p className="bg-background shadow-lg rounded-lg font-extrabold p-2 border-b-4 border-b-yellow-300 mb-2">
        {data.classtime.number} Pamoka {data.classtime.startTime} - {data.classtime.endTime}
      </p>
      {data.timetable.map((x) => {
        return (
          <p
            key={x.id}
            className="bg-background shadow-lg my-2 rounded-lg p-[0.15rem] text-[2.75rem] text-ellipsis overflow-hidden whitespace-nowrap"
          >
            <span className="font-bold">{x.classRoom}</span>
            {': '}
            {x.className}
          </p>
        );
      })}
    </section>
  );
}
