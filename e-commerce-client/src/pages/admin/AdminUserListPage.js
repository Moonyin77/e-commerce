import React, { Component } from 'react'

// MUI
import { withStyles } from '@material-ui/core'

// Components
import AdminItemList from '../../components/Admin/AdminItemList'
import AdminUserInfo from '../../components/Admin/user/AdminUserInfo'

class AdminUserPage extends Component {
  render() {
    return (
      <AdminItemList
        apiCall={'adminGetUsers'}
        loadingMessage={'Chargements des utilisateurs'}
        ItemComponent={AdminUserInfo}
        title={'Utilisateurs'}
      />
    )
  }
}


const style = theme => ({
  root: {
    width: '100%',
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '2em',
  }
})

export default withStyles(style)(AdminUserPage)

