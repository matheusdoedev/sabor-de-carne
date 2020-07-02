import React from "react";
import loadable from "@loadable/component";
// components
const SocialMedias = loadable(() => import("../SocialMedias/index"));
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
// styles
import { FooterWrapper, SiteMap, Contatos, Copy } from "./styles";

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col xs="12" sm="4">
          <h3>Mapa do Site</h3>
          <SiteMap>
            <ul>
              <li>
                <Link to="/" alt="Inicio">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/churrascaria" alt="Churrascaria">
                  Churrascaria
                </Link>
              </li>
              <li>
                <Link to="/menu" alt="Menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/sobre" alt="Sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" alt="Contato">
                  Contato
                </Link>
              </li>
            </ul>
          </SiteMap>
        </Col>
        {/* social medias / redes sociais */}
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
