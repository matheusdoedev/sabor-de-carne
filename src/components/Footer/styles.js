/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-lg);
    background: ${(props) => props.background};
  }
`;

export const SocialMedias = styled.div`
  & {
    display: flex;
    flex-direction: row;
  }
`;

export const SocialMediaItem = styled.a`
  & {
    padding: 0;
    margin-right: var(--gap);
  }

  &:last-child {
    margin-right: 0;
  }
`;
