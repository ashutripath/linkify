import { actionTypes } from './constants'

export function startGettingUserData() {
  return {
    type: actionTypes.START_GETTING_USER_DATA,
  }
}

export function successGettingUserData() {
  return {
    type: actionTypes.SUCCESS_GETTING_USER_DATA,
  }
}

export function failedGettingUserData() {
  return {
    type: actionTypes.FAILED_GETTING_USER_DATA,
  }
}

export function updateUserData(payload) {
  return {
    type: actionTypes.UPDATE_USER_DATA,
    payload,
  }
}
