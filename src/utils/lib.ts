const ltDateFormat = new Intl.DateTimeFormat('lt', {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'Europe/Vilnius',
});

const ltTimeFormat = new Intl.DateTimeFormat('lt', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Vilnius',
});

export const toLocalDate = (date: number) => {
  return ltDateFormat.format(date);
};

export const toLocalTime = (date: number) => {
  return ltTimeFormat.format(date);
};
