/* Functions to deal with storage & getting of the authed user */
export const storeuser = (user) => {
  window.localStorage.setItem('user', user)
}

export const getuser = () => {
  return window.localStorage.getItem('user')
}


export const deleteuser = () => {
  window.localStorage.removeItem('user')
}
