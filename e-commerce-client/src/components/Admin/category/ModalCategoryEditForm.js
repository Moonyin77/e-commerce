import React from 'react'

// mui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// utils
import withApi from '../../Api/withApi'

function ModalCategoryEditForm({
  data,
  classes,
  reload,
  api: { 
    adminUpdateCategory
  }}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState(data.name)
  const { id } = data

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('name', name)

    console.log('ADMIN_CHANGE_CATEGORY_FORM_SENT')
    adminUpdateCategory(formData, id)
      .then(res => {
        if (res.status === 200) {
          setOpen(false)
          reload()
        }
      })
      .catch(err => {
        console.log(`ADMIN_CHANGE_USER_ERROR: ${err}`)
        alert('There was an error, sorry.')
      })
  }

  return (
    <div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Modifier
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Modifier les champs.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="cat-name"
            label="Nom de categorie"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withApi(ModalCategoryEditForm)