import React from 'react'
import PropTypes from 'prop-types'

import { ButtonElement } from './styles'

function Text(props) {
  const { children, ...restProps } = props

  return <ButtonElement {...restProps}>{children}</ButtonElement>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
