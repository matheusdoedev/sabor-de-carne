import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBrand = styled(Link)`
    & {
        color: {(props) => props.color};
    }
`;

export const NavMenu = styled.ul`
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

export const NavItem = styled.li`
  & {
    display: inline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &:last-child NavLink {
    padding-right: 0;
  }

  &:first-child NavLink {
    padding-left: 0;
  }

  @media (max-width: 768px) {
    & {
      display: block;
      padding: 0px;
      margin: 0px;
      border-top: 2px solid;
    }
  }
`;

export const NavLink = styled(Link)`
  @media (max-width: 768px) {
    & {
      display: block;
      float: none;
      padding: 10px;
      margin: 0px;
      border: none;
      min-width: 140px;
    }
  }
`;
