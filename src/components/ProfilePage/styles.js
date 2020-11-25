import styled from 'styled-components'

import { Image, Card, Button } from 'elements'

export const Container = styled.div`
  /* background: ${({ theme }) => theme.colors.backGroundColor}; */
  height: 100%;
  width: 100%;
  padding: 100px 180px;
`

export const TopSectionConatiner = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`

export const ProfileImage = styled(Image)`
  height: 100px;
  width: 100px;
  margin-bottom: 1rem;
  border-radius: 10%;
  object-fit: cover;
`

export const NameAndEmail = styled.div`
  margin-left: 3rem;
`

export const Name = styled.p`
  font-size: 2rem;
`

export const Email = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  margin-top: 0.8rem;
`

export const StyledFileInput = styled.input`
  font-size: 1.6rem;
`

export const Lable = styled.label`
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const YourTimeline = styled.p`
  font-size: 2.4rem;
  padding: 3rem 0 0;
`

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ImageOptionsButton = styled(Button)`
  align-self: flex-end;
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 40px 30px;
  margin-top: 20px;
`
