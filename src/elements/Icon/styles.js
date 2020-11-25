import styled, { css } from 'styled-components'
import { width, height, space, color } from 'styled-system'

export const fill = (props) =>
  props.fill &&
  css`
    fill: ${props.fill};
  `

export const stroke = (props) =>
  props.stroke &&
  css`
    stroke: ${props.stroke};
  `

export default styled('svg')`
  ${width};
  ${height};
  ${space};
  ${fill};
  ${stroke};
  ${color};
`
