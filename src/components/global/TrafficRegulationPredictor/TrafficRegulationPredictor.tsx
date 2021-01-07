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
import { validateTrafficRegulation } from "./TrafficRegulationPredictor.helpers";

const initErrorValues = {
  licensePlateValidation: "",
  selectedDateValidation: "",
  selectedHourValidation: ""
};
const TrafficRegulationPredictor: React.FC<Props> = props => {
  const [licensePlate, setLicensePlate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [errors, setErrors] = useState(initErrorValues);

  const licensePlateValidation =
    errors.licensePlateValidation !== "" ? errors.licensePlateValidation : "";
  const selectedDateValidation =
    errors.selectedDateValidation !== "" ? errors.selectedDateValidation : "";
  const selectedHourValidation =
    errors.selectedHourValidation !== "" ? errors.selectedHourValidation : "";

  const handleOnSubmit = () => {
    const validation = validateForm({
      licensePlate,
      selectedDate,
      selectedHour
    });
    if (validation) {
      //Error Validation
      setErrors(validation);
      message.error("Validación de los campos");
      return undefined;
    }

    const restriction = validateTrafficRegulation({
      licensePlate,
      selectedDate,
      selectedHour
    });

    if (!restriction) {
      //Vehiculo has no restrictions
      message.info("No hay restricciónes para su vehiculo");
      setErrors(initErrorValues);
      return undefined;
    }
    //Vehiculo has restrictions
    message.error("Existen restricciónes para su vehiculo");
    return undefined;
  };

  const resetVariables = () => {
    setErrors(initErrorValues);
    setLicensePlate("");
    setSelectedDate("");
    setSelectedHour("");
  };

  useEffect(() => {
    // Clean up function
    return resetVariables;
  }, []);

  return (
    <Styles className="TrafficRegulationPredictor">
      <InputForm
        labelText="Placa"
        value={licensePlate}
        name="licensePlate"
        className="PlansModal__input"
        onChange={(event: any) => setLicensePlate(event.target.value)}
        placeholder="Número de identificación del titular"
        error={licensePlateValidation}
        mask="aaaa-9999"
      />
      <InputDatePicker
        labelText="Fecha"
        error={selectedDateValidation}
        value={selectedDate}
        onChange={(event: any) => setSelectedDate(event)}
      />
      <InputTimePicker
        labelText="Hora"
        placeholder="Seleccionar hora"
        value={selectedHour}
        error={selectedHourValidation}
        onChange={(event: any) => setSelectedHour(event)}
      />
      <Button
        onClick={() => handleOnSubmit()}
        className="Home__appointment-button lg primary-gradient"
        text="Validar"
        textAlign="text-center"
        testID="continueButton"
      />
    </Styles>
  );
};

TrafficRegulationPredictor.defaultProps = {};

export default TrafficRegulationPredictor;
