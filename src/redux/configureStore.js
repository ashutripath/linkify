import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

let middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const { logger } = require('../middlewares/logger')
  middlewares = [...middlewares, logger]
}

const bindMiddlewares = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middlewares)
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'login'],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, bindMiddlewares(middlewares))

const persistor = persistStore(store)

export { sagaMiddleware, store, persistor }
