import React from "react";

import Styles from "./InputDatePicker.styles";
import { InputDatePickerProps as Props } from "./InputDatePicker.types";

const InputDatePicker: React.FC<Props> = props => {
  return <Styles className="InputDatePicker">InputDatePicker</Styles>;
};

InputDatePicker.defaultProps = {};

export default InputDatePicker;
