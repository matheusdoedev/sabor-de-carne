import React, { useEffect, useState } from "react";
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
        </HeaderWrapper>
        <Row>
          <Col xs="12">
            <Title>Sabor de Carne</Title>
            <TagLine>
              Churrascaria e restaurante em Salvador. Venha conferir!
            </TagLine>
            <CtaButton to="/churrascaria#reserva" primary="true">
              Faça sua Reserva!
            </CtaButton>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
};

export default Header;
