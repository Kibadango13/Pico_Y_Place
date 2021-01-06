import styled from "styled-components";
import { palette } from "styles/util/variables";

import { HomeLayoutStyledProps as Props } from "./HomeLayout.types";

const HomeLayoutStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  display: flex;
  flex-direction: column;
  .HomeLayout {
    &__header {
    }

    &__main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__appointment-button {
      font-weight: 440;
      font-size: 1.6rem;
      margin: 0.5rem 0;
      max-width: 16rem;
      max-height: 40px;
      color: ${palette.mainBackGroudColor} !important;
    }
    &__image {
      width: 43.4rem;
      @media (max-width: 450px) {
        width: 100%;
      }
      img {
        margin: auto;
        width: 100%;
        height: auto;
      }
    }
    &__footer {
    }
  }
`;

export default HomeLayoutStyled;
