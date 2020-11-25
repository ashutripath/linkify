import React, { useState } from 'react'

import Modal from 'elements/Modal'
import Button from 'elements/Button'

export default {
  title: 'Modal',
  component: Modal,
}

export const BaseModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button type="submit" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} width="800px">
        <Modal.Header>
          <p style={{ margin: '0px' }}>I am header</p>
        </Modal.Header>
        <Modal.Body>
          <p style={{ margin: '0px' }}>I am Body</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
