import React from "react";
import Layout from "../layouts/Home-page/index";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/Seo/index";
import {
  SobreSection,
  SaibaMaisBtn,
  MenuSection,
  VejaNossoMenuBtn,
} from "../styles/pages/index";

// imgs
import HomeSobreImg from "../assets/home-sobre";
import MenuImg1 from "../assets/home-menu-1";
import MenuImg2 from "../assets/home-menu-2";
import MenuImg3 from "../assets/home-menu-3";

const Index = () => (
  <Layout>
    <SEO title="Inicio" />

    <SobreSection>
      <Container>
        <Row>
          <Col xs="12" sm="7">
            <h2>Sobre</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
    </MenuSection>
  </Layout>
);

export default Index;
