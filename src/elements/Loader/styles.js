import styled from 'styled-components'

export const Container = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  background: #000000e0;
`

export const LoadingText = styled.p`
  font-size: 2rem;
  border: 1px solid #8888;
  padding: 1rem 2rem;
  text-align: center;
`
