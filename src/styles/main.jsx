import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Colors from "./settings/colors";
import Fonts from "./settings/fonts";
import Gaps from "./settings/gaps";
import Normalize from "./generic/normalize";
import Reset from "./generic/reset";
import Elements from "./base/elements";

const Styles = () => {
  return (
    <>
      <Colors />
      <Fonts />
      <Gaps />
      <Normalize />
      <Reset />
      <Elements />
    </>
  );
};

export default Styles;
