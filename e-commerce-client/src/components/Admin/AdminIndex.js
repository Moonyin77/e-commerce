import React, { Component } from 'react'

// MUI
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import { withStyles } from '@material-ui/core'

// router
import { Link } from 'react-router-dom'

// Images
// TODO: load images

// Category data
// The example data is structured as follows:
import category from '../../assets/img/category.jpg'
import article from '../../assets/img/article.jpg'
import userDefault from '../../assets/img/default.png'

const adminData = [
  {
    img: userDefault,
    title: 'Utilisateurs',
    subtitle: 'Gestion des utilisateurs',
    link: '/admin/user'
  },
  {
    img: category,
    title: 'Categories',
    subtitle: 'Gestion des catégories',
    link: '/admin/category'
  },
  {
    img: article,
    title: 'Vetements',
    subtitle: 'Gestion des vetements',
    link: '/admin/article'
  },
]


class AdminIndex extends Component {

  render() {
    const { classes } = this.props

    return (
      <Container
        component='main'
        maxWidth="md"
      >
        <CssBaseline />

        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Panels d'administration</ListSubheader>
            </GridListTile>
            {adminData.map(tile => (
              <GridListTile key={tile.img}>
                <Link to={tile.link}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.subtitle}</span>}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
        
      </Container>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

export default withStyles(styles)(AdminIndex)
