import React from "react";
import InputMask from "react-input-mask";

import Styles from "./InputForm.styles";
import { InputFormProps as Props } from "./InputForm.types";

const InputForm: React.FC<Props> = props => {
  const { labelText, mask, type } = props;
  const { name, value, onChange, error } = props;
  const { disabled, className, readonly } = props;

  return (
    <Styles className="InputForm">
      <div className="form-control__wrapper">
        <div className="InputForm__text">{labelText}</div>
        <InputMask
          autoComplete="off"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          mask={mask}
          className={`form-control${error ? " form-control--error" : ""} ${
            className ? className : ""
          }`}
          readOnly={!!readonly}
        />
      </div>
      {error && <div className="InputForm__error-message ">{error}</div>}
    </Styles>
  );
};

InputForm.defaultProps = {};

export default InputForm;
