import styled from "styled-components";

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

    &__footer {
    }
  }
`;

export default HomeStyled;
