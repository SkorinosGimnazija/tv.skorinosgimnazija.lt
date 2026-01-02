export interface TimetableDto {
  roomClasses: { roomId: number; roomName: string; className: string }[]
  currentClass: { id: number; startTime: string; endTime: string }
}

export interface EventDto {
  id: string
  title: string
  startDate: string
  endDate: string
  allDay: boolean
}

export interface RandomImageDto {
  url: string
}