import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TimelineMax } from 'gsap/all'

import { Container, LoadingText } from './styles'

function Loader(props) {
  const { size, position, textStyles, loadingText, ...restProps } = props
  const [tl] = useState(new TimelineMax({ repeat: -1 }))
  const loadingTextRef = useRef(null)

  useEffect(() => {
    if (loadingTextRef.current) {
      tl.from(loadingTextRef.current, 1, { opacity: 0 }, '+0.1')
      tl.to(loadingTextRef.current, 1, { opacity: 1 }, '+0.4')
      tl.from(loadingTextRef.current, 1, { opacity: 0 }, '+0.1')
      tl.to(loadingTextRef.current, 1, { opacity: 1 }, '+0.4')
      tl.yoyo(true)
    }
  })

  return (
    <Container position={position} {...restProps}>
      <LoadingText size={size} ref={loadingTextRef} style={textStyles}>
        {loadingText}
      </LoadingText>
    </Container>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
  position: PropTypes.string,
  loadingText: PropTypes.string,
  textStyles: PropTypes.object,
}

Loader.defaultProps = {
  size: 20,
  position: 'fixed',
  loadingText: 'Magic on Progress...',
  textStyles: {},
}

export default Loader
