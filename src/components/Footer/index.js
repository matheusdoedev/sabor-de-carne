/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FooterWrapper, SocialMedias, SocialMediaItem } from './styles';
import { SubTitle, Paragraph } from '../../styles/objects/texts';
import { NavItem, NavLink, NavMenu } from '../../styles/objects/nav';
// imgs
import facebookImg from '../../assets/img/icons/001-facebook.svg';
import instagramImg from '../../assets/img/icons/002-instagram.svg';
import twitterImg from '../../assets/img/icons/003-twitter.svg';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <SubTitle>Mapa do Site</SubTitle>
            <NavMenu>
              <NavItem verticalNav>
                <NavLink to="/">Inicio</NavLink>
              </NavItem>
              <NavItem verticalNav>
                <NavLink to="/">Churrascaria</NavLink>
              </NavItem>
              <NavItem verticalNav>
                <NavLink to="/">Menu</NavLink>
              </NavItem>
              <NavItem verticalNav>
                <NavLink to="/">Sobre</NavLink>
              </NavItem>
              <NavItem verticalNav>
                <NavLink to="/">Contato</NavLink>
              </NavItem>
            </NavMenu>
          </Col>
          <Col xs="12" sm="4">
            <SubTitle>Redes Sociais</SubTitle>
            <SocialMedias>
              <SocialMediaItem href="https://facebook.com" target="blank">
                <img src={facebookImg} alt="Icone Facebook" />
              </SocialMediaItem>
              <SocialMediaItem href="https://instagram.com" target="blank">
                <img src={instagramImg} alt="Icone Instagram" />
              </SocialMediaItem>
              <SocialMediaItem href="https://twitter.com" target="blank">
                <img src={twitterImg} alt="Icone Twitter" />
              </SocialMediaItem>
            </SocialMedias>
          </Col>
          <Col xs="12" sm="4">
            <SubTitle>Contatos</SubTitle>
            <Paragraph>
              - Telefone: (71) 99999 - 9999
              <br /> - E-mail: contato@sabordecarne.com.br
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Paragraph style="margin-top: var(--gap-sm);">
              Sabor de Carne 2020 @ Todos os direitos reservados.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}
