import React from "react";
import { ConfigProvider, DatePicker } from "antd";

import Styles from "./InputDatePicker.styles";
import { InputDatePickerProps as Props } from "./InputDatePicker.types";

import locale from "antd/lib/locale/es_ES";

const InputDatePicker: React.FC<Props> = props => {
  const { labelText, error, onChange } = props;

  return (
    <Styles className="InputDatePicker">
      <div className="form-control__wrapper">
        <div className="InputDatePicker__text">{labelText}</div>
        <ConfigProvider locale={locale}>
          <DatePicker
            format="DD/MM/YYYY"
            onChange={(value: any) => onChange(value)}
            className="InputDatePicker__picker"
          />
        </ConfigProvider>
      </div>
      {error && <div className="InputDatePicker__error-message">{error}</div>}
    </Styles>
  );
};

InputDatePicker.defaultProps = {};

export default InputDatePicker;
