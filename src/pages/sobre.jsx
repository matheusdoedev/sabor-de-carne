import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/page";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
// styles
import { SobreWrapper } from "../styles/pages/sobre";
// imgs
import CapaSobre from "../assets/capa-sobre";
import FooterSobre from "../assets/footer-sobre";
import Sobre1 from "../assets/sobre1";
import Sobre2 from "../assets/sobre2";

const Sobre = () => (
  <Layout>
    <SEO title="Sobre" description="Saiba mais sobre a Sabor de Carne" />
    <CapaSobre />
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
              Buscando estar sempre inovando na maneira de servir, na qualidade
              do atendimento, na variedade de opções disponíveis aos nossos
              consumidores.
            </p>
          </Col>
          <Col xs="12" sm="5">
            <Sobre2 />
          </Col>
        </Row>
      </Container>
    </SobreWrapper>

    <FooterSobre />
  </Layout>
);

export default Sobre;
