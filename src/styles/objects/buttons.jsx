import { Link } from "gatsby";
import styled from "styled-components";

export const Button = styled(Link)`
  & {
    display: block;
    max-width: 16rem;
    text-decoration: none;
    padding: 10px 25px 10px 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 4px;
    background-color: ${(props) =>
      props.primary ? "var(--secondary-color)" : "var(--base-color)"};
    color: var(--support-color-1);
    transition: filter 0.2s;
    -webkit-transition: filter 0.2s;
    -moz-transition: filter 0.2s;
    -ms-transition: filter 0.2s;
    -o-transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
      color: var(--support-color-1);
      transition: filter 0.2s;
      -webkit-transition: filter 0.2s;
      -moz-transition: filter 0.2s;
      -ms-transition: filter 0.2s;
      -o-transition: filter 0.2s;
    }
  }

  @media (max-width: 576px) {
    .sobre-home .btn {
      margin-bottom: var(--gap-md);
    }
  }
`;

export const SubmitButton = styled.button`
  & {
    border: none;
    background: var(--color-support-1);
    color: var(--color-support-3);
    cursor: pointer;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-support-1);
  }
`;
