import React from 'react'

// React Router
import { Redirect, Route } from 'react-router-dom'

const NonAuthedRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth === false
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
export default NonAuthedRoute