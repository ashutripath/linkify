import React, { useState } from 'react'

import Input from 'elements/Input'

export default {
  title: 'Input',
  component: Input,
}

export const BaseInput = () => <Input type="text" name="firstname" placeholder="First name" value="Button" width="200px" />

export const SelectInputButton = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      type="button"
      name="firstname"
      placeholder="First name"
      value="Button"
      variant="select"
      onClick={(e) => setValue(e.target.value)}
      width="200px"
      isSelected={value === 'Button'}
    />
  )
}
