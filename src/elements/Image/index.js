import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import useIsInsideViewPort from 'hooks/useViewPortObserver'
import homebg from 'assets/homebg.jpg'
import { Container, Img } from './styles'

function BaseImage(props) {
  const { height, width, alt, src, ...restProps } = props
  const imageRef = useRef(null)
  const [isError, setIsError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const isInsideViewPortPort = useIsInsideViewPort(imageRef)
  let imageSrc = homebg

  if (!isInsideViewPortPort || isError || !isLoaded) {
    imageSrc = homebg
  } else {
    imageSrc = src
  }

  return (
    <Container height={height} width={width} ref={imageRef} {...restProps}>
      <Img alt={alt} src={imageSrc} onError={() => setIsError(true)} onLoad={() => setIsLoaded(true)} />
    </Container>
  )
}

BaseImage.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string,
}

BaseImage.defaultProps = {
  height: 30,
  width: 30,
  alt: 'Image',
  src: '',
}

export default BaseImage
