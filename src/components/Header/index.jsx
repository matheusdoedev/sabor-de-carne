import React from "react";
// components
import { Row, Col, Container } from "react-bootstrap";
// styles
import {
  HeaderWrapper,
  NavBrand,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenu,
} from "./styles";
// scripts
import menuMobile from "../../scripts/menu-mobile";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Col xs="8" lg="4">
            <NavBrand to="/">SC</NavBrand>
          </Col>
          <Col xs="4" lg="8" style={{ alignSelf: "center" }}>
            <Nav>
              <MobileMenu onClick={menuMobile}></MobileMenu>
              <NavMenu data-anime="menu-mobile">
                <NavItem>
                  <NavLink to="/churrascaria" alt="Churrascaria">
                    Churrascaria
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" alt="Menu">
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sobre" alt="Sobre">
                    Sobre
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contato" alt="Contato">
                    Contato
                  </NavLink>
                </NavItem>
              </NavMenu>
            </Nav>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
