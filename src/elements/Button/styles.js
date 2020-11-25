import styled from 'styled-components'
import { layout } from 'styled-system'

export const ButtonElement = styled.button`
  color: #ffffff;
  padding: 8px 12px;
  min-width: 120px;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  background: #c4c4c4;
  background-blend-mode: overlay;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: transparent;
  border: 1px solid #888888;
  ${layout};

  &:hover {
    transition: all 0.2s linear;
    color: #f9e3e3;
    border: 1px solid #f9e3e3;
    transform: translate(2px, -4px);
  }
`
