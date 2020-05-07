import styled from 'styled-components';

export const Footer = styled.footer`

    & {
        padding: var(--gap-lg);
        background: {(props) => props.background};
    }

`;
