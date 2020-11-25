/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import Drawer from '../elements/Drawer'

export default {
  title: 'Drawer',
  component: Drawer,
}

function DrawerElement(props) {
  const { position } = props
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div>
      <button type="button" onClick={() => setIsDrawerOpen(true)}>
        Click Me
      </button>
      <Drawer onClose={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen} closeable position={position}>
        <Drawer.Header>I am Header</Drawer.Header>
        <Drawer.Body> Yep I am drawer Body</Drawer.Body>
        <Drawer.Footer>I am footer</Drawer.Footer>
      </Drawer>
    </div>
  )
}

export const rightDrawer = () => <DrawerElement position="left" />
export const leftDrawer = () => <DrawerElement position="right" />
export const topDrawer = () => <DrawerElement position="top" />
export const bottomDrawer = () => <DrawerElement position="bottom" />
