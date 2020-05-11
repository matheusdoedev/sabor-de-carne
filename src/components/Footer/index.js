/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {
  FooterWrapper,
  SocialMedias,
  SocialMediaItem,
  FooterNavItem,
  FooterNavMenu,
  FooterNavLink,
  Copy,
} from './styles';
import { SubTitle, Paragraph } from '../../styles/objects/texts';
// imgs
// import facebookImg from '../../assets/img/icons/001-facebook.svg';
// import instagramImg from '../../assets/img/icons/002-instagram.svg';
// import twitterImg from '../../assets/img/icons/003-twitter.svg';

export default function Footer() {
  return (
    <FooterWrapper background="var(--color-support-3)">
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <SubTitle color="var(--color-support-1)">Mapa do Site</SubTitle>
            <FooterNavMenu>
              <FooterNavItem>
                <FooterNavLink to="/" block>
                  Inicio
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/" block>
                  Churrascaria
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/" block>
                  Menu
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/" block>
                  Sobre
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink to="/" block>
                  Contato
                </FooterNavLink>
              </FooterNavItem>
            </FooterNavMenu>
          </Col>
          <Col xs="12" sm="4">
            <SubTitle color="var(--color-support-1)">Redes Sociais</SubTitle>
            <SocialMedias>
              <SocialMediaItem href="https://facebook.com" target="blank">
                <img
                  src="../../assets/img/icons/001-facebook.svg"
                  alt="Icone Facebook"
                />
              </SocialMediaItem>
              <SocialMediaItem href="https://instagram.com" target="blank">
                <img
                  src="../../assets/img/icons/002-instagram.svg"
                  alt="Icone Instagram"
                />
              </SocialMediaItem>
              <SocialMediaItem href="https://twitter.com" target="blank">
                <img
                  src="../../assets/img/icons/003-twitter.svg"
                  alt="Icone Twitter"
                />
              </SocialMediaItem>
            </SocialMedias>
          </Col>
          <Col xs="12" sm="4">
            <SubTitle color="var(--color-support-1)">Contatos</SubTitle>
            <Paragraph>
              - Telefone: (71) 99999 - 9999
              <br /> - E-mail: contato@sabordecarne.com.br
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Copy>Sabor de Carne 2020 @ Todos os direitos reservados.</Copy>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}
