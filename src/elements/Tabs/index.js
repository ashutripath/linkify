import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'

import { Container, TabsContainer, Content } from './styles'

function Tabs(props) {
  const { children, activeKey, onTabChange, orientation } = props

  return (
    <Container orientation={orientation}>
      <h1>Add Animation to tab changes, add customTab node, disabled styled as well</h1>

      <TabsContainer>
        {children.map((child) => {
          const {
            props: { label, renderTab, disabled },
            key,
          } = child

          return renderTab ? (
            renderTab(orientation)
          ) : (
            <Tab tabKey={key} label={label} activeKey={activeKey} onClick={onTabChange} key={key} orientation={orientation} disabled={disabled} />
          )
        })}
      </TabsContainer>

      <Content>
        {children.map((child) => {
          if (child.key !== activeKey) return null
          return child.props.children
        })}
      </Content>
    </Container>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  activeKey: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  orientation: PropTypes.string,
}

Tabs.defaultProps = {
  children: null,
  orientation: 'horizontal',
}

export default Tabs
