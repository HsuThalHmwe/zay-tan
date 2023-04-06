export interface Slot {
  time: number;
  totoalSlot: number;
  bookedSlot: number;
  availableSlot: number;
}
export interface Availability {
  date: string;
  month: number;
  slots: Slot[];
}

export const availability: Availability[] = [
  {
    date: "06-04-2023",
    month: 3,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "07-04-2023",
    month: 3,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "08-04-2023",
    month: 3,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "01-05-2023",
    month: 4,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
];
