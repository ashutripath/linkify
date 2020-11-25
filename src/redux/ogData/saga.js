import { takeLatest, put, call, all } from 'redux-saga/effects'
import mql from '@microlink/mql'

import { actionTypes } from './constants'

async function getData(url) {
  const response = await mql(url)
  return response
}

function* startGettingOgData({ payload }) {
  try {
    const response = yield call(getData, payload)
    yield put({ type: actionTypes.SUCCESS_GETTING_OG_DATA, payload: response.data })
  } catch (err) {
    yield put({ type: actionTypes.FAILED_GETTING_OG_DATA, error: err })
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.START_GETTING_OG_DATA, startGettingOgData)])
}

export default rootSaga
