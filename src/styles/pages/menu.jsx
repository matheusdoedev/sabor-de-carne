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

export const MenuItem = styled.div`
  & {
    margin: var(--gap-sm) 0;

    h4 {
      margin-bottom: var(--gap);
    }

    p {
      opacity: 80%;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #000;
      opacity: 10%;
      margin-top: var(--gap);
    }

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #000;
      opacity: 10%;
      margin-bottom: var(--gap);
    }

    &:last-child {
      margin-bottom: var(--gap-lg);
    }
  }
`;
