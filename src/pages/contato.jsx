import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Page/index";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
import { ContatoWrapper } from "../styles/pages/contato";
// imgs
import CapaContato from "../assets/capa-sobre";
import FooterContato from "../assets/footer-sobre";

const Contato = () => (
  <Layout>
    <SEO title="Contato" />
    <CapaContato />

    <div>
      <Container>
        <Row>
          <Col xs="12">
            <PageTitle
              title="Contato"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to"
            />
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
      </Container>
    </ContatoWrapper>

    <FooterContato />
  </Layout>
);

export default Contato;
