import styled from 'styled-components'
import { layout } from 'styled-system'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  width: 500px;
  margin: 1.75rem auto;
  background: padding-box rgba(255, 255, 255);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-image: initial;
  border-radius: 3px;
  border-width: 1px;
  ${layout};
`

export const Header = styled.div`
  padding: 2rem;
  margin: 0;
  border-bottom: 1px solid rgba(222, 226, 230);
  font-size: 2.4rem;
`

export const Body = styled.div`
  padding: 1rem;
`
