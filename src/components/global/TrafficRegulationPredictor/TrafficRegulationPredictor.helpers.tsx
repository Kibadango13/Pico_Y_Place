// BookingFOrm helper functions and data
import { getTrafficRestrictionRules } from "utils/transportation.utils";
import { FormConfig } from "./TrafficRegulationPredictor.types";
import moment from "moment";
import voca from "voca";

export const validateTrafficRegulation = (values: FormConfig) => {
  const trafficRegulationRules = getTrafficRestrictionRules();
  //Removes special charecters from days in spanish
  const selectedDayText = moment(values.selectedDate)
    .format("dddd")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const lastDigit = values.licensePlate.slice(-1);
  const trafficRegulationRule = trafficRegulationRules.find(
    rule =>
      rule.day === voca.upperCase(selectedDayText) &&
      rule.lastDigit.length > 0 &&
      rule.schedule.length > 0 &&
      rule.lastDigit.includes(Number(lastDigit))
  );

  if (!trafficRegulationRule) {
    //No traffic restriction apply
    return undefined;
  }

  const { schedule } = trafficRegulationRule;

  const time = moment(values.selectedHour).format("hh:mm A");
  const selectedTime = moment(time, "hh:mm A");

  const hasRestriction = schedule.find(timeFrame => {
    const startTime = moment(timeFrame.startTime, "hh:mm A");
    const endTime = moment(timeFrame.endTime, "hh:mm A");
    return selectedTime.isBetween(startTime, endTime, undefined, "[]");
  });

  return hasRestriction;
};

export const validateForm = (values: FormConfig) => {
  const { licensePlate, selectedDate, selectedHour } = values;
  const passErrors = {
    licensePlateValidation: "",
    selectedDateValidation: "",
    selectedHourValidation: ""
  };

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
