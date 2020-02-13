import React from 'react'

// MUI
import Button from '@material-ui/core/Button'

// Utils
import withApi from '../../Api/withApi'

function deleteUser({
  reload,
  id,
  api: {
    adminDeleteUser
  }
}) {

  const deleteUser = () => {
    adminDeleteUser(id)
      .then(res => {
        const { status } = res
        if (status === 200) {
          reload()
        }
      })
      .catch(err => {
        alert('there was an error, sorry.')
        console.log(`ADMIN_DELETE_USER_ERROR: ${err}`)
      })
  }

  return (
    <Button color='secondary' onClick={deleteUser}>
      Delete
    </Button>
  )
}

export default withApi(deleteUser)