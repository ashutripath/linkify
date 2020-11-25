import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ component: Component, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }}
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
}
