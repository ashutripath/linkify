import styled from 'styled-components'

import { Card, DropDown } from 'elements'

export const Container = styled.div`
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 48%) 0px 2px 11px;
  z-index: 99;
`

export const LeftSection = styled.div`
  display: flex;
`

export const HeaderCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  box-shadow: none;
  border: none;
`

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StyledDropDown = styled(DropDown)`
  width: 150px;
  margin-left: 44px;

  & .dropdown-header {
    border: none;
    padding: unset;
  }
  & .dropdown-header__title {
    font-size: 1.6rem;
  }
  & .dropdown-data {
    margin-top: 14px;
  }
`
