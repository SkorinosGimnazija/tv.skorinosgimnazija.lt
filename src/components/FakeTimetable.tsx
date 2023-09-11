import { useMemo } from 'react';
import useSWR from 'swr';

const sampleClass2 = [
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
  '-',
];

export default function FakeTimetable() {
  const { data, error, isLoading, isValidating } = useSWR<TimetableDto[]>(
    `/timetable/public/today`,
    {
      // refreshInterval: 1 * 60 * 1000, // 1min
      refreshInterval: 335000, // 1min,
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
      '5a klasė',
      '5b klasė',
      '6a klasė',
      '6b klasė',
      '7a klasė',
      '7b klasė',
      '8a klasė',
      '8b klasė',
      'Ig klasė',
      'IIg klasė',
      'IIIg klasė',
      'IVg klasė',
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
      '-',
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
    <div className="grid grid-cols-2 gap-3 text-4xl text-center">
      <p className="bg-background shadow-lg rounded-lg col-span-2 font-extrabold p-2 border-b-4 border-b-yellow-300">
        5 Pamoka 10:00 - 10:45
      </p>
      {normalized.rooms.map((x) => {
        return (
          <div className="bg-background shadow-lg rounded-lg p-1" key={x}>
            <p className="font-bold">{x}</p>
            <p>{sampleClass2[Math.floor(Math.random() * sampleClass2.length)]}</p>
          </div>
        );
      })}
    </div>
  );
}
