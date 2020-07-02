import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
// components
const Footer = loadable(() => import("../components/Footer/index"));
const Hero = loadable(() => import("../components/Hero/index"));
// styles
import "bootstrap/dist/css/bootstrap-grid.min.css";
const Colors = loadable(() => import("./../styles/settings/colors"));
const Fonts = loadable(() => import("./../styles/settings/fonts"));
const Gaps = loadable(() => import("./../styles/settings/gaps"));
const Normalize = loadable(() => import("./../styles/generic/normalize"));
const Reset = loadable(() => import("./../styles/generic/reset"));
const Elements = loadable(() => import("./../styles/base/elements"));

const Home = ({ children }) => {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Grid />
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
