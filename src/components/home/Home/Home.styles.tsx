import styled from "styled-components";
import { palette } from "styles/util/variables";

import { HomeStyledProps as Props } from "./Home.types";

const HomeStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  display: flex;
  flex-direction: column;

  .Home {
    &__header {
    }

    &__main {
      flex: 1;
    }

    &__appointment-button {
      font-weight: 440;
      font-size: 1.6rem;
      margin: 0.5rem 0;
      max-width: 16rem;
      max-height: 40px;
      color: ${palette.mainBackGroudColor} !important;
    }

    &__footer {
    }
  }
`;

export default HomeStyled;
