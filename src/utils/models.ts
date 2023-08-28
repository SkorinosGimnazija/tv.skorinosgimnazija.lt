interface TimetableDto {
  id: number;
  className?: string;
  day: { id: number; name: string; number: number };
  room: { id: number; name: string; number: number };
  time: { id: number; startTime: string; endTime: string; number: number };
}
