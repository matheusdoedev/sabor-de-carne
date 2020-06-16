import React from "react";
import PropTypes from "prop-types";
// components
import Footer from "../components/Footer/index";
import Hero from "../components/Hero/index";

// styles
import Styles from "../styles/main";

const Home = ({ children }) => {
  return (
    <>
      <Styles />

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
