import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core'

// Router
import { Link } from 'react-router-dom'

class CategoryCard extends Component {  
  render() {
    const { data, classes } = this.props
    return (
      <Link
        className={classes.text}
        to={`/categories/${data.id}`}
      >
        <Card>
          <CardContent>
            <Typography
              className={classes.text}
            >
              {data.name}
            </Typography>
          </ CardContent>
        </Card>
      </Link>
    )
  }
}


const styles = theme =>{
  console.log(theme)
  return({
    card: {
      minWidth: 275,
    },
    text: {
      textDecoration: 'none',
      color: theme.palette.primary,
      '&:hover': {
        color: theme.palette.primary.light
      },
    }
  })
}

export default withStyles(styles)(CategoryCard)