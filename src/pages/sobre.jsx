import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Page/index";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
import { SobreWrapper } from "../styles/pages/sobre";
// imgs
import CapaSobre from "../assets/capa-sobre";
import FooterSobre from "../assets/footer-sobre";
import Sobre1 from "../assets/sobre1";
import Sobre2 from "../assets/sobre2";

const Sobre = () => (
  <Layout>
    <SEO title="Sobre" />
    <CapaSobre />
    <div>
      <Container>
        <Row>
          <Col xs="12">
            <PageTitle
              title="Sobre"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <br />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <br />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
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
