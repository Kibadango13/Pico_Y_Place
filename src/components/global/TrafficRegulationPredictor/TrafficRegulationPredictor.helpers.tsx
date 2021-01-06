// BookingFOrm helper functions and data
import { licensePlateControlRules } from "utils/transportation.utils";
import { FormConfig } from "./TrafficRegulationPredictor.types";
import moment from "moment";
import voca from "voca";

export const validateTrafficRegulation = (values: FormConfig) => {
  let selectedDay = "";
  const trafficRegulationRules = licensePlateControlRules();
  selectedDay = moment(values.selectedDate).format("dddd");
  selectedDay = selectedDay.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lastDigit = values.licensePlate.slice(-1); // "c";

  const trafficRegulationRule = trafficRegulationRules.find(
    rule =>
      rule.day === voca.upperCase(selectedDay) &&
      rule.lastDigit.length > 0 &&
      rule.schedule.length > 0 &&
      rule.lastDigit.includes(Number(lastDigit))
  );

  if (!trafficRegulationRule) {
    //Traffic Regulation rule not found or it does not meet rule conditions
    return undefined;
  }

  const { schedule } = trafficRegulationRule;

  const time = moment(values.selectedHour).format("hh:mm A");
  const selectedTime = moment(time, "hh:mm A");

  const timeFrame = schedule.find((timeFrame: any) => {
    const startTime = moment(timeFrame.startTime, "hh:mm A");
    const endTime = moment(timeFrame.endTime, "hh:mm A");
    return selectedTime.isBetween(startTime, endTime, undefined, "[]");
  });

  return timeFrame;
};

export const validateForm = (values: FormConfig) => {
  const { licensePlate, selectedDate, selectedHour } = values;
  const validation = validationFormRules({
    licensePlate,
    selectedDate,
    selectedHour
  });
  return validation;
};

const validationFormRules = (values: FormConfig) => {
  const { licensePlate, selectedDate, selectedHour } = values;
  const passErrors = {
    licensePlateValidation: "",
    selectedDateValidation: "",
    selectedHourValidation: ""
  };

  if (licensePlate.length !== 8) {
    passErrors.licensePlateValidation = "Mínimo 8 caracteres";
  }

  if (licensePlate === "") {
    passErrors.licensePlateValidation = "Este campo es requerido";
  }

  if (selectedDate === "") {
    passErrors.selectedDateValidation = "Este campo es requerido";
  }
  if (selectedHour === "") {
    passErrors.selectedHourValidation = "Este campo es requerido";
  }

  if (
    passErrors.licensePlateValidation !== "" ||
    passErrors.selectedDateValidation !== "" ||
    passErrors.selectedHourValidation !== ""
  ) {
    return passErrors;
  }

  return undefined;
};
