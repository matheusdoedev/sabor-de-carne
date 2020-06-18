import React from "react";
// components
import { Container, Col, Row } from "react-bootstrap";
import { FormWrapper, ReservarBtn } from "./styles";

const FormReserva = () => {
  return (
    <FormWrapper id="reserva">
      <Container>
        <Row>
          <Col xs="12" sm={{ span: 6, offset: 3 }}>
            <h2>Faça sua reserva!</h2>

            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" required />

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" required />

            <label for="telefone">Telefone</label>
            <input type="tel" name="telefone" id="telefone" required />

            <label
              for="pessoas"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Quantidade de pessoas*<span>Até no maximo 10 pessoas.</span>
            </label>
            <input type="number" name="pessoas" id="pessoas" required />

            <label for="data">Data</label>
            <input type="datetime-local" name="data" id="data" required />

            <label for="mensagem">Mensagem</label>
            <textarea name="mensagem" id="mensagem" required></textarea>

            <ReservarBtn type="submit">Reservar</ReservarBtn>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default FormReserva;
