import useSWR from 'swr';
import { minuteToMs } from '../utils/lib';

export default function Announcement() {
  const { data } = useSWR<AnnouncementDto[]>(`/school/public/announcements`, {
    refreshInterval: minuteToMs(3),
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="bg-background shadow-lg rounded-xl p-4 relative border-y-8 border-y-orange-300">
      {data.map((x) => {
        return (
          <p className="text-5xl text-center" key={x.id}>
            {x.title}
          </p>
        );
      })}
    </section>
  );
}
