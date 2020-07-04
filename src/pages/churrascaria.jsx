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
const FormReserva = loadable(() => import("../components/Reserva/index"));
// styled-components
import { FeaturesWrapper } from "../styles/components/FeaturesWrapper";
import { FuncionamentoWrapper } from "../styles/components/FuncionamentoWrapper";
import { FeatureInfo } from "../styles/components/FeatureInfo";

const Churrascaria = () => {
  const {
    footerMobile,
    footerDesktop,
    capaMobile,
    capaDesktop,
    cardChurrascaria1,
    cardChurrascaria2,
    cardChurrascaria3,
    funcionamento,
  } = useStaticQuery(
    graphql`
      query {
        footerMobile: file(
          relativePath: { eq: "img/mobile/footer-churrascaria-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        footerDesktop: file(
          relativePath: { eq: "img/desktop/footer-churrascaria.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaMobile: file(
          relativePath: { eq: "img/mobile/capa-churrascaria-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaDesktop: file(
          relativePath: { eq: "img/desktop/capa-churrascaria.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cardChurrascaria1: file(
          relativePath: { eq: "img/desktop/card-churrascaria1.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cardChurrascaria2: file(
          relativePath: { eq: "img/desktop/card-churrascaria2.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cardChurrascaria3: file(
          relativePath: { eq: "img/desktop/card-churrascaria3.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        funcionamento: file(
          relativePath: { eq: "img/desktop/funcionamento.jpg" }
        ) {
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
      <SEO
        title="Churrascaria"
        description="Saiba mais sobre a nossa churrascaria"
      />
      <Img fluid={capa} />

      <div>
        <Container>
          <Row>
            <Col xs="12">
              <PageTitle
                title="Churrascaria"
                subtitle="Saiba mais sobre a nossa churrascaria"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <FeaturesWrapper>
        <Container>
          <Row>
            <Col xs="12" sm="4">
              <Img fluid={cardChurrascaria1.childImageSharp.fluid} />
              <FeatureInfo>
                <h3>Som ao vivo</h3>
                <p>
                  Providenciamos um ambiente agradavél e sofisticado com som ao
                  vivo.
                </p>
              </FeatureInfo>
            </Col>
            <Col xs="12" sm="4">
              <Img fluid={cardChurrascaria2.childImageSharp.fluid} />
              <FeatureInfo>
                <h3>Rodizio</h3>
                <p>O nosso consumidor come o quanto puder.</p>
              </FeatureInfo>
            </Col>
            <Col xs="12" sm="4">
              <Img fluid={cardChurrascaria3.childImageSharp.fluid} />
              <FeatureInfo>
                <h3>Vinhos</h3>
                <p>
                  Contamos com uma ampla variedade de vinhos e bebidas no geral
                  para servir nossos consumidores.
                </p>
              </FeatureInfo>
            </Col>
          </Row>
        </Container>
      </FeaturesWrapper>

      <FuncionamentoWrapper>
        <Container>
          <Row>
            <Col xs="12">
              <h2>Funcionamento</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <h3>Horarios</h3>
              <ul>
                <li>- Dias da semana: Das 7h ás 23h</li>
                <li>- Sabado, domingo e feriados. Das 8h às 24h</li>
              </ul>
            </Col>
            <Col xs="12" sm="6">
              <h3>Onde Estamos</h3>
              <ul>
                <li>- Rua Oswaldo Cruz, Rio Vermelho</li>
                <li>- Salvador, Bahia, Brasil</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Img fluid={funcionamento.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </FuncionamentoWrapper>

      <FormReserva />

      <Img fluid={footer} />
    </Layout>
  );
};

export default Churrascaria;
