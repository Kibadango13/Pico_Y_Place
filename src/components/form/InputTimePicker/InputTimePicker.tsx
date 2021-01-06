import React from "react";
import { TimePicker } from "antd";

import Styles from "./InputTimePicker.styles";
import { InputTimePickerProps as Props } from "./InputTimePicker.types";

const InputTimePicker: React.FC<Props> = props => {
  const { labelText, onChange, placeholder } = props;
  const format = "HH:mm";

  return (
    <Styles className="InputTimePicker">
      <div className="InputTimePicker__text">{labelText}</div>
      <TimePicker
        onChange={(value: any) => onChange(value)}
        className="InputTimePicker__picker"
        format={format}
        secondStep={60}
        placeholder={placeholder}
      />
      {props.error && (
        <div className="InputTimePicker__error-message">{props.error}</div>
      )}
    </Styles>
  );
};

InputTimePicker.defaultProps = {};

export default InputTimePicker;
