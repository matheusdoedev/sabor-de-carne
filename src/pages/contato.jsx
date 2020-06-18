import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/page";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
// styles
import { ContatoWrapper } from "../styles/pages/contato";
// imgs
import CapaContato from "../assets/capa-contato";
import FooterContato from "../assets/footer-contato";
import MapaImg from "../assets/mapa";

const Contato = () => (
  <Layout>
    <SEO title="Contato" description="Veja nossos contatos" />
    <CapaContato />

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
            <MapaImg />
          </Col>
        </Row>
      </Container>
    </ContatoWrapper>

    <FooterContato />
  </Layout>
);

export default Contato;
