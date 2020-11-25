import { actionTypes } from './constants'

export function startGettingOgData(url) {
  return {
    type: actionTypes.START_GETTING_OG_DATA,
    payload: url,
  }
}

export function successGettingOgData(ogData) {
  return {
    type: actionTypes.SUCCESS_GETTING_OG_DATA,
    payload: ogData,
  }
}

export function failedGettingOgData(error) {
  return {
    type: actionTypes.FAILED_GETTING_OG_DATA,
    error,
  }
}
