import { createSelector } from 'reselect'
import { status as apiStatus } from 'redux/constants'

export const homeStateSelector = (state) => state.home

export const isAddLinkDrawerOpenSelector = createSelector(homeStateSelector, (homeState) => homeState.isAddLinkDrawerOpen)

export const filterBySelector = createSelector(homeStateSelector, (homeState) => homeState.filterBy)

export const postsSelector = createSelector(homeStateSelector, filterBySelector, (homeState, filterBy) => {
  const { posts } = homeState
  if (Object.keys(posts).length) {
    if (filterBy === 'all') {
      return Object.values(posts)
    }
    return Object.values(posts).filter((post) => post.category === homeState.filterBy)
  }
  return []
})

export const isLoadingPostsSelector = createSelector(homeStateSelector, (homeState) => {
  const status = homeState.postsStatus
  if (status === apiStatus.idle || status === apiStatus.pending) {
    return true
  }
  return false
})

export const isAddingPostSelector = createSelector(homeStateSelector, (homeState) => homeState.isAddingPost)
