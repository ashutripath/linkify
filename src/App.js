import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'

import HomePage from 'components/HomePage'
import ProfilePage from 'components/ProfilePage'
import Login from 'components/Login'
import ProtectedRoute from 'shared/ProtectedRoute'
import GlobalStyles from 'styles/global'
import { store, persistor, sagaMiddleware } from 'redux/configureStore'
import theme from 'styles/theme'
import firebase from 'firebase/app'
import { Loader } from 'elements'
import rootSaga from 'redux/rootSaga'

sagaMiddleware.run(rootSaga)

function App() {
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false)

  const getUser = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setisUserLoggedIn(true)
        store.dispatch({ type: 'login/SET_LOG_IN_STATE', payload: true })
        store.dispatch({ type: 'user/START_GETTING_USER_DATA' })
        setIsLoadingUser(false)
      } else {
        setIsLoadingUser(false)
        setisUserLoggedIn(false)
        store.dispatch({ type: 'login/SET_LOG_IN_STATE', payload: false })
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  if (isLoadingUser) {
    return <Loader />
  }

  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Switch>
              <Route exact path="/login" render={(props) => <Login isUserLoggedIn={isUserLoggedIn} {...props} />} />
              <ProtectedRoute exact path="/" component={HomePage} isUserLoggedIn={isUserLoggedIn} />
              <ProtectedRoute exact path="/profile" component={ProfilePage} isUserLoggedIn={isUserLoggedIn} />
            </Switch>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
