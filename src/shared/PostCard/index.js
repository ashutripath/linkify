import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import PostDescription from './PostDescription'
import { CardContainer, Thumbnail, PostContent, PostTitle, PublisherContainer, TitleInfo, PublisherInfo, PublisherImage, PusblisherTitle, StyledInfoIcon } from './styles'

function PostCard(props) {
  const [showDescription, setShowDescription] = useState(false)
  const {
    post: { data, handledBy, userData },
    showUserData,
  } = props
  const { title, logo, url: contentUrl, image = {}, description } = data || {}
  const { url: thumbnailUrl } = image
  const { url: publisherImage } = logo || {}
  let spotifyEmbbedUrl = ''

  const isSpotifyHandled = handledBy === 'spotify'
  const isPlayerHandled = handledBy === 'player'
  const isOtherHandled = handledBy === 'other'

  if (isSpotifyHandled) {
    const sUrl = contentUrl
    const splitArr = sUrl.split('https://open.spotify.com')
    splitArr[1] = '/embed' + splitArr[1]
    spotifyEmbbedUrl = 'https://open.spotify.com' + splitArr[1]
  }

  function handleInfoClick() {
    setShowDescription((prevState) => !prevState)
  }

  function renderThumbNail() {
    if (isPlayerHandled) {
      return <ReactPlayer url={contentUrl} height="150px" width="100%" />
    }

    if (isSpotifyHandled) {
      return <iframe src={spotifyEmbbedUrl} height="150px" width="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify" />
    }

    if (isOtherHandled) {
      return (
        <a href={contentUrl} target="_blank" rel="noreferrer">
          <Thumbnail src={thumbnailUrl} />
        </a>
      )
    }
  }

  return (
    <CardContainer>
      {renderThumbNail()}
      <PostContent>
        <TitleInfo>
          <PublisherImage src={publisherImage} />
          <PostTitle>{title}</PostTitle>
        </TitleInfo>

        <PublisherContainer>
          {showUserData && (
            <PublisherInfo>
              <PublisherImage mr="2rem" src={userData.imageUrl} />
              <PusblisherTitle ml="0">{userData.name}</PusblisherTitle>
            </PublisherInfo>
          )}
          <StyledInfoIcon onClick={handleInfoClick} />
        </PublisherContainer>
      </PostContent>
      {!!description && showDescription && <PostDescription description={description} />}
    </CardContainer>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  showUserData: PropTypes.bool,
}

PostCard.defaultProps = {
  showUserData: true,
}

export default PostCard
