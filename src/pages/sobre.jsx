import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layouts/page";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
// styles
import { SobreWrapper } from "../styles/pages/sobre";
// imgs
import Sobre1 from "../assets/sobre1";
import Sobre2 from "../assets/sobre2";

const Sobre = () => {
  const {
    footerSobreMobile,
    footerSobreDesktop,
    capaSobreMobile,
    capaSobreDesktop,
  } = useStaticQuery(
    graphql`
      query {
        footerSobreMobile: file(
          relativePath: { eq: "img/mobile/footer-sobre-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        footerSobreDesktop: file(relativePath: { eq: "img/footer-sobre.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaSobreMobile: file(
          relativePath: { eq: "img/mobile/capa-sobre-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaSobreDesktop: file(relativePath: { eq: "img/capa-sobre.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const capaSobre = [
    capaSobreMobile.childImageSharp.fluid,
    {
      ...capaSobreDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  const footerSobre = [
    footerSobreMobile.childImageSharp.fluid,
    {
      ...footerSobreDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO title="Sobre" description="Saiba mais sobre a Sabor de Carne" />
      <Img fluid={capaSobre} />
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
              <Sobre1 />
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
              <Sobre2 />
            </Col>
          </Row>
        </Container>
      </SobreWrapper>

      <Img fluid={footerSobre} />
    </Layout>
  );
};

export default Sobre;
