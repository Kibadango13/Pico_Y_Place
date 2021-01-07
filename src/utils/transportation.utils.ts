// Transportation utils funtions and data
import { Day, TrafficRestrictionRules } from "types/transportation.types";

export const getTrafficRestrictionRules = () => {
  const control: TrafficRestrictionRules[] = [
    {
      day: Day.DOMINGO,
      lastDigit: [],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.LUNES,
      lastDigit: [1, 2],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.MARTES,
      lastDigit: [3, 4],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.MIERCOLES,
      lastDigit: [5, 6],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.JUEVES,
      lastDigit: [7, 8],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.VIERNES,
      lastDigit: [9, 0],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    },
    {
      day: Day.SABADO,
      lastDigit: [],
      schedule: [
        { startTime: "7:00", endTime: "9:30" },
        { startTime: "16:00", endTime: "19:30" }
      ]
    }
  ];
  return control;
};
