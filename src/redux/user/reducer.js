import { actionTypes } from './constants'

const initialState = {
  isFetchingUserData: false,
  user: {},
  bgColor: '#000000b0',
}

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.START_GETTING_USER_DATA:
      return {
        ...state,
        isFetchingUserData: true,
      }
    case actionTypes.SUCCESS_GETTING_USER_DATA:
      return {
        ...state,
        isFetchingUserData: false,
        user: {
          ...action.payload,
        },
      }
    case actionTypes.FAILED_GETTING_USER_DATA:
      return {
        ...state,
        isFetchingUserData: false,
        user: {
          ...state.user,
        },
      }
    case actionTypes.UPDATE_USER_DATA:
      return {
        ...state,
        isFetchingUserData: false,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    default:
      return state
  }
}

export default userReducer
