import React from "react";
import { Col } from "react-bootstrap";
import {
  HeaderWrapper,
  NavBrand,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Col xs="4">
        <NavBrand to="/">SC</NavBrand>
      </Col>
      <Col xs="8">
        <Nav>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/churrascaria">Churrascaria</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Contato</NavLink>
            </NavItem>
          </NavMenu>
        </Nav>
      </Col>
    </HeaderWrapper>
  );
};

export default Header;