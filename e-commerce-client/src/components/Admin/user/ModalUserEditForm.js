import React from 'react'

// mui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import MenuItem from '@material-ui/core/MenuItem'

// utils
import withApi from '../../Api/withApi'

function ModalUserEditForm({
  data,
  classes,
  reload,
  api: { 
    adminUpdateUser
  }}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState(data.name)
  const [email, setEmail] = React.useState(data.email)
  const [role, setRole] = React.useState(data.role)
  const [error, setError] = React.useState({})
  const { id } = data

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setError({})

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('role', role)

    console.log('ADMIN_CHANGE_USER_FORM_SENT')
    adminUpdateUser(formData, id)
      .then(res => {
        console.log(res)
        const { status } = res
        if (status === 200) {
          setOpen(false)
          reload()
        } 
        else if (res.data.error) {
          setError(res.data.error)
        }
      })
      .catch(err => {
        alert('There was an error, sorry.')
        console.log(`ADMIN_CHANGE_USER_ERROR: ${err}`)
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
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name-admin-change"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error.name ? true : false}
              helperText={error.name ? error.name[0] : ''}
              autoFocus
            />


            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email-admin-change"
              label="E-mail"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              helperText={error.email ? error.email[0] : ''}
              error={error.email ? true : false}
            />

            <TextField
              select
              fullWidth
              label='Permissions'
              variant="outlined"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              error={error.role ? true : false}
              inputProps={{ name: "role", id: "change-user-rol-admin" }}
            >
              <MenuItem value={'ROLE_USER'}>Utilisateur</MenuItem>
              <MenuItem value={'ROLE_ADMIN'}>Administrateur</MenuItem>
            </TextField>
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

export default withApi(ModalUserEditForm)