import React, { Component } from 'react'

// MUI
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core'

// Components
import CategoriesList from './CategoriesList'

class SideSearchColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      categoryName: null,
      name: '',
      description: '',
      min_price: '',
      max_price: '',
    }

    this.mounted = true
    this.timeout = 0

    this.setter = this.setter.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  doSearch(){
    if(this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      const params = {...this.state}
      delete params.categoryName
      this.props.callback(params)
    }, 500)
  }

  handleChange(e) {
    const {
      name,
      value
    } = e.currentTarget
    this.setState({
      [name]: value
    })
    this.doSearch()
  }

  setter(name, value) {
    switch(name) {
      case 'category':
      case 'categoryName':
        if (this.state[name] === value) this.setState({[name]: null})
        else this.setState({[name]: value})
        break

      default:
        this.setState({[name]: value})
    }
    this.doSearch()
  }

  componentWillUnmount() {
    this.mounted = false
  }
  
  render() {
    const { classes } = this.props
    const { setter } = this
    const { 
      category,
      categoryName,
    } = this.state

    return (
      <div className={classes.root}>
        <CategoriesList
          header={categoryName !== null ? categoryName : 'Categories'}
          active={category}
          callback={setter}
        />
        <div className={classes.column}>
          <TextField 
            id="search-name"
            name='name'
            label="Nom du produit"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            id="search-description-azeaze-flexible"
            name='description'
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <>
            <InputLabel htmlFor="standard-adornment-amount">Prix minimum</InputLabel>
            <Input
              id="standard-eazeaeaze-amount"
              name='min_price'
              value={this.state.min_price}
              onChange={this.handleChange}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </>
          <>
            <InputLabel htmlFor="standard-adornment-amount">Prix maximum</InputLabel>
            <Input
              id="standard-azeazeae-amount"
              name='max_price'
              value={this.state.max_price}
              onChange={this.handleChange}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </>
        </div>
      </div>
    )
  }
}


const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '70vh',
  },
  column: {
    margin: '2em',
    display: 'flex',
    flexDirection: 'column',
  }
})

export default withStyles(styles)(SideSearchColumn)