import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --gap: 16px;
        --gap-sm: 32px;
        --gap-md: 64px;
        --gap-lg: 128px;
    }

    @media (max-width: 576px) {
        :root {
        --gap-sm: 16px;
        --gap-md: 32px;
        --gap-lg: 64px;
        }
    }

`;

export default GlobalStyle;
