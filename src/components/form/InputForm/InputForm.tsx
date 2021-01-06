import React from "react";
import InputMask from "react-input-mask";

import Styles from "./InputForm.styles";
import { InputFormProps as Props } from "./InputForm.types";

const InputForm: React.FC<Props> = props => {
  const { labelText, mask } = props;
  return (
    <Styles className="InputForm">
      <div className="form-control__wrapper">
        <div className="InputForm__text">{labelText}</div>
        <InputMask
          autoComplete="off"
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          mask={mask}
          className={`form-control${
            props.error ? " form-control--error" : ""
          } ${props.className ? props.className : ""}`}
          readOnly={!!props.readonly}
        />
      </div>
      {props.error && <div className="error-message">{props.error}</div>}
    </Styles>
  );
};

InputForm.defaultProps = {};

export default InputForm;
