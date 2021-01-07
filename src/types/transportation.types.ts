// Transportation types and interfaces
export interface TrafficRestrictionRules {
  day: Day;
  lastDigit: number[];
  schedule: Schedule[];
}

export enum Day {
  DOMINGO = "DOMINGO",
  LUNES = "LUNES",
  MARTES = "MARTES",
  MIERCOLES = "MIERCOLES",
  JUEVES = "JUEVES",
  VIERNES = "VIERNES",
  SABADO = "SABADO"
}

export interface Schedule {
  startTime: string;
  endTime: string;
}
