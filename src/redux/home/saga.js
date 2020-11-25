import { put, call, all, take, fork, cancelled, takeLatest } from 'redux-saga/effects'
import * as firebaseUtils from 'utils/firebaseUtils'
import { updatePosts } from './action'

import { actionTypes } from './constants'

function* initiateAddPost({ payload, metaData }) {
  try {
    yield call(firebaseUtils.addPost, payload, metaData)
    yield put({ type: actionTypes.SUCCESS_ADD_POST })
  } catch {
    yield put({ type: actionTypes.FAILED_ADD_POST })
  }
}

function* startPostsListener() {
  const postsChannel = yield call(firebaseUtils.postsListener)

  try {
    while (true) {
      const data = yield take(postsChannel)
      yield put(updatePosts(data))
    }
  } finally {
    if (yield cancelled()) {
      postsChannel.close()
    }
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.START_ADD_POST, initiateAddPost), fork(startPostsListener)])
}

export default rootSaga
