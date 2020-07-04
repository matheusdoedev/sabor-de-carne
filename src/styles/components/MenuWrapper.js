import styled from "styled-components";

export const MenuWrapper = styled.section`
  & {
    padding: var(--gap-lg) 0 var(--gap-xl);
    background: var(--support-color-1);

    h3 {
      margin-bottom: var(--gap-md);

      &:nth-child(1),
      &:nth-child(2) {
        margin-top: var(--gap-lg);
      }
    }

    @media (max-width: 767.98px) {
      & .row:last-child img {
        margin-top: var(--gap-sm);
      }
    }
  }
`;
