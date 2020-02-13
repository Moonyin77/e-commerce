import React from 'react'

// MUI
import Button from '@material-ui/core/Button'

// Utils
import withApi from '../../Api/withApi'

function DeleteCategory({
  reload,
  id,
  api: {
    adminDeleteCategory
  }
}) {

  const deleteCategory = () => {
    adminDeleteCategory(id)
      .then(res => {
        const { status } = res
        if (status === 200) {
          reload()
        }
      })
      .catch(err => {
        alert('there was an error, sorry.')
        console.log(`ADMIN_DELETE_CATEGORY_ERROR: ${err}`)
      })
  }

  return (
    <Button color='secondary' onClick={deleteCategory}>
      Delete
    </Button>
  )
}

export default withApi(DeleteCategory)