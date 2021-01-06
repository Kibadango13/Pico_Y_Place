import styled from "styled-components";
import { palette } from "../../../styles/util/variables";
import { ButtonStyledProps as Props } from "./Button.types";

const getLoaderColor = (props: any) => {
  return props.loader === "dark" ? palette.primary : palette.loader;
};

const ButtonStyled = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  border-radius: 2.8rem;
  border: none;
  padding: 0 2.4rem;
  position: relative;
  cursor: pointer;
  margin: 4rem 0rem;
  :focus {
    outline: none;
  }
  &.primary {
    background-color: ${props => palette.primary};
    color: ${props => palette.mainBackGroudColor};
  }
  &.secondary {
    background-color: ${props => palette.mainBackGroudColor};
    border: 0.1rem solid ${props => palette.secondaryGrayColor};
    color: ${props => palette.primary};
    &.active-primary {
      background-color: ${props => palette.primary};
      color: ${props => palette.mainBackGroudColor};
    }
    &.top-0 {
      margin-top: 0;
    }
  }

  &.lg {
    width: 31.1rem;
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    line-height: 1.6rem;
    &.strong {
      letter-spacing: 0.125rem;
      font-weight: 900;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
    &.top-0 {
      margin-top: 0;
    }
    &.full-sm {
      @media (max-width: 450px) {
        width: 100%;
      }
    }
  }

  &.md-on-tablet {
    @media (max-width: 991px) {
      width: 31.1rem;
    }
  }

  &.lg-lh {
    width: 31.1rem;
    height: 5.6rem;
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    line-height: 1.6rem;
    &.strong {
      letter-spacing: 0.125rem;
      font-weight: 900;
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    @media (max-width: 991px) {
      width: 100%;
    }

    @media (max-width: 450px) {
      width: 100%;
    }

    .icon-right {
      top: 1.2rem;
    }
  }

  &.text-sm {
    font-size: 1.4rem;
    font-family: Lato;
    color: ${props => palette.loader};
    font-weight: 900;
    letter-spacing: 0.125rem;
    line-height: 1.6rem;
  }

  &.lg-md {
    width: 31.1rem;
    height: 5.6rem;
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    line-height: 1.6rem;
    &.strong {
      letter-spacing: 0.125rem;
      font-weight: 900;
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    .icon-right {
      top: 1.2rem;
    }

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  &.md {
    width: 26.6rem;
    color: ${props => palette.primary};
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    line-height: 2rem;
  }

  .icon-right {
    position: absolute;
    right: 2.4rem;
    svg {
      width: 1.8rem;
    }
  }

  .icon-left {
    position: absolute;
    top: -0.15rem;
    left: 6rem;
    svg {
      width: 3rem;
    }
    &.google {
      top: 1.1rem;
    }
  }

  &.text-left {
    text-align: left;
  }

  &.primary-gradient {
    box-shadow: 0 0.8rem 3.2rem ${props => palette.secondaryLigthGreyColor};
    background-image: linear-gradient(
      to right,
      ${props => palette.lightBlue} 0%,
      ${props => palette.primary} 100%
    );
    color: ${props => palette.mainBackGroudColor};
  }

  .loading-container {
    position: absolute;
    right: 2.4rem;
    top: 0.8rem;
    text-align: center;
    top: 0;
    height: 100%;
    padding-top: 1rem;
  }

  .lds-dual-ring {
    width: 3rem;
    height: 3rem;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0.1rem;
    border-radius: 50%;
    border: 0.3rem solid ${props => getLoaderColor(props)};
    border-color: ${props => getLoaderColor(props)}
      ${props => getLoaderColor(props)} transparent;
    animation: lds-dual-ring 1.1s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ButtonStyled;
