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

export const toLocalDate = (date: string) => {
  const formatted = ltDateFormat.format(new Date(date));
  return formatted[0].toUpperCase() + formatted.slice(1);
};

export const toLocalTime = (date: string) => {
  return ltTimeFormat.format(new Date(date));
};

export const formatDateTime = (startDate?: string, startDateTime?: string, endDate?: string) => {
  if (startDate != null && endDate != null) {
    if (startDate === endDate) {
      return toLocalDate(startDate);
    }

    return toLocalDate(startDate) + ' - ' + toLocalDate(endDate);
  }

  return toLocalTime(startDateTime!);
};

export const minuteToMs = (min: number) => {
  return min * 60 * 1000;
};
