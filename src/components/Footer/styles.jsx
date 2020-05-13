/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { NavItem, NavMenu, NavLink } from '../../styles/objects/nav';
import { Paragraph } from '../../styles/objects/texts';

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-md);
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

export const FooterNavItem = styled(NavItem)`
  & {
    display: block !important;
    margin-bottom: var(--gap);
  }
`;

export const FooterNavMenu = styled(NavMenu)`
  & {
    display: block;
  }
`;

export const FooterNavLink = styled(NavLink)`
  & {
    color: var(--color-support-1);
  }
  &:hover {
    color: var(--color-primary);
  }
`;

export const Copy = styled(Paragraph)`
  & {
    margin-top: var(--gap-md);
    color: var(--color-support-2);
  }
`;
