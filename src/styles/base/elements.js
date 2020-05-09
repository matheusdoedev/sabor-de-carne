import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
