import useSWR from 'swr';
import { minuteToMs } from '../utils/lib';

export default function Announcement() {
  const { data, error } = useSWR<AnnouncementDto[]>(`/school/public/announcements`, {
    refreshInterval: minuteToMs(5),
  });

  if (error || !data || data.length === 0) {
    return null;
  }

  return (
    <section className="bg-background shadow-lg rounded-xl p-4 relative">
      <span className="absolute bg-orange-500 w-6 h-6 rounded-full top-0 right-0 animate-ping"></span>
      {data.map((x) => {
        return (
          <p className="text-5xl text-center" key={x.id}>
            {x.announcement}
          </p>
        );
      })}
    </section>
  );
}
