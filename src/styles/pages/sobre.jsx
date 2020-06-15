import styled from "styled-components";

export const SobreWrapper = styled.div`
  & {
    padding: var(--gap-xl);

    .row {
      margin-bottom: var(--gap-lg);

      &:last-child {
        margin-bottom: 0;
      }
    }

    h3 {
      margin-bottom: var(--gap-sm);
    }

    p {
      max-width: 30em;
      opacity: 80%;
    }
  }
`;
