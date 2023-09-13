interface TimetableDto {
  timetable: { id: number; className: string; classRoom: string }[];
  classtime: { number: number; startTime: string; endTime: string };
}

interface AnnouncementDto {
  id: number;
  title: string;
}

interface EventDto {
  id: number;
  title: string;
  startDate?: string;
  endDate?: string;
  startDateTime?: string;
  endDateTime?: string;
}

interface RandomImageDto {
  url: string;
}
