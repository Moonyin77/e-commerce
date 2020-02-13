import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core'

// Utils
import withApi from '../Api/withApi'

// Components
import ExpandPanel from './ExpandPanel'

class CategoriesList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: null,
      error: false
    }

    this.loading = this.loading.bind(this)
    this.noCategories = this.noCategories.bind(this)
    this.error = this.error.bind(this)
  }


  componentDidMount() {
    this.setState({error: false, categories: null})
    this.props.api.getCategories()
      .then(res => {
        switch (res.status) {
          case 200:
            const data = res.data.success
            if (data.length === 0) this.setState({categories: false})
            else {this.setState({categories: data})}
            
            break;
        
          default:
            break;
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({error: true})
      })
  }

  loading = (classes) => {
    return (
      <ExpandPanel header={'Categories'} elevation={0} className={classes.root}>
        <Container className={classes.loading}>
          <CircularProgress 
            size={'1em'}
          />
          <Typography variant="h3" gutterBottom>
            Chargements des catégories !
          </Typography>
        </Container>
      </ExpandPanel>
    )
  }

  noCategories = (classes) => {
    return (
      <ExpandPanel header={'Categories'} elevation={0} className={classes.root}>
        <Container className={classes.loading}>
          <Typography variant="h3" gutterBottom>
            Il n'y a pas de categories.
          </Typography>
        </Container>
      </ExpandPanel>
    )
  }

  error = (classes) => {
    return (
      <ExpandPanel header={'Categories'} elevation={0} className={classes.root}>
        <Container className={classes.loading}>
          <Typography variant="h3" gutterBottom>
            Il y a eu une erreur, veuillez réessayer
          </Typography>
        </Container>
      </ExpandPanel>
    )
  }

  render() {
    const { classes, callback, active, header } = this.props
    const { categories, error } = this.state

    if (categories === null) {
      return this.loading(classes)
    }

    if (categories === false) {
      return this.noCategories(classes)
    }

    if (error !== false) {
      return this.error(classes)
    }

    return (
      <ExpandPanel header={header} elevation={0} className={classes.root}>
        <List className={classes.root} >
          <Divider />
          {categories.map(data => (
            <ListItem button key={data.name}
              className={classes.item}
              onClick={() => {
                  callback('category', data.id)
                  callback('categoryName', data.name)
                }
              }
              selected={active === data.id ? true : false}
            >
              <ListItemText 
              
                primary={data.name}
              />
            </ListItem>
          ))}
          <Divider />
        </List>
      </ExpandPanel>
    )
  }
}

const styles = theme => {
  return ({
    root: {
      width: '100%',
      padding: 0,
      margin: 0,
    },
    loading: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '2em',
    },
    active: {
      backgroundColor: theme.palette.primary
    },
    item: {
      margin: theme.spacing(0),
      padding: theme.spacing(0.5),
    }
  })
}

export default withStyles(styles)(withApi(CategoriesList))