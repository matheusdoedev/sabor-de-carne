import React from "react";
import PropTypes from "prop-types";
// components
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

// styles
import Styles from "../styles/main";

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
