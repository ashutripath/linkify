import { all, call, takeLatest, put } from 'redux-saga/effects'

import { actionTypes } from './constants'
import * as firebaseUtils from '../../utils/firebaseUtils'

function* getUserData() {
  try {
    const userData = yield call(firebaseUtils.getUserData)
    yield put({ type: actionTypes.SUCCESS_GETTING_USER_DATA, payload: userData })
  } catch {
    yield put({ type: actionTypes.FAILED_GETTING_USER_DATA })
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.START_GETTING_USER_DATA, getUserData)])
}

export default rootSaga
