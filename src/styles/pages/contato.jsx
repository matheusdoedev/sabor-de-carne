import styled from "styled-components";

export const ContatoWrapper = styled.div`
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

    li {
      margin-bottom: calc(var(--gap) / 2);
    }
  }
`;
