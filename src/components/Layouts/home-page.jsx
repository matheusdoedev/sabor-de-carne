import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/index";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// styles
import Colors from "../../styles/settings/colors";
import Fonts from "../../styles/settings/fonts";
import Gaps from "../../styles/settings/gaps";
import Elements from "../../styles/base/elements";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Elements />

      <div>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Row>
            <Col xs="12">
              <h2>Sabor de Carne</h2>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <a>Faça sua Reserva!</a>
            </Col>
          </Row>
        </Container>
      </div>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
