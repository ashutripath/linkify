/* eslint-disable react/jsx-props-no-spreading, max-len */

import React from 'react'

import StyledSVG from './styles'

export default (props) => (
  <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <polyline fill="none" points="3,15.5 12,6.5 21,15.5 " stroke="#000000" strokeWidth="1" />
  </StyledSVG>
)
