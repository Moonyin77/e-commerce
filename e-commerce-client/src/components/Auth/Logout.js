import React from 'react'
import { deleteToken } from '../../utils/localStorage'

// Utils

function Logout(props) {
  // Delete the token in local storage, then update token state in App.js via a callback
  deleteToken()
  props.callback()

  return (
    <div>
      
    </div>
  )
}

export default Logout