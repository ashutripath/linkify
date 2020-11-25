import { actionTypes } from './constants'

const initialState = {
  isLoadingOgData: false,
  data: {},
}

const ogDataReducer = (state = initialState, action = {}) => {
  const { type, payload, error } = action

  switch (type) {
    case actionTypes.START_GETTING_OG_DATA:
      return {
        ...state,
        isLoadingOgData: true,
        data: {},
      }
    case actionTypes.SUCCESS_GETTING_OG_DATA:
      return {
        ...state,
        isLoadingOgData: false,
        data: payload,
      }
    case actionTypes.FAILED_GETTING_OG_DATA:
      return {
        ...state,
        isLoadingOgData: false,
        error,
      }
    default:
      return state
  }
}

export default ogDataReducer
