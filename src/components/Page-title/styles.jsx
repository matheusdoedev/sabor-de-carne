import styled from "styled-components";

export const PageTitleWrapper = styled.div`
  & {
    h2 {
      color: var(--base-color);
      margin-top: var(--gap-lg);

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #000000;
        opacity: 20%;
        margin: var(--gap);
      }
    }

    p {
      opacity: 80%;
    }
  }
`;
