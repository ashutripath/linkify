import { status } from 'redux/constants'
import { actionTypes } from './constants'

const initialState = {
  isUploadingImage: false,
  defaultImages: {
    isFetchingDefaultImages: false,
    images: [],
  },
  posts: {
    status: status.idle,
    data: [],
    error: null,
  },
  error: null,
}

const profileReducer = (state = initialState, action = {}) => {
  const { type, error, payload } = action
  switch (type) {
    case actionTypes.START_IMAGE_UPLOAD:
      return {
        ...state,
        isUploadingImage: true,
      }
    case actionTypes.SUCCESS_IMAGE_UPLOAD:
      return {
        ...state,
        isUploadingImage: false,
      }
    case actionTypes.FAILED_IMAGE_UPLOAD:
      return {
        ...state,
        isUploadingImage: false,
      }
    case actionTypes.START_GETTING_DEFAULT_IMAGES:
      return {
        ...state,
        defaultImages: {
          ...state.defaultImages,
          isFetchingDefaultImages: true,
        },
      }
    case actionTypes.SUCCESS_GETTING_DEFAULT_IMAGES:
      return {
        ...state,
        defaultImages: {
          ...state.defaultImages,
          isFetchingDefaultImages: false,
          images: payload,
        },
      }
    case actionTypes.FAILED_GETTING_DEFAULT_IMAGES:
      return {
        ...state,
        defaultImages: {
          ...state.defaultImages,
          isFetchingDefaultImages: false,
        },
        error,
      }
    case actionTypes.START_GETTING_USER_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          status: status.pending,
        },
      }
    case actionTypes.SUCCESS_GETTING_USER_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: payload,
          status: status.success,
        },
      }
    case actionTypes.FAILED_GETTING_USERS_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          status: status.error,
          error: 'FAILED GETTING POSTS',
        },
      }
    default:
      return state
  }
}

export default profileReducer
