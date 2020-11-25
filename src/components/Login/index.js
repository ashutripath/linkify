import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TimelineMax } from 'gsap/all'

import { Card } from 'elements'
import LoginDrawer from './LoginDrawer'
import { Container, CardContainer, CardsText, SignInButton } from './styles'

function Login(props) {
  const { isUserLoggedIn, history } = props
  const [showLoginOption, setShowLoginOption] = useState(false)
  const [tl] = useState(new TimelineMax())

  const card1Ref = useRef(null)
  const card2Ref = useRef(null)

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/')
    } else {
      history.push('/login')
    }
  }, [isUserLoggedIn, history])

  useEffect(() => {
    if (card1Ref.current) {
      tl.from(card1Ref.current, 1, { x: -400, opacity: 0 }).to(card1Ref.current, 0, { x: 0, opacity: 0.5 })
      tl.from(card1Ref.current, 0.5, { y: 200, opacity: 0.5 }).to(card1Ref.current, 0, { y: 0, opacity: 1 })
    }
  }, [tl])

  return (
    <Container ref={card1Ref}>
      <Card width="700px">
        <CardsText>PsyCloud</CardsText>
      </Card>
      <CardContainer mt="40px" ref={card2Ref}>
        <CardsText>“There is no feeling, except the extremes of fear and grief, that does not find relief in music.”</CardsText>
      </CardContainer>
      <CardContainer alignSelf="flex-end">
        <CardsText>“Music produces a kind of pleasure which human nature cannot do without.”</CardsText>
      </CardContainer>
      <CardContainer>
        <CardsText>
          “If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.”
        </CardsText>
      </CardContainer>
      <CardContainer alignSelf="flex-end">
        <CardsText>Lets Share Music.</CardsText>
      </CardContainer>
      ``
      <SignInButton onClick={() => setShowLoginOption(true)}>Login With us</SignInButton>
      <LoginDrawer isOpen={showLoginOption} onClose={() => setShowLoginOption(false)} />
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
}

export default Login
