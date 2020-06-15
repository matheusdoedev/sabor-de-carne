import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../../styles/main";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

// styles

const Page = ({ children }) => {
  return (
    <>
      <Styles />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
