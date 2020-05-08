import styled from 'styled-components';

export const Title = styled.h1`
  & {
    line-height: 1em;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    ${(props) =>
      props.h2
        ? `
        font-weight: 800;
        font-size: 2.25em;
        @media (max-width: 576px) {
            & {
                font-size: 1.5em;
            }
        }`
        : `
        font-weight: 900;
        font-size: 3em;
        @media (max-width: 576px) {
            & {
                font-size: 2.25em;
            }
        }
    `}
  }
`;

export const SubTitle = styled.h2`
  & {
    line-height: 1em;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    ${(props) =>
      props.h4
        ? `
        font-weight: 700;
        font-size: 1em;
        @media (max-width: 576px) {
            & {
                font-size: 1.125em;
            }
        }
    `
        : `
        font-weight: 700;
        font-size: 1.5em;
        @media (max-width: 576px) {
            & {
                font-size: .875em;
            }
        }
    `}
  }
`;

export const Paragraph = styled.p`
  & {
    max-width: 30em;
    line-height: 1.5em;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 0.875em;
  }

  @media (max-width: 576px) {
    & {
      max-width: 100%;
    }
  }
`;
