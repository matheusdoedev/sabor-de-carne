import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* fonts */

h1,h2,h3,h4 {
    line-height: 1em;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
}

h1 {
    font-weight: 900;
    font-size: 3em;
}

h2 {
    font-weight: 800;
    font-size: 2.25em;
}

h3 {
    font-weight: 700;
    font-size: 1.5em;
}

h4 {
    font-weight: 700;
    font-size: 1em;
}

p, a, label, input, button {
    line-height: 1.5em;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: .875em;
}

p {
    max-width: 30em;
}

p {
    opacity: .6;
}

/* others */

a {
    text-decoration: none;
    padding: 10px;
}

img {
    max-width: 100%;
    display: block;
}

@media (max-width: 576px) {
    h1 {
        font-size: 2.25em;
    }
    
    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.125em;
    }
    
    h4 {
        font-size: .875em;
    }
    
    p, a {
        font-size: .875em;
        max-width: 100%;
    }
}

`;

export default GlobalStyle;