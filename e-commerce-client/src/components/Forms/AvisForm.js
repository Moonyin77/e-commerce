import React, { Component } from 'react'

// MUI
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core'

// UTils
import withApi from '../Api/withApi'

class AvisForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputs = this.handleInputs.bind(this)
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

  handleSubmit(e) {
    // Prevent default behavior
    e.preventDefault();

    const {
      comment,
    } = this.state

    this.setState({error: false})

    const formData = new FormData()
    
    formData.append('comment', comment);   //append the values with key, value pair
    formData.append('article_id', this.props.id);
    formData.append('user_id', this.props.user.id);

    console.log('AVIS_FORM_SENT')
    this.props.api.createAvis(formData)
      .then(res => {
        const { status } = res
        if (status === 200) {
          this.props.history.go(0)
        } else {
          this.setState({error: true})
        }
      })
      .catch(err => {
        console.log(`AVIS_FORM_ERROR: ${err}`)
        this.setState({error: true})
      })
  }
  
  render() {
    const {classes} = this.props
    
    return (
      <Paper>
        <TextField
          id="outlined-full-width"
          label="Ajouter un avis"
          style={{ padding: 10 }}
          name='comment'
          fullWidth
          onChange={this.handleInputs}
          value={this.state.comment}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
        >
          Ajouter
        </Button>
      </Paper>
    )
  }
}

const styles = theme => ({
  button: {
    padding: theme.spacing(1),
  },
})

export default withStyles(styles)(withApi(AvisForm))