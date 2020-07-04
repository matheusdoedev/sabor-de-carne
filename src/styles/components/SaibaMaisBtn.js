import styled from "styled-components";
import Button from "../objects/Button";

export const SaibaMaisBtn = styled(Button)`
  & {
    max-width: 217px;
    margin-top: var(--gap-md);

    @media (max-width: 767.98px) {
      margin-bottom: var(--gap-lg);
    }
  }
`;
