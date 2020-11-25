import { actionTypes } from './constants'

export function startGoogleLogin() {
  return {
    type: actionTypes.START_GOOGLE_LOGIN,
  }
}

export function successGoogleLogin() {
  return {
    type: actionTypes.SUCCESS_GOOGLE_LOGIN,
  }
}

export function failedGoogleLogin(error) {
  return {
    type: actionTypes.FAILED_GOOGLE_LOGIN,
    error,
  }
}

export function setLoggedInState(payload) {
  return {
    type: actionTypes.SET_LOG_IN_STATE,
    payload,
  }
}
