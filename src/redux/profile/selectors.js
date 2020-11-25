import { createSelector } from 'reselect'

import { status } from 'redux/constants'

// const profileDataSelector = (state) => state.profile

const defaulImagesStateSelector = (state) => state.profile.defaultImages

export const defaultImagesSelector = createSelector(defaulImagesStateSelector, (defaulImagesState) => defaulImagesState.images)

export const isFetchingDefaultImagesSelector = createSelector(defaulImagesStateSelector, (defaulImagesState) => defaulImagesState.isFetchingDefaultImages)

export const postsStateSelector = (state) => state.profile.posts

export const userPostsSelector = createSelector(postsStateSelector, (postsState) => {
  const posts = Object.values(postsState.data || {})
  if (posts.length) {
    return posts
  }
  return []
})

export const isFetchingUserPostsSelector = createSelector(postsStateSelector, (postsState) => {
  const postStatus = postsState.status
  return postStatus === status.idle || postStatus === status.pending
})
