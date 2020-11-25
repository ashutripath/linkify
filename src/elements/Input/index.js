import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TimelineMax } from 'gsap/all'

import { Container, BaseInput, SelectedTick } from './styles'

function Input(props) {
  const { name, type, autoComplete, variant, width, onClick, isSelected, ...rest } = props
  const [tl] = useState(new TimelineMax())
  const card1Ref = useRef(null)

  useEffect(() => {
    if (card1Ref.current) {
      tl.from(card1Ref.current, 1, { x: -50, opacity: 0 }).to(card1Ref.current, 0, { x: 0, opacity: 1 })
    }
  }, [tl, isSelected])

  function handleClick(e) {
    onClick(e)
  }

  return (
    <Container width={width} ref={card1Ref}>
      <BaseInput name={name} type={type} autoComplete={autoComplete} {...rest} onClick={handleClick} isSelected={isSelected} variant={variant} />
      {isSelected && variant === 'select' && <SelectedTick ref={card1Ref} />}
    </Container>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoComplete: PropTypes.bool,
  onClick: PropTypes.bool,
  width: PropTypes.string,
  variant: PropTypes.string,
  isSelected: PropTypes.string,
}

Input.defaultProps = {
  autoComplete: false,
  onClick: () => {},
  width: '100%',
  variant: 'default',
  isSelected: false,
}

export default Input
