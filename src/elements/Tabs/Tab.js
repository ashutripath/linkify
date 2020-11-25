import React from 'react'
import PropTypes from 'prop-types'

import { TabButton } from './styles'

function Tab(props) {
  const { label, tabKey, onClick, activeKey, orientation, disabled } = props
  const isActive = activeKey === tabKey

  return (
    <TabButton
      id={tabKey}
      onClick={disabled ? undefined : (e) => onClick(e.target.id)}
      isActive={isActive}
      orientation={orientation}
      disabled={disabled}
    >
      {label}
    </TabButton>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  tabKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  orientation: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Tab.defaultProps = {
  onClick: () => {},
  disabled: false,
}

export default React.memo(Tab)
