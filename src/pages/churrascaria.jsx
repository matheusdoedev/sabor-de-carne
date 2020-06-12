import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Page/index";
import SEO from "../components/Seo/index";
import FormReserva from "../components/Reserva/index";

// imgs
import CapaImg from "../assets/capa-menu";
import Menu1Img from "../assets/menu1";
import Menu2Img from "../assets/menu2";
import Menu3Img from "../assets/menu3";

const Churrascaria = () => (
  <Layout>
    <SEO title="Churrascaria" />

    <div>
      <Container>
        <Row>
          <h2>Churrascaria</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to{" "}
          </p>
        </Row>
      </Container>
    </div>

    <section>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <Menu1Img />
            <div>
              <h3>Som ao vivo</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <Menu2Img />
            <div>
              <h3>Som ao vivo</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>
          </Col>
          <Col xs="12" sm="4">
            <Menu3Img />
            <div>
              <h3>Som ao vivo</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
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
      </Container>
    </section>

    <FormReserva />
  </Layout>
);

export default Churrascaria;
