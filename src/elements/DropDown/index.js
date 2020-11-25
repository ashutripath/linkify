/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ArrowUp from 'elements/Icon/ArrowUp'
import ArrowDown from 'elements/Icon/ArrowDown'

import { Container, Header, Title, DataSection, ItemTitleContainer, ItemTitle, SelectedIcon } from './styles'

const DropDown = React.forwardRef((props, ref) => {
  const { data, optionBg, headerTitle, handleItemSelection, ...restProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(props.initlalId || '')
  const [selectedItem, setSelectedItem] = useState({})

  useEffect(() => {
    if (props.initlalId) {
      const item = data.filter((d) => d.id === props.initlalId)
      setSelectedItem(item[0])
      handleItemSelection(item[0])
    }
  }, [])

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  function handleSelection(e) {
    setSelectedId(e.target.id)
    const item = data.filter((d) => d.id.toString() === e.target.id)
    setSelectedItem(item[0])
    setIsOpen(false)
    handleItemSelection(item[0])
  }

  return (
    <Container {...restProps} ref={ref}>
      <Header onClick={handleToggle} className="dropdown-header">
        <Title className="dropdown-header__title">{selectedItem.title || headerTitle}</Title>
        {isOpen ? (
          <div>
            <ArrowDown height="20px" width="20px" />
          </div>
        ) : (
          <div>
            <ArrowUp height="16px" width="16px" />
          </div>
        )}
      </Header>
      {isOpen && (
        <DataSection className="dropdown-data">
          {data.map((item) => {
            const isSelected = selectedId === item.id.toString()
            return (
              <ItemTitleContainer bg={item.bg}>
                <ItemTitle key={item.id} id={item.id} onClick={handleSelection} isSelected={isSelected}>
                  {item.title}
                </ItemTitle>
                {isSelected && <SelectedIcon role="img"> ✔</SelectedIcon>}
              </ItemTitleContainer>
            )
          })}
        </DataSection>
      )}
    </Container>
  )
})

DropDown.propTypes = {
  data: PropTypes.array.isRequired,
  handleItemSelection: PropTypes.func,
  optionBg: PropTypes.string,
  headerTitle: PropTypes.string,
  initlalId: PropTypes.number,
}

DropDown.defaultProps = {
  handleItemSelection: () => {},
  optionBg: '',
  headerTitle: 'Select Youe Choice',
  initlalId: '',
}

export default DropDown
