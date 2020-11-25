import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { Drawer, Input, Loader } from 'elements'

import { startGettingOgData } from 'redux/ogData/action'
import { ogDataSelector, isLoadingOgDataSelector } from 'redux/ogData/selectors'
import { userDataSelector } from 'redux/user/selectors'
import { ContentContainer, PostContent, Image, Publisher, Title, PublisherContainer, PostTypeContainer, PostType, SubmitButton, containerProps } from './styles'

export default function AddLink(props) {
  const { isOpen, onClose, onSubmitLink, isPosting } = props

  const [type, setType] = useState({
    postType: 'Public',
    postCategory: '',
  })

  const dispatch = useDispatch()
  const ogData = useSelector(ogDataSelector)
  const isLoadingOgData = useSelector(isLoadingOgDataSelector)
  const userData = useSelector(userDataSelector)

  const { title, publisher, image, logo } = ogData || {}
  const { url: thumbNailUrl } = image || {}
  const { url: publisherImage } = logo || {}

  function handleKeyPress(e) {
    e.persist()
    if (e.key === 'Enter') {
      dispatch(startGettingOgData(e.target.value))
    }
  }

  function handleClick(e) {
    const { name, value } = e.target
    setType({
      ...type,
      [name]: value,
    })
  }

  function handleSubmitPost() {
    const { postType, postCategory } = type
    const metaData = {
      isPublic: postType.toLowerCase() === 'public',
      category: postCategory.toLowerCase(),
      userData: {
        uuid: userData.uuid,
        name: userData.name,
        imageUrl: userData.imageUrl,
      },
    }
    onSubmitLink(ogData, metaData)
  }

  return (
    <Drawer isOpen={isOpen} closeable onClose={onClose}>
      <Drawer.Header>Post Your Magic Link</Drawer.Header>
      <Drawer.Body>
        <Input type="text" name="post" placeholder="Paste your magic link" as="textarea" height="70px" onKeyPress={handleKeyPress} m={0} />
        {ogData ? (
          <ContentContainer>
            <PostContent>
              <Image height="200px" width="100%" src={thumbNailUrl} />
              <Title>{title}</Title>

              <PublisherContainer>
                <Image height="40px" width="40px" src={publisherImage} borderRadius="50%" />
                <Publisher>{publisher}</Publisher>
              </PublisherContainer>
            </PostContent>

            <PostTypeContainer>
              <PostType>Type :-</PostType>
              <Input type="button" name="postType" variant="select" value="Public" width="140px" onClick={handleClick} isSelected={type.postType === 'Public'} />
              <Input type="button" name="postType" variant="select" value="Private" ml={2} width="140px" onClick={handleClick} isSelected={type.postType === 'Private'} />
            </PostTypeContainer>

            <PostTypeContainer>
              <PostType>Category :-</PostType>
              <Input
                type="button"
                name="postCategory"
                variant="select"
                value="Music"
                width="140px"
                onClick={handleClick}
                isSelected={type.postCategory === 'Music'}
                containerProps={containerProps}
              />
              <Input
                type="button"
                name="postCategory"
                variant="select"
                value="Spirituality"
                width="140px"
                onClick={handleClick}
                isSelected={type.postCategory === 'Spirituality'}
                containerProps={containerProps}
              />
              <Input
                type="button"
                name="postCategory"
                variant="select"
                value="Article"
                width="140px"
                onClick={handleClick}
                isSelected={type.postCategory === 'Article'}
                containerProps={containerProps}
              />
              <Input
                type="button"
                name="postCategory"
                variant="select"
                value="Others"
                width="140px"
                onClick={handleClick}
                isSelected={type.postCategory === 'Others'}
                containerProps={containerProps}
              />
            </PostTypeContainer>
          </ContentContainer>
        ) : null}
        {ogData && <SubmitButton onClick={handleSubmitPost}>Post Your Music</SubmitButton>}
        {(isPosting || isLoadingOgData) && <Loader loadingText={isLoadingOgData ? 'Hold on bro...' : 'Submitting...'} />}
      </Drawer.Body>
    </Drawer>
  )
}

AddLink.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitLink: PropTypes.func.isRequired,
  isPosting: PropTypes.bool.isRequired,
}
