import React from "react";
import PropTypes from "prop-types";
// components
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
// styles
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Colors from "./../styles/settings/colors";
import Fonts from "./../styles/settings/fonts";
import Gaps from "./../styles/settings/gaps";
import Normalize from "./../styles/generic/normalize";
import Reset from "./../styles/generic/reset";
import Elements from "./../styles/base/elements";

const Page = ({ children }) => {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Normalize />
      <Reset />
      <Elements />

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
