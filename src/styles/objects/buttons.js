/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.a`
  & {
    display: inline-block;
    padding: 10px 25px 10px 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: ${(props) =>
      props.primary ? 'var(--color-secondary)' : 'var(--color-primary)'};
    color: var(--color-support-2);
    transition: filter 0.2s;
    -webkit-transition: filter 0.2s;
    -moz-transition: filter 0.2s;
    -ms-transition: filter 0.2s;
    -o-transition: filter 0.2s;
  }

  &:hover {
    filter: brightness(80%);
    transition: filter 0.2s;
    -webkit-transition: filter 0.2s;
    -moz-transition: filter 0.2s;
    -ms-transition: filter 0.2s;
    -o-transition: filter 0.2s;
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
