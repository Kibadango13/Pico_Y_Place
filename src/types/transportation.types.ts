// Transportation types and interfaces
export interface LicensePlateControl {
  day: Day;
  lastDigit: number[];
  schedule: any;
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
