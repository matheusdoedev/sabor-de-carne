import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ArtDirectedBackground = ({ className, id, children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "img/mobile/bg-main-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "img/desktop/bg-main.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <BackgroundImage
      Tag={`section`}
      id={id}
      className={className}
      fluid={sources}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
  width: 100%;
  background-size: cover;
  background-color: transparent;
`;

export default StyledArtDirectedBackground;
