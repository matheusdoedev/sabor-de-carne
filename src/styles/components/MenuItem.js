import styled from "styled-components";

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
