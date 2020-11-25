import React from 'react'

import Text from '../elements/Button'

export default {
  title: 'Text Elements',
  component: Text,
}

export const TextElement = () => <Text>Hello Button</Text>

TextElement.story = {
  name: 'to Storybooks',
}
