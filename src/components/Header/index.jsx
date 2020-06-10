import PropTypes from "prop-types";
import React from "react";
import { NavBrand, NavLink, NavItem, NavMenu } from "../../styles/objects/nav";
import { Row, Col } from "react-bootstrap";
import { HeaderWrapper } from "./styles";

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Row>
        <Col xs="4">
          <NavBrand to="/">SC</NavBrand>
        </Col>
        <Col xs="8">
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
        </Col>
      </Row>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
