import { useEffect, useState } from 'react';

const ltDateFormat = new Intl.DateTimeFormat('lt', {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'Europe/Vilnius',
});

const ltTimeFormat = new Intl.DateTimeFormat('lt', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'Europe/Vilnius',
});

const toLocalDate = (date: number) => {
  return ltDateFormat.format(date);
};

const toLocalTime = (date: number) => {
  return ltTimeFormat.format(date);
};

export default function Clock() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right flex-1">
      <div className="text-4xl text-shadow">{toLocalTime(time)}</div>
      <div className="first-letter:uppercase text-shadow">{toLocalDate(time)}</div>
    </div>
  );
}
