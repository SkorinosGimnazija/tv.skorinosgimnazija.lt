import useSWR from 'swr';

export default function Timetable() {
  const { data, error } = useSWR<TimetableDto>(`/timetable/public/today`, {
    refreshInterval: 1 * 60 * 1000, // 1min
  });

  if (error || !data) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-3 text-4xl text-center">
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
    </div>
  );
}
