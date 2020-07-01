import styled from "styled-components";

export const FooterWrapper = styled.footer`
  & {
    background: var(--support-color-2);
    padding: var(--gap-md) 0 var(--gap-lg) 0;

    @media (max-width: 767.98px) {
      & {
        text-align: center;
      }
    }
  }

  h3 {
    color: var(--support-color-1);
    margin: var(--gap-md) 0;

    /* &:first-child {
      margin-top: 0;
    } */
  }
`;

export const SiteMap = styled.nav`
  & li {
    margin-bottom: var(--gap);

    &:last-child {
      margin-bottom: 0;
    }
  }

  & a {
    padding-left: 0;
    color: var(--support-color-1);
    opacity: 80%;
    transition: 0.2s;
    text-transform: uppercase;

    &:hover {
      color: var(--base-color);
      transition: 0.2s;
    }
  }
`;

export const Contatos = styled.ul`
  & {
    li {
      margin-bottom: calc(var(--gap) / 2);
      color: var(--support-color-1);
      opacity: 80%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const Copy = styled.p`
  & {
    color: var(--support-color-1);
    margin-top: var(--gap-md);
    opacity: 60%;
  }
`;
