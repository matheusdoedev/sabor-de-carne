import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Page/index";
import SEO from "../components/Seo/index";
import PageTitle from "../components/Page-title/index";
import { MenuWrapper, MenuItem } from "../styles/pages/menu";
// imgs
import CapaMenu from "../assets/capa-menu";
import FooterMenu from "../assets/footer-menu";
import MenuImg1 from "../assets/menu-1";
import MenuImg2 from "../assets/menu-2";
import MenuImg3 from "../assets/menu-3";

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <CapaMenu />

    <div>
      <Container>
        <Row>
          <Col xs="12">
            <PageTitle
              title="Menu"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to"
            />
          </Col>
        </Row>
      </Container>
    </div>

    <MenuWrapper>
      <Container>
        <Row>
          <Col xs="12">
            <h3>Carnes</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <MenuItem>
              <h4>Bovinas</h4>
              <p>Alcatra, Costela, Bife, Cupim</p>
            </MenuItem>
            <MenuItem>
              <h4>De Porco</h4>
              <p>Costela, Linguila de lombo, Lombo suíno</p>
            </MenuItem>
          </Col>
          <Col xs="12" sm="6">
            <MenuItem>
              <h4>Peixes</h4>
              <p>Salmão, Surubim Defumado, Pescada Amarela</p>
            </MenuItem>
            <MenuItem>
              <h4>Cordeiro</h4>
              <p>Carrê, Paleta</p>
            </MenuItem>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <MenuImg1 />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <h3>Acompanhamentos</h3>
            <MenuItem>
              <h4>Salada Caprese</h4>
              <p>Mussarela de Búfala</p>
            </MenuItem>
            <MenuItem>
              <h4>Carpacio de Carne</h4>
              <p>
                Lâminas de carne, queijo parmesão e lascas de queijo parmesão
              </p>
            </MenuItem>
            <MenuItem>
              <h4>Saladas Verdes</h4>
              <p>Alface americana, rúcula, agrião e endívias</p>
            </MenuItem>
            <MenuItem>
              <h4>Salada Grega</h4>
              <p>
                Mix com queijo feta, tomate, pepino, azeitona preta e cebola
                roxa
              </p>
            </MenuItem>
          </Col>
          <Col xs="12" sm="6">
            <h3>Bebidas</h3>
            <MenuItem>
              <h4>Vinhos Nacionais</h4>
              <p>Merlot, Cabernet Sauvignon</p>
            </MenuItem>
            <MenuItem>
              <h4>Vinhos Importados</h4>
              <p>Malbec, Sauvignon Blane, Pinot Noir</p>
            </MenuItem>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <MenuImg2 />
          </Col>
          <Col xs="12" sm="6">
            <MenuImg3 />
          </Col>
        </Row>
      </Container>
    </MenuWrapper>

    <FooterMenu />
  </Layout>
);

export default Menu;
