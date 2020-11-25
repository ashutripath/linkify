import styled from 'styled-components'

import { Image } from 'elements'

export const DefaultImagesContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const DefaultImage = styled(Image)`
  margin-bottom: 0px;
  cursor: pointer;
  border-radius: 10%;
  height: 100px;
  width: 100px;
  margin: 20px;
  object-fit: cover;
`
