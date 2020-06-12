import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const FormReserva = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2>Faça sua reserva!</h2>
          <form>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" required />

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" required />

            <label for="telefone">Telefone</label>
            <input type="" name="telefone" id="telefone" required />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormReserva;
