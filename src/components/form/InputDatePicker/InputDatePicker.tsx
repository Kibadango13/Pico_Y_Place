import React from "react";
import { DatePicker } from "antd";

import Styles from "./InputDatePicker.styles";
import { InputDatePickerProps as Props } from "./InputDatePicker.types";

const InputDatePicker: React.FC<Props> = props => {
  const { labelText, error } = props;

  return (
    <Styles className="InputDatePicker">
      <div className="form-control__wrapper">
        <div className="InputDatePicker__text">{labelText}</div>
        <DatePicker
          format="DD/MM/YYYY"
          onChange={() => {}}
          className="InputDatePicker__picker"
        />
      </div>
      {error && <div className="error-message">{error}</div>}
    </Styles>
  );
};

InputDatePicker.defaultProps = {};

export default InputDatePicker;
