import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Card = React.forwardRef((props, ref) => {
  const { children, ...restProps } = props

  return (
    <Container ref={ref} {...restProps}>
      {children}
    </Container>
  )
})

Card.propTypes = {
  children: PropTypes.node.isRequired,
  ref: PropTypes.object.isRequired,
}

export default Card
