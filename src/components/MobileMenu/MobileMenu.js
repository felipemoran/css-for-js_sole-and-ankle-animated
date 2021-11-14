/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content aria-label="Menu">
                <CloseButton onClick={onDismiss}>
                    <Icon id="close"/>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Filler/>
                <Nav>
                    <NavLink style={{"--index": 1}} href="/sale">Sale</NavLink>
                    <NavLink style={{"--index": 2}} href="/new">New&nbsp;Releases</NavLink>
                    <NavLink style={{"--index": 3}} href="/men">Men</NavLink>
                    <NavLink style={{"--index": 4}} href="/women">Women</NavLink>
                    <NavLink style={{"--index": 5}} href="/kids">Kids</NavLink>
                    <NavLink style={{"--index": 6}} href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <SubLink style={{"--index": 7}} href="/terms">Terms and Conditions</SubLink>
                    <SubLink style={{"--index": 8}} href="/privacy">Privacy Policy</SubLink>
                    <SubLink style={{"--index": 9}} href="/contact">Contact Us</SubLink>
                </Footer>
            </Content>
        </Overlay>
    );
};

const menuSlideDuration = '400ms'

const overlayFade = keyframes`
  0% {
    background: transparent;
  }

  100% {
    background: var(--color-backdrop);
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

  animation: ${overlayFade} ${menuSlideDuration} ease-out both;
  will-change: background;
`;

const slideInContent = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`

const fadeContent = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(-1 * var(--overfill));
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideInContent} ${menuSlideDuration} 150ms cubic-bezier(0, 0.6, 0.32, 1.06) backwards;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeContent} ${menuSlideDuration} 150ms ease-out backwards;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: -4px;
  right: var(--overfill);
  padding: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    top: 12px;
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const navLinkFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
  
  animation:
    ${navLinkFade}
    ${menuSlideDuration}
    calc(200ms + 50ms * var(--index))
    backwards;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  
  animation: 
    ${navLinkFade}
    ${menuSlideDuration}
    calc(400ms + 30ms * var(--index))
    backwards;
`;


export default MobileMenu;
