import React from "react";
import { TimePicker } from "antd";

import Styles from "./InputTimePicker.styles";
import { InputTimePickerProps as Props } from "./InputTimePicker.types";

const InputTimePicker: React.FC<Props> = props => {
  const { labelText, onChange } = props;
  const format = "hh:mm A";

  return (
    <Styles className="InputTimePicker">
      <div className="InputTimePicker__text">{labelText}</div>
      <TimePicker
        onChange={(value: any) => onChange(value)}
        className="InputTimePicker__picker"
        format={format}
        minuteStep={60}
        secondStep={60}
        use12Hours
      />
    </Styles>
  );
};

InputTimePicker.defaultProps = {};

export default InputTimePicker;
