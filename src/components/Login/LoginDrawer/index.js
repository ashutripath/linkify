import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { startGoogleLogin } from 'redux/login/action'
import { StyledDrawer, DrawerHeader, DrawerBody, LoginButton, DrawerFooter } from './styles'

function LoginDrawer(props) {
  const { isOpen, onClose } = props
  const dispatch = useDispatch()

  const handleGoogleLoginClick = () => dispatch(startGoogleLogin())

  return (
    <StyledDrawer onClose={onClose} isOpen={isOpen} closeable>
      <DrawerHeader>Login with your suitable option</DrawerHeader>
      <DrawerBody>
        <LoginButton onClick={handleGoogleLoginClick}>Sign In with Google</LoginButton>
        <LoginButton onClick={handleGoogleLoginClick} style={{ marginTop: '20px' }}>
          Sign Using Phone Number
        </LoginButton>
        <LoginButton onClick={handleGoogleLoginClick} style={{ marginTop: '20px' }}>
          Sign Using Twiter
        </LoginButton>
        <LoginButton onClick={handleGoogleLoginClick} style={{ marginTop: '20px' }}>
          Sign Using Facebook
        </LoginButton>
      </DrawerBody>
      <DrawerFooter>Virtually every writer I know would rather be a musician. ― Kurt Vonnegut</DrawerFooter>
    </StyledDrawer>
  )
}

LoginDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

LoginDrawer.defaultProps = {}

export default LoginDrawer
