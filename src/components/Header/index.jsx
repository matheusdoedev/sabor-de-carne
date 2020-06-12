import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  HeaderWrapper,
  NavBrand,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
} from "./styles";

const Header = ({ page }) => {
  return (
    <HeaderWrapper>
      <Col xs="4">
        <NavBrand to="/" {...page}>
          SC
        </NavBrand>
      </Col>
      <Col xs="8">
        <Nav>
          <NavMenu>
            <NavItem>
              <NavLink to="/" {...page}>
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/churrascaria" {...page}>
                Churrascaria
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" {...page}>
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" {...page}>
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" {...page}>
                Contato
              </NavLink>
            </NavItem>
          </NavMenu>
        </Nav>
      </Col>
    </HeaderWrapper>
  );
};

export default Header;
