import styled from "styled-components";
import { Button } from "../../styles/objects/buttons";

export const SobreSection = styled.section`
  & {
    padding: var(--gap-xl);
  }

  & h2 {
    margin-bottom: var(--gap-lg);
  }

  & p {
    opacity: 80%;
    max-width: 465px;
  }
`;

export const SaibaMaisBtn = styled(Button)`
  & {
    max-width: 217px;
    margin-top: var(--gap-lg);
  }
`;

export const VejaNossoMenuBtn = styled(Button)`
  & {
    max-width: 300px;
    margin: var(--gap-lg) auto 0 auto;
  }
`;

export const MenuSection = styled.section`
  & {
    padding: var(--gap-xl);
    background: var(--support-color-3);
  }

  & h2 {
    margin-bottom: var(--gap-lg);
  }
`;
