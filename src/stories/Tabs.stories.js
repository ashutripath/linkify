import React, { useState } from 'react'

import Tabs from '../elements/Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
}

const TabsElement = (props) => {
  const { orientation } = props
  const [selectedTab, setSelectedTab] = useState('3')

  return (
    <div style={{ height: '100vh' }}>
      <Tabs
        activeKey={selectedTab}
        onTabChange={(selectedKey) => setSelectedTab(selectedKey)}
        orientation={orientation}
      >
        <div
          label="Gator"
          key="1"
          renderTab={(orientation) => <div style={{ padding: '10px' }}>CustomTab</div>}
        >
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc" key="2" disabled>
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus" key="3">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
        <div label="Final" key="4">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  )
}

export const verticalTab = () => <TabsElement orientation="vertical" />
export const horizontalTab = () => <TabsElement orientation="horizontal" />
export const disabledTab = () => <TabsElement orientation="horizontal" />
