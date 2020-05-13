import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: ${(props) => props.primary};
        --color-secondary: ${(props) => props.secondary};
        --color-support-1: ${(props) => props.support1};
        --color-support-2: ${(props) => props.support2};
        --color-support-3: ${(props) => props.support3};
    }
`;

export default GlobalStyle;
