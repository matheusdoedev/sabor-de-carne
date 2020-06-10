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
        --gap-sm: var(--gap);
        --gap-md: var(--gap-sm);
        --gap-lg: var(--gap-md);
        }
    }

`;

export default GlobalStyle;
