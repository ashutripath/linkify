import React from 'react'
import PropTypes from 'prop-types'

import { Close } from 'shared/StyledComponents'
import { SideDrawer, BackDrop, Header, Body, Footer } from './styles'

// TODO: add variantions, footer, theme and globalStyles
function Drawer(props) {
  const { isOpen, position, onClose, closeable, children, renderCloseIcon, ...rest } = props

  return (
    <>
      <SideDrawer isOpen={isOpen} position={position} {...rest}>
        {children}
        {closeable && renderCloseIcon(onClose)}
      </SideDrawer>
      {isOpen && <BackDrop onClick={() => onClose()} />}
    </>
  )
}

function defaultCloseButton(onClose) {
  return <Close onClick={() => onClose()} />
}

// eslint-disable-next-line react/prop-types
Drawer.Header = function DrawerHeader({ children, headerStyles, ...restProps }) {
  return (
    <Header {...restProps} {...headerStyles}>
      {children}
    </Header>
  )
}

// eslint-disable-next-line react/prop-types
Drawer.Body = function DrawerBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

// eslint-disable-next-line react/prop-types
Drawer.Footer = function DrawerFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  renderCloseIcon: PropTypes.node,
  closeable: PropTypes.bool,
  children: PropTypes.node,
}

Drawer.defaultProps = {
  renderCloseIcon: defaultCloseButton,
  position: 'right',
  closeable: false,
  children: null,
}

export default Drawer
