import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const ArtDirectedBackground = ({ className, id, children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "img/mobile/capa-contato-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "img/capa-contato.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
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
  height: 200px;
  background-size: cover;
  background-color: transparent;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  z-index: -20px;
`;

export default StyledArtDirectedBackground;
