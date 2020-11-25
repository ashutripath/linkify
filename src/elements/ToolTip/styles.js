import styled from 'styled-components'

export const Tip = styled.div`
  position: absolute;
  left: ${({ parentPosition }) => parentPosition.left + 10}px;
  top: ${({ parentPosition }) => parentPosition.top}px;
`

export const Inner = styled.div`
  padding: 5px 10px;
  background-color: grey;
  color: white;
  font-size: 12px;
  border-radius: 5px;
`

export const Parent = styled.div`
  box-sizing: border-box;
`
