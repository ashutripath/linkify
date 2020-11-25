import { status } from 'redux/constants'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { actionTypes } from './constants'

const initialState = {
  isAddLinkDrawerOpen: false,
  isAddingPost: false,
  error: null,
  posts: {},
  postsStatus: status.idle,
  filterBy: '',
}

const homeReducer = (state = initialState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case actionTypes.TOGGLE_ADD_LINK_DRAWER:
      return {
        ...state,
        isAddLinkDrawerOpen: payload,
      }
    case actionTypes.START_ADD_POST:
      return {
        ...state,
        isAddingPost: true,
      }
    case actionTypes.SUCCESS_ADD_POST:
      return {
        ...state,
        isAddingPost: false,
      }
    case actionTypes.FAILED_ADD_POST:
      return {
        ...state,
        isAddingPost: false,
        error,
      }
    case actionTypes.UPDATE_POSTS:
      return {
        ...state,
        posts: payload,
        postsStatus: status.success,
      }
    case actionTypes.SET_POSTS_FILTER:
      return {
        ...state,
        filterBy: payload,
      }
    case REHYDRATE:
      return { ...state, persistedState: action.payload }
    default:
      return state
  }
}

export default homeReducer
