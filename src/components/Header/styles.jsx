import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderWrapper = styled.header`
  & {
    align-items: center;
    padding: var(--gap) 0;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const NavBrand = styled(Link)`
  & {
    color: var(--support-color-1);
    font-size: 2.25rem;
    font-family: var(--font-primary);
    align-self: center;
    opacity: 90%;
    transition: 0.2s;
    color: var(--base-color);

    &:hover {
      color: var(--secondary-color);
      transition: 0.2s;
    }
  }
`;

export const Nav = styled.nav`
  & {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    & {
      display: block;
    }
  }
`;

export const NavMenu = styled.ul`
  & {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0 !important;
  }
`;

export const NavItem = styled.li`
  & {
    display: inline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-left: var(--gap);
    opacity: 80%;

    &:last-child a {
      padding-right: 0;
    }

    &:first-child a {
      padding-left: 0;
    }

    @media (max-width: 768px) {
      display: block;
      padding: 0px;
      margin: 0px;
      border-top: 2px solid;
    }
  }
`;

export const NavLink = styled(Link)`
  & {
    text-decoration: none !important;
    font-size: 1rem;
    color: var(--support-color-1);
    transition: 0.2s;
    color: var(--base-color);

    &:hover {
      color: var(--secondary-color);
    }

    @media (max-width: 768px) {
      display: block;
      float: none;
      padding: 10px;
      margin: 0px;
      border: none;
      min-width: 140px;
    }
  }
`;
