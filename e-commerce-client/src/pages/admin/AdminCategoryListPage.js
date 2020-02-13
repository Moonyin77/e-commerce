import React, { Component } from 'react'

// MUI
import { withStyles } from '@material-ui/core'

// Components
import AdminItemList from '../../components/Admin/AdminItemList'
import ModalCategoryCreateForm from '../../components/Admin/category/ModalCategoryCreateForm'
import AdminCategoryInfo from '../../components/Admin/category/AdminCategoryInfo'

class AdminCategoryPage extends Component {
  render() {
    return (
      <>
        <AdminItemList
          apiCall={'getCategories'}
          loadingMessage={'Chargements des categories'}
          ItemComponent={AdminCategoryInfo}
          title={'Categories'}
          CreateModal={ModalCategoryCreateForm}
        />
        
      </>
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})

export default withStyles(style)(AdminCategoryPage)