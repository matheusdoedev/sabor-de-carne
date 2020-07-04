import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import loadable from "@loadable/component";
// components
const Container = loadable(() => import("react-bootstrap/Container"));
const Row = loadable(() => import("react-bootstrap/Row"));
const Col = loadable(() => import("react-bootstrap/Col"));
const Layout = loadable(() => import("../layouts/page"));
const Img = loadable(() => import("gatsby-image"));
const SEO = loadable(() => import("../components/Seo/index"));
const PageTitle = loadable(() => import("../components/Page-title/index"));
// styles
import { SobreWrapper } from "../styles/components/SobreWrapper";

const Sobre = () => {
  const {
    footerMobile,
    footerDesktop,
    capaMobile,
    capaDesktop,
    sobre1,
    sobre2,
  } = useStaticQuery(
    graphql`
      query {
        footerMobile: file(
          relativePath: { eq: "img/mobile/footer-sobre-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        footerDesktop: file(
          relativePath: { eq: "img/desktop/footer-sobre.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaMobile: file(
          relativePath: { eq: "img/mobile/capa-sobre-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaDesktop: file(relativePath: { eq: "img/desktop/capa-sobre.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sobre1: file(relativePath: { eq: "img/desktop/sobre1.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sobre2: file(relativePath: { eq: "img/desktop/sobre2.jpg" }) {
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
      <SEO title="Sobre" description="Saiba mais sobre a Sabor de Carne" />
      <Img fluid={capa} />
      <div>
        <Container>
          <Row>
            <Col xs="12">
              <PageTitle
                title="Sobre"
                subtitle="Saiba mais sobre a Sabor de Carne"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <SobreWrapper>
        <Container>
          <Row>
            <Col xs="12" sm="7">
              <h3>História</h3>
              <p>
                A churrascaria Sabor de Carne nasceu em 1994, com a ideia de
                entregar um serviço diferente da maioria.
              </p>
              <br />
              <p>
                Situado em Salvador, no Rio Vermelho, com mais de 20 anos de
                história, é mantida a ideia de entregar algo diferente,
                sofisticado, que satisfaça o consumidor.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <Img fluid={sobre1.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="7">
              <h3>Missão e Valores</h3>
              <p>
                Ser tradicional, diferente e a sofisticação são os valores da
                Sabor de Carne.
              </p>
              <br />
              <p>
                Buscando estar sempre inovando na maneira de servir, na
                qualidade do atendimento, na variedade de opções disponíveis aos
                nossos consumidores.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <Img fluid={sobre2.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </SobreWrapper>

      <Img fluid={footer} />
    </Layout>
  );
};

export default Sobre;
