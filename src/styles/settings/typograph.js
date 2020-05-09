import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --font-primary: ${(props) => props.fontPrimary};
        --font-secondary: ${(props) => props.fontSecondary}
    }


`;

export default GlobalStyle;
