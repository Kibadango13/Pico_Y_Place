import styled from "styled-components";

import { ContentWrapperStyledProps as Props } from "./ContentWrapper.types";

const ContentWrapperStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
  .ContentWrapper {
    &__container {
      width: 92%;
      max-width: 464px;
    }
  }
`;

export default ContentWrapperStyled;
