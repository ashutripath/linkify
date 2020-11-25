import styled, { css } from 'styled-components'

const selectedStyles = ({ isActive, orientation }) => {
  return (
    isActive &&
    css`
      border-bottom: 2px solid blue;
      border-right: ${(orientatio) => (orientation === 'vertical' ? '2px solid blue' : 'none')};
      color: blue;
      font-weight: bold;
    `
  )
}

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid grey;
`

export const TabButton = styled.div`
  padding: 10px 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'grey' : 'inherit')};
  ${selectedStyles}
`

export const Content = styled.div`
  padding: 20px;
`

const orientationStyles = ({ orientation }) => {
  switch (orientation) {
    case 'vertical':
      return css`
        & {
          flex-direction: row;
          height: 100%;
        }

        ${TabsContainer} {
          width: auto;
          flex-direction: column;
          border-bottom: none;
          border-right: 1px solid grey;
          height: 100%;
        }

        ${TabButton} {
          border-bottom: none;
          padding: 10px 20px;
        }
      `
    default:
      return null
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${orientationStyles}
`
