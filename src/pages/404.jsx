import React from "react";
// components
import Layout from "../layouts/page";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/Seo/index";
// styles
import { Page404wrapper } from "../styles/pages/404";

const Page404 = () => (
  <Layout>
    <SEO title="404" description="Pagina não encontrada" />

    <Page404wrapper>
      <Container>
        <Row>
          <Col xs="12">
            <h3>Página não encontrada!</h3>
          </Col>
        </Row>
      </Container>
    </Page404wrapper>
  </Layout>
);

export default Page404;
