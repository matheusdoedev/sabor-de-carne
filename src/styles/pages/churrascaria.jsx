import styled from "styled-components";

export const FuncionamentoWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--support-color-3);

    h2 {
      margin-bottom: var(--gap-lg);
    }

    h3 {
      margin-bottom: var(--gap-md);
    }

    li {
      margin-bottom: var(--gap);
    }

    img {
      margin-top: var(--gap-lg);
    }
  }
`;

export const FeaturesWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    h3 {
      text-align: center;
      margin-bottom: var(--gap);
    }
  }
`;

export const FeatureInfo = styled.div`
  & {
    background: var(--base-color);
    padding: var(--gap-sm);
  }

  @media (max-width: 767.98px) {
    & {
      margin-bottom: var(--gap-sm);
    }
  }
`;
