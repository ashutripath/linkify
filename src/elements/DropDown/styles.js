import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

export const Container = styled.div`
  width: 200px;
  position: relative;
  border-radius: 2px;
  z-index: 10;
  ${space};
  ${layout};
`

export const Header = styled.div`
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #888888;
  cursor: pointer;
  ${color};
`

export const Title = styled.div`
  font-size: 1.2rem;
`

export const DataSection = styled.div`
  position: absolute;
  width: 100%;
`

export const ItemTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  background-color: #514d5deb;
  ${color};
`

export const ItemTitle = styled.p`
  font-size: 1.4rem;
  color: white;
  margin: 0;
  padding: 1rem 1rem;
  width: 100%;
  cursor: pointer;
`

export const SelectedIcon = styled.span`
  font-size: 2rem;
  margin-right: 4px;
  ${color};
`
