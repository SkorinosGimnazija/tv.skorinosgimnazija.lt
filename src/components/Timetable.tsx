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
    <section className="grid grid-cols-2 gap-3 text-4xl text-center">
      <p className="bg-background shadow-lg rounded-lg col-span-2 font-extrabold p-2 border-b-4 border-b-yellow-300">
        {data.classtime.number} Pamoka {data.classtime.startTime} - {data.classtime.endTime}
      </p>
      {data.timetable.map((x) => {
        return (
          <div key={x.id} className="bg-background shadow-lg rounded-lg p-1">
            <p className="font-bold">{x.classRoom}</p>
            <p>{x.className}</p>
          </div>
        );
      })}
    </section>
  );
}
