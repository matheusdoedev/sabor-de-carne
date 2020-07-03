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
const ContatoWrapper = loadable(() =>
  import("../styles/components/ContatoWrapper")
);

const Contato = () => {
  const {
    footerMobile,
    footerDesktop,
    capaMobile,
    capaDesktop,
    mapa,
  } = useStaticQuery(
    graphql`
      query {
        footerMobile: file(
          relativePath: { eq: "img/mobile/footer-contato-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        footerDesktop: file(
          relativePath: { eq: "img/desktop/footer-contato.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaMobile: file(
          relativePath: { eq: "img/mobile/capa-contato-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        capaDesktop: file(
          relativePath: { eq: "img/desktop/capa-contato.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mapa: file(relativePath: { eq: "img/desktop/mapa.jpg" }) {
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
      <SEO title="Contato" description="Veja nossos contatos" />
      <Img fluid={capa} />

      <div>
        <Container>
          <Row>
            <Col xs="12">
              <PageTitle title="Contato" subtitle="Veja nossos contatos" />
            </Col>
          </Row>
        </Container>
      </div>

      <ContatoWrapper>
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <h3>Onde estamos</h3>
              <ul>
                <li>- Rua Oswaldo Cruz, Rio Vermelho</li>
                <li>- Salvador, Bahia, Brasil</li>
              </ul>
            </Col>
            <Col xs="12" sm="6">
              <h3>Contatos</h3>
              <ul>
                <li>- Telefone: (71) 99999 - 9999</li>
                <li>- Email: contato@sabordecarne.com.br</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Img fluid={mapa.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </ContatoWrapper>

      <Img fluid={footer} />
    </Layout>
  );
};

export default Contato;
