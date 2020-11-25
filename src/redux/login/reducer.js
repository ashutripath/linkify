import { actionTypes } from './constants'

const initialState = {
  isLoggingIn: false,
  error: null,
  isUserLoggedIn: false,
}

const loginReducer = (state = initialState, action = {}) => {
  const { type, payload, error } = action

  switch (type) {
    case actionTypes.START_GOOGLE_LOGIN:
      return {
        ...state,
        isLoggingIn: true,
      }
    case actionTypes.SUCCESS_GOOGLE_LOGIN:
      return {
        ...state,
        isLoggingIn: false,
      }
    case actionTypes.FAILED_GOOGLE_LOGIN:
      return {
        ...state,
        isLoggingIn: false,
        error,
      }
    case actionTypes.SET_LOG_IN_STATE:
      return {
        ...state,
        isUserLoggedIn: payload,
      }
    default:
      return state
  }
}

export default loginReducer
