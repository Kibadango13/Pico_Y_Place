// Transportation types and interfaces

export interface LicensePlateControl {
  dia: Day;
  lastDigit: number[];
}

export enum Day {
  SUUNDAY = "SUUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WENSDAY = "WENSDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}
