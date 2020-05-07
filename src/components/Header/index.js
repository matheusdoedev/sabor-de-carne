import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { NavBrand, NavItem, NavLink, NavMenu } from '../../styles/objects/nav';
import './styles';

export default function Header() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <header className="header header-home fadeInDown" data-anime="200">
      <Row>
        <Col xs="4">
          <NavBrand>SC</NavBrand>
        </Col>
        <Col xs="8">
          <nav className="col-8 header-nav">
            <NavMenu>
              <NavItem>
                <NavLink to="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Churrascaria</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Contato</NavLink>
              </NavItem>
            </NavMenu>
          </nav>
        </Col>
      </Row>
    </header>
  );
}
