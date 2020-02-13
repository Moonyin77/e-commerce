import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core'

// Components
import ModalCategoryEditForm from './ModalCategoryEditForm'
import DeleteCategory from './DeleteCategory'

// Utils
import withApi from '../../Api/withApi'

class AdminCategoryCard extends Component {  
  render() {
    const { data, reload } = this.props
    
    return (
      <Card>
        <CardContent>
          <Typography>
            NOM: {data.name}
          </Typography>
        </ CardContent>
        <CardActions>
            <ModalCategoryEditForm 
              reload={reload}
              data={data}
            />
            <DeleteCategory 
              reload={reload}
              id={data.id}
            />
        </CardActions>
      </Card>
    )
  }
}


const styles = theme =>({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default withStyles(styles)(withApi(AdminCategoryCard))