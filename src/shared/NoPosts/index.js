import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './styles'

function NoPosts(props) {
  const { title } = props
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

NoPosts.propTypes = {
  title: PropTypes.string,
}

NoPosts.defaultProps = {
  title: 'No Data Found.',
}

export default NoPosts
