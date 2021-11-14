import React from 'react';
import styled from 'styled-components/macro';

import {WEIGHTS} from '../../constants';

const NavLink = ({children, ...delegated}) => {
    return (
        <Wrapper {...delegated}>
            <AnimationWrapper>
                {children}
                <HoverText aria-hidden={true}>
                    {children}
                </HoverText>
            </AnimationWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  padding: 0px 0.2rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const AnimationWrapper = styled.div`
  display: block;
  will-change: transform;
  
  transition: transform 600ms;
  
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:is(:hover, :focus) & {
      transform: translateY(-100%);
      transition-duration: 200ms;
    }
  }
`

const HoverText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  font-weight: ${WEIGHTS.bold};
`


export default NavLink;
