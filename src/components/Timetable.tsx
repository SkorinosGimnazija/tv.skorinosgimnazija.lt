import { useMemo } from 'react';
import useSWR from 'swr';

export default function Timetable() {
  const { data, error } = useSWR<TimetableDto[]>(`/timetable/public/today`, {
    refreshInterval: 1 * 60 * 1000, // 1min
  });

  const normalized = useMemo(() => {
    if (!data) {
      return null;
    }

    const rooms = [...new Set(data.map((x) => x.room.name))];
    const timeStart = Math.min(...data.map((x) => x.time.number));
    const timeEnd = Math.max(...data.map((x) => x.time.number));
    const times: number[] = [];
    const classes: { [key: string]: { [key: number]: string | undefined } } = {};

    for (const classData of data) {
      classes[classData.room.name] = {
        ...classes[classData.room.name],
        [classData.time.number]: classData.className,
      };
    }

    for (let i = timeStart; i <= timeEnd; i++) {
      times.push(i);
    }

    return { rooms, times, data: classes };
  }, [data]);

  if (error && !normalized) {
    return 'Serverio klaida';
  }

  if (!normalized) {
    return ''; //TODO loading indicator ?;
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {normalized.rooms.map((room) => {
            return <th key={room}>{room}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {normalized.times.map((time) => {
          return (
            <tr key={time}>
              <td>{time}.</td>
              {normalized.rooms.map((room) => {
                return <td key={room}>{normalized.data[room]?.[time]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
