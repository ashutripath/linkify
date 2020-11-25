import { all, fork } from 'redux-saga/effects'

import login from './login/saga'
import profile from './profile/saga'
import user from './user/saga'
import ogData from './ogData/saga'
import home from './home/saga'

export default function* rootSaga() {
  yield all([fork(login), fork(profile), fork(user), fork(ogData), fork(home)])
}
