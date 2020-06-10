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
    text-align: center;
    margin-top: var(--gap-lg);
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
