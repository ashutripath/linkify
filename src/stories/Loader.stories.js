import React from 'react'

import Loader from '../elements/Loader'

export default {
  title: 'Loader',
  component: Loader,
}

export const LoaderDefault = () => <Loader position="absolute" />

export const LoaderCustom = () => {
  return (
    <div style={{ height: '200px', width: '200px', position: 'absolute', background: 'red' }}>
      <Loader position="absolute" />
    </div>
  )
}
