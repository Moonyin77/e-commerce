import React, { Component } from 'react'

// MUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

// Router
import { Link as RouterLink } from 'react-router-dom'

// Utils
import withApi from '../Api/withApi'
import { storeToken } from '../../utils/localStorage'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: '',
      error: false,
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
    e.preventDefault();

    const {
      email,
      password
    } = this.state

    this.setState({error: false})

    const formData = new FormData()
    
    formData.append('email', email);   //append the values with key, value pair
    formData.append('password', password);

    console.log('LOGIN_FORM_SENT')
    this.props.api.login(formData)
      .then(res => {
        const { status } = res

        if (status === 200) {
          storeToken(res.data.success.token)
          this.props.updateToken()
        } else {
          this.setState({error: true})
        }
      })
      .catch(err => {
        console.log(`LOGIN_FORM_ERROR: ${err}`)
        this.setState({error: true})
      })
  }

  render() {
    const { classes } = this.props
    const { 
      handleInputs,
      handleSubmit,
    } = this

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <form 
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email-login"
              label="E-mail"
              name="email"
              autoComplete="email"
              onChange={handleInputs}
              autoFocus
              helperText={this.state.error ? "Wrong email or password" : ''}
              error={this.state.error}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password-login"
              onChange={handleInputs}
              autoComplete="current-password"
              helperText={this.state.error ? "Wrong email or password" : ''}
              error={this.state.error}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Vous souvenir de moi."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/register" variant="body2">
                  {"Nouveau client? Inscrit-toi ici!"}
                </Link>
              </Grid>
              <Grid item xs={12}>
                  Lorsque vous vous identifiez, vous acceptez les Conditions générales de vente T & M & D.
                  Veuillez consulter notre Notice Protection de vos Informations Personnelles,
                  notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.
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

export default withStyles(styles)(withApi(LoginForm))