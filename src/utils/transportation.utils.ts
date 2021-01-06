// Transportation utils funtions and data
import { Day, LicensePlateControl } from "types/transportation.types";

export const licensePlateControl = () => {
  const control: LicensePlateControl[] = [
    { dia: Day.SUUNDAY, lastDigit: [] },
    { dia: Day.MONDAY, lastDigit: [1, 2] },
    { dia: Day.TUESDAY, lastDigit: [3, 4] },
    { dia: Day.WENSDAY, lastDigit: [5, 6] },
    { dia: Day.THURSDAY, lastDigit: [7, 8] },
    { dia: Day.FRIDAY, lastDigit: [9, 0] },
    { dia: Day.SATURDAY, lastDigit: [] }
  ];
  return control;
};
