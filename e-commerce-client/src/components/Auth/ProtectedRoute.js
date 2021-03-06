import React from 'react'

// React Router
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
export default PrivateRoute