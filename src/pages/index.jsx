import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import loadable from "@loadable/component";
// components
const Container = loadable(() => import("react-bootstrap/Container"));
const Row = loadable(() => import("react-bootstrap/Row"));
const Col = loadable(() => import("react-bootstrap/Col"));
const Layout = loadable(() => import("../layouts/home-page"));
const Img = loadable(() => import("gatsby-image"));
const SEO = loadable(() => import("../components/Seo/index"));
// styles
import {
  SobreSection,
  SaibaMaisBtn,
  MenuSection,
  VejaNossoMenuBtn,
} from "./../styles/pages/index";

const Index = () => {
  const { homeMenu1, homeMenu2, homeMenu3, homeSobre } = useStaticQuery(
    graphql`
      query {
        homeMenu1: file(relativePath: { eq: "img/desktop/home-menu1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        homeMenu2: file(relativePath: { eq: "img/desktop/home-menu2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        homeMenu3: file(relativePath: { eq: "img/desktop/home-menu3.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        homeSobre: file(relativePath: { eq: "img/desktop/home-sobre.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Inicio" description="Pagina Inicial Sabor de Carne" />

      <SobreSection>
        <Container>
          <Row>
            <Col xs="12" sm="7">
              <h2>Sobre</h2>
              <p>
                A Sabor de Carne é uma churrascaria tradicional com muitos anos
                de existência.
              </p>
              <SaibaMaisBtn to="/sobre">Saiba Mais</SaibaMaisBtn>
            </Col>
            <Col xs="12" sm="5">
              <Img fluid={homeSobre.childImageSharp.fluid} />
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
              <Img fluid={homeMenu1.childImageSharp.fluid} />
            </Col>
            <Col xs="12" sm="4">
              <Img fluid={homeMenu2.childImageSharp.fluid} />
            </Col>
            <Col xs="12" sm="4">
              <Img fluid={homeMenu3.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <VejaNossoMenuBtn to="/menu" alt="Veja Nosso Menu">
                Veja Nosso Menu
              </VejaNossoMenuBtn>
            </Col>
          </Row>
        </Container>
      </MenuSection>
    </Layout>
  );
};

export default Index;
