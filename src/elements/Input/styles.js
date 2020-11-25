import styled, { css } from 'styled-components'
import { layout, space } from 'styled-system'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  ${layout};
  ${space};
`

const variantStyle = ({ variant, isSelected }) => {
  switch (variant) {
    case 'underlined':
      return css`
        color: #fff;
        border: none;
        border-bottom: 1px solid #888888;
        border-radius: 0px;
      `
    case 'select':
      return css`
        cursor: pointer;
        ${isSelected &&
        css`
          text-align: left;
        `}
      `
    default:
      return null
  }
}

export const BaseInput = styled.input`
  padding: 1rem;
  background: inherit;
  outline: none;
  border: 1px solid #888888;
  font-size: 1.6rem;
  width: 100%;
  color: #fff;
  ::placeholder {
    color: darkgray;
    font-weight: normal;
  }
  ${variantStyle};
  ${layout};
`
export const SelectedTick = styled.div`
  height: inherit;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  background: transparent;
  position: relative;
  border: 1px solid #888888;
  border-left: none;
  ${layout};

  &::after {
    content: '';
    position: absolute;
    transform: rotate(45deg);
    background: yellow;
    top: 8px;
    height: 24px;
    width: 1px;
    right: 14px;
  }

  &::before {
    content: '';
    position: absolute;
    background: yellow;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 8px;
    left: 12px;
    height: 12px;
    width: 1px;
  }
`
