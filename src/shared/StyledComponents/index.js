import styled from 'styled-components'
import { color } from 'styled-system'

export const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  height: 20px;
  width: 20px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    width: 2px;
    height: 20px;
    background-color: white;
    ${color};
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`
