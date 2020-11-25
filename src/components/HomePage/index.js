import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Loader } from 'elements'
import Header from 'shared/Header'
import AddLink from 'shared/AddLink'
import PostCard from 'shared/PostCard'
import NoPosts from 'shared/NoPosts'

import { toggleAddLinkDrawer, startAddPost } from 'redux/home/action'
import { isAddLinkDrawerOpenSelector, postsSelector, isLoadingPostsSelector, isAddingPostSelector } from 'redux/home/selectors'
import { isFetchingUserDataSelector } from 'redux/user/selectors'
import { Container, PostsContainer } from './styles'

function HomePage() {
  const dispatch = useDispatch()
  const isAddLinkDrawerOpen = useSelector(isAddLinkDrawerOpenSelector)
  const isFetchingUserData = useSelector(isFetchingUserDataSelector)
  const isLoadingPosts = useSelector(isLoadingPostsSelector)
  const posts = useSelector(postsSelector)
  const isAddingPost = useSelector(isAddingPostSelector)

  function handleSubmit(ogData, metaData) {
    dispatch(startAddPost(ogData, metaData))
  }

  // function handleSelection(item) {
  //   const bodyElement = document.body
  //   localStorage.setItem('bgColor', item.value)
  //   const bgColor = localStorage.getItem('bgColor')
  //   bodyElement.style.setProperty('background', bgColor)
  // }

  function renderPosts() {
    return posts.map((post) => {
      return <PostCard post={post} key={post.postId} />
    })
  }

  if (isFetchingUserData || isLoadingPosts) {
    return <Loader loadingText="Loading Posts ..." />
  }

  return (
    <Container>
      <Header showAddLink showFilter onAddLinkClick={() => dispatch(toggleAddLinkDrawer(true))} />
      <AddLink onClose={() => dispatch(toggleAddLinkDrawer(false))} isOpen={isAddLinkDrawerOpen} onSubmitLink={handleSubmit} isPosting={isAddingPost} />
      {posts.length ? <PostsContainer>{renderPosts()}</PostsContainer> : <NoPosts title="No Posts Yet." />}
    </Container>
  )
}

export default React.memo(HomePage)
