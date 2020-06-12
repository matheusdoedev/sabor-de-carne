import styled from "styled-components";
import bgMainImg from "../../assets/bg-main";
import { Button } from "../../styles/objects/buttons";

export const Hero = styled(bgMainImg)`
  & {
    height: 663px;
  }
`;

export const Title = styled.h1`
  & {
    margin-top: calc(var(--gap-lg) * 2);
    text-align: center;
    color: var(--support-color-1);

    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 1px;
      margin: var(--gap-sm) auto;
      background-color: var(--support-color-1);
      opacity: 40%;
    }
  }
`;

export const TagLine = styled.p`
  & {
    margin-bottom: var(--gap-sm);
    text-align: center;
    color: var(--support-color-1);
    opacity: 80%;
  }
`;

export const CtaButton = styled(Button)`
  & {
    max-width: 300px;
    margin: var(--gap-lg) auto 0 auto;
  }
`;
