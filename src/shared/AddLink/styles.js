import styled, { css } from 'styled-components'
import { layout, border } from 'styled-system'

import { Button, Card, Image as LazyImage } from 'elements'

export const ContentContainer = styled.div`
  margin-top: 1rem;
  flex: 1;
`

export const PostContent = styled(Card)`
  border: 1px solid #888888;
`

export const Image = styled(LazyImage)`
  ${layout};
  ${border};
`

export const PublisherContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Publisher = styled.p`
  font-size: 1.6rem;
  margin-left: 1rem;
`

export const Title = styled.p`
  font-size: 1.6rem;
  padding: 1.6rem 0rem;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;
  margin-top: 2rem;
`

export const PostTypeContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  /* border: none; */
`

export const PostType = styled.p`
  font-size: 1.6rem;
  margin-right: 1.8rem;
`

export const containerProps = css`
  margin: 2px;
`
