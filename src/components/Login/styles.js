import styled from 'styled-components'

import { Button, Card } from 'elements'
import homebg from 'assets/homebg8.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 30px 80px;
  /* background-image: url(${homebg}); */
  background: black;
  background-position: center center;
  overflow-x: hidden;
`

export const CardContainer = styled(Card)`
  width: 400px;
`

export const CardsText = styled.p`
  font-size: 2rem;
  text-align: left;
`

export const SignInButton = styled(Button)`
  margin-top: 100px;
  width: 400px;
  height: 50px;
  font-weight: normal;
`
