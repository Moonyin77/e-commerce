/* Functions to deal with storage & getting of the auth token */
export const storeToken = (token, rememberMe = false) => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}


export const deleteToken = () => {
  window.localStorage.removeItem('token')
}

/* Functions to deal with storage & getting of the authed user */
export const storeUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}


export const deleteUser = () => {
  window.localStorage.removeItem('user')
}
