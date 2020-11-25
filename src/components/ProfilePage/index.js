import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from 'shared/Header'
import PostCard from 'shared/PostCard'
import { Loader } from 'elements'
import NoPosts from 'shared/NoPosts'

import { userDataSelector } from 'redux/user/selectors'
import { startImageUpload, startGettingDefaultImages, startGettingUserPosts } from 'redux/profile/action'
import { userPostsSelector, isFetchingUserPostsSelector } from 'redux/profile/selectors'
import DefaultPics from './DefaultPics'
import {
  Container,
  TopSectionConatiner,
  ProfileImage,
  NameAndEmail,
  Name,
  Email,
  StyledFileInput,
  Lable,
  YourTimeline,
  ProfileDetails,
  ImageOptionsButton,
  PostsContainer,
} from './styles'

function ProfilePage() {
  const dispatch = useDispatch()
  const userData = useSelector(userDataSelector)
  const userPosts = useSelector(userPostsSelector)
  const isFetchingUserPosts = useSelector(isFetchingUserPostsSelector)

  const [isPicModalOpen, setIsPicModalOpen] = useState(false)

  useEffect(() => {
    dispatch(startGettingDefaultImages())
    dispatch(startGettingUserPosts())
  }, [])

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0]
      dispatch(startImageUpload(img))
    }
  }

  function renderPosts() {
    return userPosts.length ? (
      <PostsContainer>
        {userPosts.map((post) => {
          return <PostCard post={post} key={post.postId} showUserData={false} />
        })}
      </PostsContainer>
    ) : (
      <NoPosts title="You haven't posted anything yet." />
    )
  }

  function renderTopSection() {
    return (
      <TopSectionConatiner>
        <ProfileDetails>
          <Lable>
            <ProfileImage src={userData.imageUrl} />
            <StyledFileInput type="file" onChange={onImageChange} />
            Change ☝️
          </Lable>
          <NameAndEmail>
            <Name>{userData.name}</Name>
            <Email>{userData.email}</Email>
          </NameAndEmail>
        </ProfileDetails>
        <ImageOptionsButton onClick={() => setIsPicModalOpen(true)}>Default Pics</ImageOptionsButton>
      </TopSectionConatiner>
    )
  }

  function renderDefaultPicsModal() {
    return isPicModalOpen ? <DefaultPics isOpen={isPicModalOpen} onClose={() => setIsPicModalOpen(false)} /> : null
  }

  if (isFetchingUserPosts) {
    return <Loader loadingText="Getting Your Posts ..." />
  }

  return (
    <>
      <Container>
        <Header />
        {renderTopSection()}
        <YourTimeline>Your Timeline</YourTimeline>
        {renderPosts()}
        {renderDefaultPicsModal()}
      </Container>
    </>
  )
}

export default ProfilePage
