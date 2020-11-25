import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const Container = styled.div`
  ${layout};
  ${space};
`

export const Img = styled('img')`
  width: inherit;
  height: inherit;
  box-sizing: content-box;
  object-fit: cover;
  border-radius: inherit;
  ${layout};
  ${space};
`
