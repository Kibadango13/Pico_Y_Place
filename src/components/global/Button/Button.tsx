import React from "react";

import Styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = props => {
  const { className, text, textAlign } = props;
  const { onClick, icon, iconPosition } = props;
  const { loading, loader, testID } = props;

  return (
    <Styles
      className={`Button ${className} ${textAlign}`}
      onClick={onClick}
      loader={loader}
      id={testID}
    >
      {text}
      {icon && !loading && (
        <span className={`icon-${iconPosition}`}>{icon}</span>
      )}
      {loading && (
        <div className="loading-container">
          <div className="lds-dual-ring" />
        </div>
      )}
    </Styles>
  );
};

Button.defaultProps = {
  className: "default",
  textAlign: "center",
  google: false,
  loading: false
};

export default Button;
