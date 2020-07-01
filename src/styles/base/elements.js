import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    h1,h2,h3,h4,h5,h6 {
        line-height: 1em;
        font-family: var(--font-primary);
        text-transform: uppercase;
        font-weight: 700;
    }

    h1 {
        font-size: 3rem;

        @media (max-width: 767.98px) {
            font-size: 2.25rem;
        }
    }
    
    h2 {
        font-size: 2.25rem;

        @media (max-width: 767.98px) {
            font-size: 1.5rem;
        }
    }

    h3 {
        font-size: 1.5rem;

        @media (max-width: 767.98px) {
            font-size: 1.125rem;
        }
    }

    a {
        padding: .625rem;
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }

    p, label, input, a, button, textarea, li  {
        line-height: 1.5em;
        font-weight: 400;
        font-family: var(--font-secondary);

        @media (max-width: 576px) {
            max-width: 100%;
        }    
    }
    
    p, label, input, li {
        font-size: 1rem;  
        opacity: 80%;

        @media (max-width: 767.98px) {
            font-size: .875rem;
        }
    }

    button, a {
        font-size: 1.125rem;
        opacity: 90%;

        @media (max-width: 767.98px) {
            font-size: .875rem;
        }
    }

    @media (max-width: 576px) {
        a {
            font-size: .875em;
            max-width: 100%;
        }
    }
`;

export default GlobalStyle;
