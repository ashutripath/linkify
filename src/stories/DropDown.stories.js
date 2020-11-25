import React from 'react'

import DropDown from 'elements/DropDown'

export default {
  title: 'DropDown',
  component: DropDown,
}

const data = [
  {
    title: 'Color1',
    id: 1,
  },
  {
    title: 'Color2',
    id: 2,
  },
  {
    title: 'Color3',
    id: 3,
  },
  {
    title: 'Color4',
    id: 4,
  },
]

export const DefaultDropDown = () => <DropDown data={data} />
