import styled from "styled-components";
import { fonts, palette } from "styles/util/variables";

import { InputTimePickerStyledProps as Props } from "./InputTimePicker.types";

const InputTimePickerStyled = styled.div<Props>`
  margin: 2rem 0rem;
  .InputTimePicker {
    &__text {
      padding: 0.2rem 1.5rem;
      background-color: "red";
      min-width: 8rem;
      border-radius: 2rem;
      color: "white";
      font-family: ${props => fonts.primary};
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
    }
    &__picker {
      width: 43.4rem;
      height: 4.8rem;
      border-radius: 2.8rem;
      padding: 0 2.4rem;
      :focus {
        outline: none;
      }
      @media (max-width: 450px) {
        width: 100%;
      }
    }
    &__error-message {
      color: ${palette.error};
      font-family: Lato;
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 0.4rem;
    }
  }
`;

export default InputTimePickerStyled;
