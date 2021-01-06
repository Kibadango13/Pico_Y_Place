// BookingFOrm helper functions and data
import { FormConfig } from "./TrafficRegulationPredictor.types";

export const validateForm = (values: FormConfig) => {
  const { licensePlate, selectedDate, selectedHour } = values;
  const validation = validationRules({
    licensePlate,
    selectedDate,
    selectedHour
  });
  return validation;
};

const validationRules = (values: FormConfig) => {
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
