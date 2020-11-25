import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { Modal, Loader } from 'elements'

import { defaultImagesSelector, isFetchingDefaultImagesSelector } from 'redux/profile/selectors'
import { startAddingDefaultPic } from 'redux/profile/action'
import { DefaultImagesContainer, DefaultImage } from './styles'

function DefaultPics(props) {
  const { isOpen, onClose } = props
  const dispatch = useDispatch()

  const defaultImages = useSelector(defaultImagesSelector)
  const isFetchingDefaultImages = useSelector(isFetchingDefaultImagesSelector)

  function handleAddDefaultPic(event) {
    event.persist()
    const imageUrl = event.target.src
    dispatch(startAddingDefaultPic(imageUrl))
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} width="800px" autoDismiss={false}>
      <Modal.Header>Select a profile option if you want to.</Modal.Header>
      <Modal.Body>
        <DefaultImagesContainer>
          {defaultImages.map((imageUrl) => {
            return <DefaultImage src={imageUrl} onClick={handleAddDefaultPic} key={imageUrl} />
          })}
        </DefaultImagesContainer>
        <p>I am hedaer</p>
      </Modal.Body>
      {isFetchingDefaultImages && <Loader />}
    </Modal>
  )
}

DefaultPics.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DefaultPics
