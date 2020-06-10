import { Link } from "gatsby";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs="12" sm="4">
          <nav>
            <ul>
              <li>
                <Link href="#">Inicio</Link>
              </li>
              <li>
                <Link href="#">Churrascaria</Link>
              </li>
              <li>
                <Link href="#">Menu</Link>
              </li>
              <li>
                <Link href="#">Sobre</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col xs="12" sm="4"></Col>
        <Col xs="12" sm="4"></Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
