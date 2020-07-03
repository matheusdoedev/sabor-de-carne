import styled from "styled-components";
// components
import { Link } from "gatsby";
import Button from "../../styles/objects/Button";
import bgMainImg from "../../assets/bg-main";

export const Hero = styled(bgMainImg)`
  & {
    height: 663px;

    @media (max-width: 767.98px) {
      height: auto;
      padding: 0 0 var(--gap-xl) 0;
    }
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

    @media (max-width: 767.98px) {
      margin-top: var(--gap-lg);
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

export const HeaderWrapper = styled.header`
  & {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center;
    padding: var(--gap) 0;
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
    color: var(--support-color-1);

    &:hover {
      color: var(--base-color);
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
    color: var(--support-color-1);
    transition: 0.2s;

    &:hover {
      color: var(--base-color);
      transition: 0.2s;
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
      background: var(--support-color-1);
      margin-bottom: 8px;
    }
    &:after {
      box-shadow: 0 4px 0 0 var(--support-color-1),
        0 -4px 0 0 var(--support-color-1);
    }
    &.active:before,
    &.active:after {
      width: 80%;
      background: var(--support-color-1);
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
