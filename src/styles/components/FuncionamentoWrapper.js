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
