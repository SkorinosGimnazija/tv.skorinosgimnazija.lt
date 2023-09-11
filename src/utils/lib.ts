const ltDateFormat = new Intl.DateTimeFormat('lt', {
  month: 'long',
  day: 'numeric',
  timeZone: 'Europe/Vilnius',
});

const ltTimeFormat = new Intl.DateTimeFormat('lt', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Vilnius',
});

export const toLocalDate = (date: Date) => {
  return ltDateFormat.format(date);
};

export const toLocalTime = (date: Date) => {
  return ltTimeFormat.format(date);
};

export const minuteToMs = (min: number) => {
  return min * 60 * 1000;
};

export const printDateTime = (startDate: string, endDate: string) => {
  // return 'rugsjo 10 - rugsejo 15';
  if (startDate === endDate) {
    return toLocalDate(new Date(startDate));
  }

  return 'a';
};
