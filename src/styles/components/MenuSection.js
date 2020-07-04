import styled from "styled-components";

export const MenuSection = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--support-color-3);
  }

  & h2 {
    margin-bottom: var(--gap-lg);
  }

  @media (max-width: 767.98px) {
    & div.gatsby-image-wrapper {
      margin-bottom: var(--gap-md);
    }
  }
`;
