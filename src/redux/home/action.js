import { actionTypes } from './constants'

export function toggleAddLinkDrawer(isOpen) {
  return {
    type: actionTypes.TOGGLE_ADD_LINK_DRAWER,
    payload: isOpen,
  }
}

export function startAddPost(ogData, metaData) {
  return {
    type: actionTypes.START_ADD_POST,
    payload: ogData,
    metaData,
  }
}

export function successAddPost() {
  return {
    type: actionTypes.SUCCESS_ADD_POST,
  }
}

export function failedAddPost(error) {
  return {
    type: actionTypes.FAILED_ADD_POST,
    error,
  }
}

export function updatePosts(posts) {
  return {
    type: actionTypes.UPDATE_POSTS,
    payload: posts,
  }
}

export function setPostsFilter(filterBy) {
  return {
    type: actionTypes.SET_POSTS_FILTER,
    payload: filterBy,
  }
}
