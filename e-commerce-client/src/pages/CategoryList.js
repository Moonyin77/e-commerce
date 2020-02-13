import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import { withStyles } from '@material-ui/core'

// Utils
import withApi from '../components/Api/withApi'

// Components
import CategoryCard from '../components/CategoryCard'

class CategoryList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: null,
      error: false
    }
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
  
  render() {
    const { classes } = this.props
    const { categories, error } = this.state

    if (categories === null) {
      return (
        <Container className={classes.loading}>
          <CircularProgress 
            size={'10em'}
          />
          <Typography variant="h3" gutterBottom>
            Chargements des catégories !
          </Typography>
        </Container>
      )
    }

    if (categories === false) {
      return (
        <Container className={classes.loading}>
          <Typography variant="h3" gutterBottom>
            Il n'y a pas de categories.
          </Typography>
        </Container>
      )
    }

    if (error !== false) {
      return (
        <Container className={classes.loading}>
          <Typography variant="h3" gutterBottom>
            Il y a eu une erreur, veuillez réessayer
          </Typography>
        </Container>
      )
    }

    return (
      <Container maxWidth="md">
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="h3">Categories</ListSubheader>
          </GridListTile>

          {categories.map(data => (
            <GridListTile key={data.id}>
              <CategoryCard  
                data={data}
              />
            </GridListTile>
          ))}

        </GridList>
      </Container>
    )
  }
}

const styles = theme => ({
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
  }
})

export default withStyles(styles)(withApi(CategoryList))
