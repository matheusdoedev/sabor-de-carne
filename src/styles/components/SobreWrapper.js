import styled from "styled-components";

const SobreWrapper = styled.div`
  & {
    padding: var(--gap-xl) 0;

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

    @media (max-width: 767.98px) {
      & img {
        margin-top: var(--gap-sm);
      }
    }
  }
`;

export default SobreWrapper;
