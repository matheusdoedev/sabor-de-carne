import React from "react";
import { PageTitleWrapper } from "./styles";

const PageTitle = (props) => {
  return (
    <PageTitleWrapper>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </PageTitleWrapper>
  );
};

export default PageTitle;
