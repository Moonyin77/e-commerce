import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core'

// Utils
import withApi from '../Api/withApi'

class AdminItemList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dataSet: null,
      error: false,
    }

    this.reloadList = this.reloadList.bind(this)
  }
  

  dataItem(data) {
    const { ItemComponent } = this.props
    return (
      <>
        {ItemComponent ?
          <ItemComponent 
            reload={this.reloadList}
            data={data}
          /> : <div>Default ItemComponent</div>
        }
      </>
    )
  }

  reloadList() {
    this.setState({error: false})

    this.props.api[this.props.apiCall]()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            dataSet: res.data.success
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({error: true})
      })
  }

  componentDidMount() {
    this.reloadList()
  }

  render() {
    const { classes, loadingMessage, CreateModal } = this.props
    const { dataSet, error } = this.state

    if (error !== false) {
      return (
        <Container className={classes.loading}>
          <Typography variant="h3" gutterBottom>
            Il y a eu une erreur, veuillez réessayer
          </Typography>
        </Container>
      )
    }

    if (dataSet === null) {
      return (
        <Container className={classes.loading}>
          <CircularProgress 
            size={'10em'}
          />
          <Typography variant="h3" gutterBottom>
            {loadingMessage}
          </Typography>
        </Container>
      )
    }

    return (
      <Container maxWidth="md">
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="h3">{this.props.title}</ListSubheader>
          </GridListTile>

          {dataSet.map(data => (
            <GridListTile key={data.id}>
              {this.dataItem(data)}
            </GridListTile>
          ))}

        </GridList>
        {CreateModal ? <CreateModal reload={this.reloadList} /> : null}
      </Container>
    )
    
  }
}

const style = theme => ({
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

export default withStyles(style)(withApi(AdminItemList))
