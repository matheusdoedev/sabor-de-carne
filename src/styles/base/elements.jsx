import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    h1,h2,h3,h4,h5,h6 {
        line-height: 1em;
        font-family: var(--font-primary);
        text-transform: uppercase;
    }
    
    a, label, input, button {
        line-height: 1.5em;
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: .875em;
    }

    @media (max-width: 576px) {
        a {
            font-size: .875em;
            max-width: 100%;
        }
    }

    section {
        padding: var(--gap-lg);
    }
`;

export default GlobalStyle;
