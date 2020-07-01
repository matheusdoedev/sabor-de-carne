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
  }
`;

export const FeatureInfo = styled.div`
  & {
    background: var(--base-color);
    padding: var(--gap-sm);
    box-sizing: border-box;
    height: 160px;
    h3,
    p {
      text-align: center;
    }

    h3 {
      margin-bottom: var(--gap);
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    & {
      height: 280px;
    }
  }

  @media (max-width: 575.98px) {
    & {
      margin-bottom: var(--gap-sm);
      height: 140px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      height: 230px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    & {
      height: 190px;
    }
  }
`;
