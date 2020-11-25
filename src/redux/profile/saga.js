import { all, call, put, takeLatest } from 'redux-saga/effects'

import { actionTypes } from './constants'
import { actionTypes as userActionTypes } from '../user/constants'
import * as firebaseUtils from '../../utils/firebaseUtils'

function* startImageUpload({ payload }) {
  try {
    const fileName = payload.name
    const file = payload
    const imageLink = yield call(firebaseUtils.uploadImage, fileName, file)
    yield put({ type: actionTypes.SUCCESS_IMAGE_UPLOAD })
    yield put({
      type: userActionTypes.UPDATE_USER_DATA,
      payload: {
        imageUrl: imageLink,
      },
    })
  } catch {
    yield put({ type: actionTypes.FAILED_IMAGE_UPLOAD })
  }
}

function* startGettingDefaultImages() {
  try {
    const defaultImages = yield call(firebaseUtils.getDefaultProfileImages)
    yield put({ type: actionTypes.SUCCESS_GETTING_DEFAULT_IMAGES, payload: defaultImages })
  } catch {
    yield put({ type: actionTypes.FAILED_GETTING_DEFAULT_IMAGES })
  }
}

function* startAddingDefaultPic({ payload }) {
  try {
    const sendData = {
      imageUrl: payload,
    }
    yield put({
      type: userActionTypes.UPDATE_USER_DATA,
      payload: sendData,
    })
    yield call(firebaseUtils.updateUserData, sendData)
    yield put({ type: actionTypes.SUCCESS_ADDING_DEFAULT_PIC })
  } catch {
    yield put({ type: actionTypes.FAILED_ADDING_DEFAULT_PIC })
  }
}

function* startGettingUserPosts() {
  try {
    const posts = yield call(firebaseUtils.getUserPosts)
    yield put({ type: actionTypes.SUCCESS_GETTING_USER_POSTS, payload: posts })
  } catch {
    yield put({ type: actionTypes.FAILED_GETTING_USERS_POST, error: 'Failed Getting Posts' })
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.START_IMAGE_UPLOAD, startImageUpload),
    takeLatest(actionTypes.START_GETTING_DEFAULT_IMAGES, startGettingDefaultImages),
    takeLatest(actionTypes.START_ADDING_DEFAULT_PIC, startAddingDefaultPic),
    takeLatest(actionTypes.START_GETTING_USER_POSTS, startGettingUserPosts),
  ])
}

export default rootSaga
