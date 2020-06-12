import { Link } from "gatsby";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FooterWrapper, SiteMap, Contatos, Copy } from "./styles";
import SocialMedias from "../SocialMedias/index";

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col xs="12" sm="4">
          <h3>Mapa do Site</h3>
          <SiteMap>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/churrascaria">Churrascaria</Link>
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
          </SiteMap>
        </Col>
        <Col xs="12" sm="4">
          <h3>Redes Sociais</h3>
          <SocialMedias />
        </Col>
        <Col xs="12" sm="4">
          <h3>Contatos</h3>
          <Contatos>
            <li>- Telefone: (71) 99999 - 9999</li>
            <li>- E-mail: contato@sabordecarne.com.br</li>
          </Contatos>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Copy>
            Made By @Matheusdoe-dev, Sabor de Carne 2020 @ Todos os direitos
            reservados.
          </Copy>
        </Col>
      </Row>
    </Container>
  </FooterWrapper>
);

export default Footer;
