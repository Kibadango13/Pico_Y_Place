import React from "react";

import Styles from "./ContentWrapper.styles";
import { ContentWrapperProps as Props } from "./ContentWrapper.types";

const ContentWrapper: React.FC<Props> = props => {
  const { children } = props;
  return (
    <Styles className="ContentWrapper">
      <div className="ContentWrapper__container">{children}</div>
    </Styles>
  );
};

ContentWrapper.defaultProps = {};

export default ContentWrapper;
