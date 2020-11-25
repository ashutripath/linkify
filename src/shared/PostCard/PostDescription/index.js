import React from 'react'
import PropTypes from 'prop-types'

import { Container, Description } from './styles'

function PostDescription(props) {
  const { description } = props

  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  )
}

PostDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default PostDescription
