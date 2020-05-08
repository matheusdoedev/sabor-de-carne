import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --gap: ${(props) => props.gap};
        --gap-sm: ${(props) => props.gapSM};
        --gap-md: ${(props) => props.gapMD};
        --gap-lg: ${(props) => props.gapLG};
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
