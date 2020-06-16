import React from "react";
// components
import { Col, Container, Row } from "react-bootstrap";
import {
  HeaderWrapper,
  NavBrand,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  CtaButton,
  Hero,
  TagLine,
  Title,
  MobileMenu,
} from "./styles";
// scripts
import menuMobile from "../../scripts/menu-mobile";

const Header = () => {
  return (
    <Hero>
      <Container>
        <HeaderWrapper>
          <Col xs="8" lg="4">
            <NavBrand to="/">SC</NavBrand>
          </Col>
          <Col xs="4" lg="8">
            <Nav>
              <MobileMenu onClick={menuMobile}></MobileMenu>
              <NavMenu data-anime="menu-mobile">
                <NavItem>
                  <NavLink to="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/churrascaria">Churrascaria</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu">Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sobre">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contato">Contato</NavLink>
                </NavItem>
              </NavMenu>
            </Nav>
          </Col>
        </HeaderWrapper>
        <Row>
          <Col xs="12">
            <Title>Sabor de Carne</Title>
            <TagLine>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </TagLine>
            <CtaButton href="#" primary>
              Faça sua Reserva!
            </CtaButton>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
};

export default Header;
