import styled from 'styled-components'

import { Drawer, Button } from 'elements'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
  padding: 100px 200px;
`

export const StyledDrawer = styled(Drawer)`
  width: 500px;
`

export const DrawerHeader = styled(Drawer.Header)``

export const DrawerBody = styled(Drawer.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DrawerFooter = styled(Drawer.Footer)``

export const LoginButton = styled(Button)`
  width: 80%;
  padding: 16px 10px;
`
