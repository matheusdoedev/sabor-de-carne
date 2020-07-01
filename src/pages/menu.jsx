import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layouts/page";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
// styles
import { MenuWrapper, MenuItem } from "../styles/pages/menu";

const Menu = () => {
  const {
    footerMobile,
    footerDesktop,
    capaMobile,
    capaDesktop,
    menu1,
    menu2,
    menu3,
  } = useStaticQuery(
    graphql`
      query {
        footerMobile: file(
          relativePath: { eq: "img/mobile/footer-menu-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        footerDesktop: file(
          relativePath: { eq: "img/desktop/footer-menu.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaMobile: file(
          relativePath: { eq: "img/mobile/capa-menu-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaDesktop: file(relativePath: { eq: "img/desktop/capa-menu.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        menu1: file(relativePath: { eq: "img/desktop/menu-1.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        menu2: file(relativePath: { eq: "img/desktop/menu-2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        menu3: file(relativePath: { eq: "img/desktop/menu-3.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const capa = [
    capaMobile.childImageSharp.fluid,
    {
      ...capaDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  const footer = [
    footerMobile.childImageSharp.fluid,
    {
      ...footerDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO title="Menu" description="Confira as opções da Sabor de Carne" />
      <Img fluid={capa} />

      <div>
        <Container>
          <Row>
            <Col xs="12">
              <PageTitle
                title="Menu"
                subtitle="Confira as opções da Sabor de Carne"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <MenuWrapper>
        <Container>
          <Row>
            <Col xs="12">
              <h3>Carnes</h3>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <MenuItem>
                <h4>Bovinas</h4>
                <p>Alcatra, Costela, Bife, Cupim</p>
              </MenuItem>
              <MenuItem>
                <h4>De Porco</h4>
                <p>Costela, Linguila de lombo, Lombo suíno</p>
              </MenuItem>
            </Col>
            <Col xs="12" sm="6">
              <MenuItem>
                <h4>Peixes</h4>
                <p>Salmão, Surubim Defumado, Pescada Amarela</p>
              </MenuItem>
              <MenuItem>
                <h4>Cordeiro</h4>
                <p>Carrê, Paleta</p>
              </MenuItem>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Img fluid={menu1.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <h3>Acompanhamentos</h3>
              <MenuItem>
                <h4>Salada Caprese</h4>
                <p>Mussarela de Búfala</p>
              </MenuItem>
              <MenuItem>
                <h4>Carpacio de Carne</h4>
                <p>
                  Lâminas de carne, queijo parmesão e lascas de queijo parmesão
                </p>
              </MenuItem>
              <MenuItem>
                <h4>Saladas Verdes</h4>
                <p>Alface americana, rúcula, agrião e endívias</p>
              </MenuItem>
              <MenuItem>
                <h4>Salada Grega</h4>
                <p>
                  Mix com queijo feta, tomate, pepino, azeitona preta e cebola
                  roxa
                </p>
              </MenuItem>
            </Col>
            <Col xs="12" sm="6">
              <h3>Bebidas</h3>
              <MenuItem>
                <h4>Vinhos Nacionais</h4>
                <p>Merlot, Cabernet Sauvignon</p>
              </MenuItem>
              <MenuItem>
                <h4>Vinhos Importados</h4>
                <p>Malbec, Sauvignon Blane, Pinot Noir</p>
              </MenuItem>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <Img fluid={menu2.childImageSharp.fluid} />
            </Col>
            <Col xs="12" sm="6">
              <Img fluid={menu3.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </MenuWrapper>

      <Img fluid={footer} />
    </Layout>
  );
};

export default Menu;
