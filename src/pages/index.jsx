import React from "react";
// components
import Layout from "../layouts/home-page";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/Seo/index";
// styles
import {
  SobreSection,
  SaibaMaisBtn,
  MenuSection,
  VejaNossoMenuBtn,
} from "./../styles/pages/index";
// imgs
import HomeSobreImg from "../assets/home-sobre";
import MenuImg1 from "../assets/home-menu-1";
import MenuImg2 from "../assets/home-menu-2";
import MenuImg3 from "../assets/home-menu-3";

const Index = () => (
  <Layout>
    <SEO title="Inicio" description="Pagina Inicial Sabor de Carne" />

    <SobreSection>
      <Container>
        <Row>
          <Col xs="12" sm="7">
            <h2>Sobre</h2>
            <p>
              A Sabor de Carne é uma churrascaria tradicional com muitos anos de
              existência.
            </p>
            <SaibaMaisBtn to="/sobre">Saiba Mais</SaibaMaisBtn>
          </Col>
          <Col xs="12" sm="5">
            <HomeSobreImg />
          </Col>
        </Row>
      </Container>
    </SobreSection>

    <MenuSection>
      <Container>
        <Row>
          <Col xs="12">
            <h2>Menu</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <MenuImg1 />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg2 />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg3 />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <VejaNossoMenuBtn to="/menu">Veja Nosso Menu</VejaNossoMenuBtn>
          </Col>
        </Row>
      </Container>
    </MenuSection>
  </Layout>
);

export default Index;
