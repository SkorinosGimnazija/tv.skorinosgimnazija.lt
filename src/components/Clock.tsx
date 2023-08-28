import { useEffect, useState } from 'react';
import { toLocalDate, toLocalTime } from '../utils/lib';

export default function Clock() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right flex-1">
      <div className="text-4xl text-shadow">+{toLocalTime(time)}</div>
      <div className="first-letter:uppercase text-shadow">{toLocalDate(time)}</div>
    </div>
  );
}
