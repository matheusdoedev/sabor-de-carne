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
`;

export const NavMenu = styled.ul`
  & {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0 !important;

    @media (max-width: 991.98px) {
      & {
        display: none;
        position: absolute;
        opacity: 0;
        transform: translate(-20px, 0px);
        background: var(--support-color-2);
        border-radius: 4px;
        width: 280px;
        padding: var(--gap);
        top: 50px;
        z-index: 999;
        text-align: left;
        transition: 0.3s ease;
      }
      &.active {
        display: block;
        opacity: 1;
        transform: translate(0px, 0px);
        transition: 0.3s ease;
      }
      &.active li {
        display: block;
        padding: calc(var(--gap) / 5) 0;
      }
      &.active li:last-child {
        margin-bottom: 0;
      }
      &.active a {
        padding-left: 0;
      }
      &.active:hover {
        color: var(--base-color);
      }
    }
  }
`;

export const NavItem = styled.li`
  & {
    display: inline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-left: var(--gap);
    align-self: flex-end;
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
      border-top: 1px solid var(--support-color-2);

      &:first-child {
        border-top: none;
      }
    }
  }
`;

export const NavLink = styled(Link)`
  & {
    text-decoration: none !important;
    font-size: 1rem;
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

export const MobileMenu = styled.div`
  & {
    display: none;
  }
  @media (max-width: 991.98px) {
    & {
      display: block;
      width: 40px;
      height: 30px;
      padding: 5px 0;
      box-sizing: border-box;
      cursor: pointer;
    }
    &:before,
    &:after {
      content: "";
      display: block;
      height: 4px;
      transition: 0.3s;
    }
    &:before {
      background: var(--base-color);
      margin-bottom: 8px;
    }
    &:after {
      box-shadow: 0 4px 0 0 var(--base-color), 0 -4px 0 0 var(--base-color);
    }
    &.active:before,
    &.active:after {
      width: 80%;
      background: var(--base-color);
      box-shadow: none;
    }
    &.active::before {
      transform: rotate(45deg) translate(7px, 4px);
    }
    &.active::after {
      transform: rotate(-225deg) translate(-4px, 1px);
    }
  }
`;
