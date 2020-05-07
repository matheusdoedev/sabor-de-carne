import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    .container {
        max-width: 960px;
    }

    @media (max-width: 768px) {
        .container {
            max-width: 720px;
            margin: 0 auto;
        }
    }

    @media (max-width: 576px) {
        .container {
            max-width: 300px;
            flex-direction: column;
        }
    }

`;

export default GlobalStyle;