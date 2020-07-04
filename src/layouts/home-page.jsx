import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
// components
const Footer = loadable(() => import("../components/Footer/index"));
const Hero = loadable(() => import("../components/Hero/index"));
// styles
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Colors from "./../styles/settings/colors";
import Fonts from "./../styles/settings/fonts";
import Gaps from "../styles/settings/gaps";
import Normalize from "./../styles/generic/normalize";
import Reset from "./../styles/generic/reset";
import Elements from "./../styles/base/elements";

const Home = ({ children }) => {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Normalize />
      <Reset />
      <Elements />

      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
