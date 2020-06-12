import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../../styles/main";
import Header from "../../components/Header-home/index";
import Footer from "../../components/Footer/index";
import { Hero, Title, TagLine, CtaButton } from "./styles";

// styles

const Home = ({ children }) => {
  return (
    <>
      <Styles />

      <Hero>
        <Container>
          <Header />
          <Row>
            <Col xs="12">
              <Title>Sabor de Carne</Title>
              <TagLine>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </TagLine>
              <CtaButton href="#" primary>
                Faça sua Reserva!
              </CtaButton>
            </Col>
          </Row>
        </Container>
      </Hero>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
