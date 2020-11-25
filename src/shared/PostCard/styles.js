import styled from 'styled-components'
import { space } from 'styled-system'

import { Image, Card } from 'elements'
import InfoIcon from 'elements/Icon/InfoIcon'

export const CardContainer = styled(Card)`
  padding: 0px;
  display: flex;
  border: none;
  border: 1px solid #88888829;
  flex-direction: column;
  border-radius: 2px;
  position: relative;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem 1rem;
`

export const Thumbnail = styled(Image)`
  height: 150px;
  width: 100%;
`

export const PostTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 1.4rem;
`

export const PublisherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PublisherInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PublisherImage = styled(Image)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
`

export const PusblisherTitle = styled.p`
  font-size: 1.2rem;
  margin-left: 1.4rem;
  ${space};
`

export const PostDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
  font-weight: 400;
  flex: 1;
  line-height: 1.4;
`

export const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`

export const StyledInfoIcon = styled(InfoIcon)`
  height: 20px;
  width: 20px;
  fill: white;
  cursor: pointer;
`
