import styled from "styled-components";
import { fonts, palette } from "styles/util/variables";

import { InputFormStyledProps as Props } from "./InputForm.types";

const InputFormStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  .InputForm {
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
    &__error-message {
      color: ${palette.error};
      font-family: Lato;
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 0.4rem;
    }
  }

  input {
    width: 43.4rem;
    height: 4.4rem;
    border-radius: 2.2rem;
    border: 0.1rem solid ${palette.secondaryGrayColor};
    padding: 0 2.4rem;
    font-size: 14px;
    letter-spacing: 0.05rem;
    line-height: 4.4rem;
    text-transform: uppercase;
    ::placeholder {
      color: ${palette.ligthGrey};
      font-family: Lato;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.05rem;
      line-height: 4rem;
      vertical-align: middle;
      height: 4.4rem;
    }
    :focus {
      border: 0.1rem solid ${palette.primary};
      outline: none;
    }
    :read-only {
      color: ${palette.ligthGrey};
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

export default InputFormStyled;
