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
    <section className="grid grid-cols-2 gap-2 text-5xl text-center">
      <p className="bg-background shadow-lg rounded-lg col-span-2 font-extrabold p-2 border-b-4 border-b-yellow-300 backdrop-blur-sm">
        {data.classtime.number} Pamoka {data.classtime.startTime} - {data.classtime.endTime}
      </p>
      {data.timetable.map((x) => {
        return (
          <div
            key={x.id}
            className="bg-background shadow-lg rounded-lg p-[0.15rem] col-span-2 text-[2.75rem] backdrop-blur-sm"
          >
            <p>
              <span className="font-bold">{x.classRoom}</span>
              {': '}
              {x.className}
            </p>
          </div>
        );
      })}
    </section>
  );
}
