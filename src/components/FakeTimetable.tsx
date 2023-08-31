import { useMemo } from 'react';
import useSWR from 'swr';

export default function FakeTimetable() {
  const { data, error, isLoading, isValidating } = useSWR<TimetableDto[]>(
    `/timetable/public/today`,
    {
      // refreshInterval: 1 * 60 * 1000, // 1min
      refreshInterval: 5000, // 1min,
    }
  );

  const normalized = useMemo(() => {
    if (!data) {
      return null;
    }

    const sampleRooms = [
      '1 klasė',
      '2 klasė',
      '3 klasė',
      '4 klasė',
      '5 klasė',
      '6 klasė',
      '7 klasė',
      '8 klasė',
    ];

    const sampleClass = [
      'Lietuvių kalba',
      'Matematika',
      'Keramika',
      'Baltarusių kalba',
      'Fizinis ugdymas',
      'Dailė ir technologijos',
      'Anglų kalba',
      'Rusų kalba',
      'Dailė',
      'Fizika',
      'Istorija',
      'Chemija',
      'Biologija',
      'Pasaulio pažinimas',
      'Geografija',
      'Etika',
      '',
    ];

    const timeStart = 1;
    const timeEnd = 7;
    const times: number[] = [];
    const classes: { [key: string]: { [key: number]: string | undefined } } = {};

    for (let i = timeStart; i <= timeEnd; i++) {
      times.push(i);
    }

    for (const room of sampleRooms) {
      for (const time of times) {
        classes[room] = {
          ...classes[room],
          [time]: sampleClass[Math.floor(Math.random() * sampleClass.length)],
        };
      }
    }

    return { rooms: sampleRooms, times, data: classes };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data, isValidating]);

  if (error && !normalized) {
    return 'Serverio klaida';
  }

  if (!normalized) {
    return ''; //TODO loading indicator ?;
  }

  return (
    <table className="mb-4 w-full col-span-4 table-fixed text-2xl">
      <thead>
        <tr>
          <th className="w-6"></th>
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
