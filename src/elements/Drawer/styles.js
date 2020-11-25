import styled, { css } from 'styled-components'
import { background } from 'styled-system'

const openStyles = ({ isOpen, position }) => {
  if (isOpen) {
    switch (position) {
      case 'left':
        return css`
          transform: translateX(0);
          ${'' /* border-right: 1px solid #888888; */}
          ${'' /* border-left: 1px solid #888888; */}
        `
      case 'right':
        return css`
          transform: translateX(0);
          ${'' /* border-right: 1px solid #888888; */}
          ${'' /* border-left: 1px solid #888888; */}
        `
      case 'top':
        return css`
          transform: translateY(0);
          ${'' /* border-top: 1px solid #888888; */}
          ${'' /* border-bottom: 1px solid #888888; */}
        `
      case 'bottom':
        return css`
          transform: translateY(0);
          ${'' /* border-top: 1px solid #888888; */}
          ${'' /* border-bottom: 1px solid #888888; */}
        `
      default:
        return null
    }
  }
}

const variantStyles = ({ position }) => {
  switch (position) {
    case 'left':
      return css`
        top: 0;
        left: 0;
        transform: translateX(-100%);
      `
    case 'right':
      return css`
        top: 0;
        right: 0;
        transform: translateX(100%);
      `
    case 'top':
      return css`
        top: 0;
        right: 0;
        width: 100%;
        height: 30%;
        transform: translateY(-100%);
      `
    case 'bottom':
      return css`
        bottom: 0;
        right: 0;
        width: 100%;
        height: 30%;
        transform: translateY(100%);
      `
    default:
      return null
  }
}

export const SideDrawer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 40%;
  height: 100%;
  background: #000b19;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-out;
  color: #fff;
  z-index: 999;
  ${variantStyles};
  ${openStyles};
  ${background};
`

export const BackDrop = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
  z-index: 10;
`

export const Header = styled.div`
  padding: 16px 20px;
  font-weight: 700;
  border-bottom: 1px solid #888888;
  /* border-top: 1px solid #888888; */
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;
`

export const Body = styled.div`
  padding: 10px;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  font-size: 1.6rem;
  padding: 16px 20px;
  border-top: 1px solid #888888;
  /* border-bottom: 1px solid #888888; */
  font-weight: 500;
  line-height: 1.5;
`
