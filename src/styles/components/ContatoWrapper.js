import styled from "styled-components";

const ContatoWrapper = styled.div`
  & {
    padding: var(--gap-xl) 0;

    .row {
      margin-bottom: var(--gap-lg);

      &:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 767.98px) {
        & div:last-child h3 {
          margin-top: var(--gap-md);
        }
      }
    }

    h3 {
      margin-bottom: var(--gap-sm);
    }

    li {
      margin-bottom: calc(var(--gap) / 2);
      opacity: 80%;
    }

    @media (max-width: 767.98px) {
      & .col:first-child h3 {
        margin-top: var(--gap-sm);
      }
    }
  }
`;

export default ContatoWrapper;
