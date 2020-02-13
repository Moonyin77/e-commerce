import React from 'react'

// React Router
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({ component: Component, role, ...rest }) => (
  <Route {...rest} render={(props) => (
    role === "ROLE_ADMIN"
      ? <Component {...props} />
      : <Redirect to='/no-access' />
  )} />
)
export default AdminRoute