import React from "react";
import loadable from "@loadable/component";
// components
const Container = loadable(() => import("react-bootstrap/Container"));
const Row = loadable(() => import("react-bootstrap/Row"));
const Col = loadable(() => import("react-bootstrap/Col"));
const Layout = loadable(() => import("../layouts/page"));
const SEO = loadable(() => import("../components/Seo/index"));
// styles
const Page404wrapper = loadable(() =>
  import("../styles/components/Page404wrapper")
);

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
