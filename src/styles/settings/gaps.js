import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --gap: 1rem;
        --gap-sm: 1.5625rem;
        --gap-md: 2.5625rem;
        --gap-lg: 4.1875rem;
        --gap-xl: 6.8125rem;
    }

    @media (max-width: 576px) {
        :root {
        --gap-sm: 1rem;
        --gap-md: 1.5625rem;
        --gap-lg: 2.5625rem;
        --gap-xl: 4.1875rem;
        }
    }

`;

export default GlobalStyle;
