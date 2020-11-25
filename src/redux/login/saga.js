import { all, takeLatest, call, put } from 'redux-saga/effects'
import { actionTypes } from './constants'
import { actionTypes as userActionTypes } from '../user/constants'

import * as firebaseUtils from '../../utils/firebaseUtils'

function* initiateGoogleLogin() {
  try {
    const user = yield call(firebaseUtils.googleLogin)
    yield call(firebaseUtils.fbSetFirebaseUser, user)
    yield put({ type: actionTypes.SUCCESS_GOOGLE_LOGIN })
    yield put({ type: actionTypes.SET_LOG_IN_STATE, payload: true })
    yield put({ type: userActionTypes.UPDATE_USER_DATA, payload: user })
  } catch (error) {
    yield put({ type: actionTypes.FAILED_GOOGLE_LOGIN, error })
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.START_GOOGLE_LOGIN, initiateGoogleLogin)])
}

export default rootSaga
