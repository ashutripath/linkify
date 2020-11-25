import styled from 'styled-components'

export const Container = styled.div`
  /* background: ${({ theme }) => theme.colors.backGroundColor}; */
  height: 100%;
  width: 100%;
  padding: 100px 180px;
  min-height: 100vh;
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 60px 30px;
  margin-top: 40px;
`
