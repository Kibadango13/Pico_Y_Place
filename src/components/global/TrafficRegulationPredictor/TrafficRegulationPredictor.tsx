import React, { useEffect, useState } from "react";
import { message } from "antd";

//Components
import Button from "../Button/Button";
import InputDatePicker from "components/form/InputDatePicker/InputDatePicker";
import InputForm from "components/form/InputForm/InputForm";
import InputTimePicker from "components/form/InputTimePicker/InputTimePicker";
//Styles, helpers
import Styles from "./TrafficRegulationPredictor.styles";
import { TrafficRegulationPredictorProps as Props } from "./TrafficRegulationPredictor.types";
import { validateForm } from "./TrafficRegulationPredictor.helpers";

const TrafficRegulationPredictor: React.FC<Props> = props => {
  const InitErrorValues = {
    licensePlateValidation: "",
    selectedDateValidation: "",
    selectedHourValidation: ""
  };

  const [licensePlate, setLicensePlate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [errors, setErrors] = useState(InitErrorValues);

  const handleOnSubmit = () => {
    const validation = validateForm({
      licensePlate,
      selectedDate,
      selectedHour
    });
    if (validation) {
      //Validation error
      message.error("Validación de los campos");
      return undefined;
    }
  };

  const resetVariables = () => {
    setErrors(InitErrorValues);
    setLicensePlate("");
    setSelectedDate("");
    setSelectedHour("");
  };

  useEffect(() => {
    // Clean up function
    return () => {
      resetVariables();
    };
  }, []);

  return (
    <Styles className="TrafficRegulationPredictor">
      <InputForm
        labelText="License plate number"
        value={licensePlate}
        name="licensePlate"
        className="PlansModal__input"
        onChange={(event: any) => setLicensePlate(event.target.value)}
        placeholder="Número de identificación del titular"
        error={
          errors.licensePlateValidation !== ""
            ? errors.licensePlateValidation
            : ""
        }
        mask="****-****"
      />
      <InputDatePicker
        labelText="Date"
        error={
          errors.selectedDateValidation !== ""
            ? errors.selectedDateValidation
            : ""
        }
        value={selectedDate}
        onChange={(event: any) => setSelectedDate(event.target.value)}
      />
      <InputTimePicker
        labelText="Hora"
        value={selectedHour}
        error={
          errors.selectedHourValidation !== ""
            ? errors.selectedHourValidation
            : ""
        }
        onChange={(event: any) => setSelectedHour(event.target.value)}
      />
      <Button
        onClick={() => handleOnSubmit()}
        className="Home__appointment-button primary-gradient"
        text="Submit"
        textAlign="text-center"
      />
    </Styles>
  );
};

TrafficRegulationPredictor.defaultProps = {};

export default TrafficRegulationPredictor;
