import React, { Component } from 'react'

// MUI
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'

// Utils
import withApi from '../Api/withApi'
import { storeToken } from '../../utils/localStorage'

// Router
import { Link as RouterLink } from 'react-router-dom'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      email: '',
      password: '',
      c_password: '',
      error: {}
    }

    this.handleInputs = this.handleInputs.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  // Form inputs are pushed to state
  handleInputs(e){
    const {
      name,
      value
    } = e.currentTarget
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    // Prevent default behavior
    e.preventDefault()

    this.setState({error: {}})

    const {
      email,
      name,
      password,
      c_password,
    } = this.state

    const formData = new FormData()
    
    formData.append('email', email)   //append the values with key, value pair
    formData.append('name', name)
    formData.append('password', password)
    formData.append('c_password', c_password)

    console.log('REGISTER_FORM_SENT')
    this.props.api.register(formData)
      .then(res => {
        const { status } = res

        switch (status) {
          // SUCCESS
          case 200:
            storeToken(res.data.success.token)
            this.props.updateToken()
            break
          
          // HAS ERRORS
          case 400:
            this.setState({
              error: res.data.error
            })
            break
        
          default:
            break
        }
        console.log(res)
      })
      .catch(err => {
        console.log(`REGISTER_FORM_ERROR: ${err}`)
        // this.setState({error: true})
      })
  }

  render() {
    const { classes } = this.props
    const {
      handleInputs,
      handleSubmit
    } = this
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>
          <form 
            className={classes.form} 
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name-register"
                  label="Name"
                  onChange={handleInputs}
                  error={this.state.error.name ? true : false}
                  helperText={this.state.error.name ? this.state.error.name[0] : ''}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email-register"
                  label="E-mail"
                  name="email"
                  onChange={handleInputs}
                  error={this.state.error.email ? true : false}
                  helperText={this.state.error.email ? this.state.error.email[0] : ''}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password-register"
                  onChange={handleInputs}
                  error={this.state.error.password ? true : false}
                  helperText={this.state.error.password ? this.state.error.password[0] : ''}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="c_password"
                  label="Entrez le mot de passe à nouveau"
                  type="password"
                  id="c_password-register"
                  onChange={handleInputs}
                  error={this.state.error.c_password ? true : false}
                  helperText={this.state.error.c_password ? this.state.error.c_password[0] : ''}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Je veux recevoir par mail, les promotions et les offres promotionnels."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Inscription
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Déjà client? Identifiez-vous !
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    )
  }
}

// Stylesheet
const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})

export default withStyles(styles)(withApi(RegisterForm))