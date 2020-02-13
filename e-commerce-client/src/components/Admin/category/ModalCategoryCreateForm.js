import React from 'react'

// MUI
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// Utils
import withApi from '../../Api/withApi'

function ModalCategoryCreateForm({
  reload,
  classes,
  api : {
    createCategory
  },
}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    
    formData.append('name', name)   //append the values with key, value pair
    createCategory(formData)
      .then(res => {
        if (res.status === 200) {
          setOpen(false)
          reload()
        } else {
          setError(true)
        }
      })
      .catch(err => {
        alert('Il y a eu une erreur, veuillez réessayer.')
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
        Ajouter
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Creation de categorie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Entrez le nom de la categorie !
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
            error={error ? true : false}
            helperText={error ? 'This name is incorrect or taken' : ''}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withApi(ModalCategoryCreateForm)