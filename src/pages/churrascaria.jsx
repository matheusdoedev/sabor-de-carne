import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/page";
import SEO from "../components/Seo/index";
import FormReserva from "../components/Reserva/index";
import PageTitle from "../components/Page-title/index";
// styles
import {
  FuncionamentoWrapper,
  FeaturesWrapper,
  FeatureInfo,
} from "../styles/pages/churrascaria";
// imgs
import CapaChurrascaria from "../assets/capa-churrascaria";
import FooterChurrascaria from "../assets/footer-churrascaria";
import Card1Img from "../assets/card-churrascaria1";
import Card2Img from "../assets/card-churrascaria2";
import Card3Img from "../assets/card-churrascaria3";
import FuncionamentoImg from "../assets/funcionamento";

const Churrascaria = () => (
  <Layout>
    <SEO
      title="Churrascaria"
      description="Saiba mais sobre a nossa churrascaria"
    />
    <CapaChurrascaria />

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
            <Card1Img />
            <FeatureInfo>
              <h3>Som ao vivo</h3>
              <p>
                Providenciamos um ambiente agradavél e sofisticado com som ao
                vivo.
              </p>
            </FeatureInfo>
          </Col>
          <Col xs="12" sm="4">
            <Card2Img />
            <FeatureInfo>
              <h3>Rodizio</h3>
              <p>O nosso consumidor come o quanto puder.</p>
            </FeatureInfo>
          </Col>
          <Col xs="12" sm="4">
            <Card3Img />
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
            <FuncionamentoImg />
          </Col>
        </Row>
      </Container>
    </FuncionamentoWrapper>

    <FormReserva />

    <FooterChurrascaria />
  </Layout>
);

export default Churrascaria;
