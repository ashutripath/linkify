import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { TimelineMax } from 'gsap/all'

import { Close } from 'shared/StyledComponents'
import { Container, Content, Header, Body } from './styles'

function Modal(props) {
  const [tl] = useState(new TimelineMax())
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)

  const { children, onClose, isOpen, autoDismiss = true, ...restProps } = props

  useEffect(() => {
    if (card1Ref.current) {
      tl.from(card1Ref.current, 0.8, { y: 500, opacity: 0 }).to(card1Ref.current, 0, { x: 0, opacity: 1 })
      tl.yoyo(true)
    }
  }, [tl, isOpen])

  useEffect(() => {
    if (card2Ref.current) {
      tl.from(card2Ref.current, 0.8, { x: 500, opacity: 0 }).to(card2Ref.current, 0, { x: 0, opacity: 1 })
      tl.yoyo(true)
    }
  }, [tl, isOpen])

  return ReactDOM.createPortal(
    isOpen ? (
      <Container onClick={autoDismiss ? onClose : () => {}} ref={card1Ref}>
        <Content {...restProps} ref={card2Ref}>
          <Close bg="black" onClick={onClose} />
          {children}
        </Content>
      </Container>
    ) : null,
    document.body,
  )
}

Modal.Header = function ModalHeader(props) {
  const { children, ...restProps } = props
  return <Header {...restProps}>{children}</Header>
}

Modal.Body = function ModalBody(props) {
  const { children, ...restProps } = props
  return <Body {...restProps}>{children}</Body>
}

Modal.Header.propTypes = {
  children: PropTypes.node,
}

Modal.Header.defaultProps = {
  children: null,
}

Modal.Body.propTypes = {
  children: PropTypes.node,
}

Modal.Body.defaultProps = {
  children: null,
}
export default Modal
