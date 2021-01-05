import styled from "styled-components";
import { palette } from "styles/util/variables";

import { InputFormStyledProps as Props } from "./InputForm.types";

const InputFormStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;

  input {
    width: 43.4rem;
    height: 4.4rem;
    border-radius: 2.2rem;
    border: 0.1rem solid ${palette.secondaryGrayColor};
    padding: 0 2.4rem;
    font-size: 1.7rem;
    letter-spacing: 0.05rem;
    line-height: 4.4rem;
    ::placeholder {
      color: ${palette.ligthGrey};
      font-family: Lato;
      font-size: 1.7rem;
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

  .error-message {
    color: ${palette.error};
    font-family: Lato;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 0.4rem;
  }
`;

export default InputFormStyled;
