import styled from "styled-components";

export const SocialWrapper = styled.div`
  & {
    a {
      padding-left: 0;
      margin-right: var(--gap);

      &:last-child {
        margin-right: 0;
      }
    }

    img {
      display: inline-block;
      width: 43px;
      height: 43px;
    }
  }
`;
