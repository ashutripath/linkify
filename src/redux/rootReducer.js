import { combineReducers } from 'redux'

import loginReducer from './login/reducer'
import userReducer from './user/reducer'
import profileReducer from './profile/reducer'
import ogDataReducer from './ogData/reducer'
import homeReducer from './home/reducer'

const reducers = {
  home: homeReducer,
  login: loginReducer,
  user: userReducer,
  profile: profileReducer,
  ogData: ogDataReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
