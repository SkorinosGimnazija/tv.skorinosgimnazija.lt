interface TimetableDto {
  timetable: { id: number; className: string; classRoom: string }[];
  classtime: { number: number; startTime: string; endTime: string };
}
