
import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// Router
import { Link } from 'react-router-dom'

// Components
import SideSearchColumn from '../components/SideSearch/SideSearchColumn'
import withApi from '../components/Api/withApi'

const logo = require('../assets/img/size.png')

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }

    this.searchArticles = this.searchArticles.bind(this)
  }

  searchArticles(params) {
    this.props.api.getArticlesWithParams(params)
      .then(res => {
        if(res.status === 200) {
          console.log(res)
          this.setState({
            articles: res.data.success
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.props.api.getArticle()
      .then(res => {
        if(res.status === 200) {
          this.setState({
            articles: res.data.success
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  } 

  
  render() {
    console.log(this.state)
    const { classes } = this.props

    

    return (
      <div className={classes.root}>
        <Grid container className={classes.spacing} spacing={0}>
          <Grid item xs className={classes.spacing} >
            <Paper className={classes.paper}>
              <SideSearchColumn 
                callback={this.searchArticles}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <Paper className={classes.paper}>
                <Container maxWidth="md" item={12}>
                  <GridList cellHeight={350} className={classes.gridList} xs={12} md={6} lg={6} border={1}>
                    {this.state.articles.length > 0 ? 
                      this.state.articles.map(article => (
                        <Link key={article.id} to={`article/${article.id}`}>
                          <Grid item>
                            <img className={classes.img} alt="product" src= { logo }></img>
                            <Typography component="p" variant="h6" align="center" color="primary">
                            {article.name}
                            </Typography>
                          </Grid>
                        </Link> 
                      ))
                      : <p>Pas de produit</p>
                    } 
                  </GridList>
                </Container>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
    
  }
}


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 0,
    padding: 0,
  },
  spacing: {
    margin: 0,
    padding: 0,
  },
  card: {
    minWidth: 275,
  },
  text: {
    textDecoration: 'none',
    color: theme.palette.primary,
    '&:hover': {
      color: theme.palette.primary.light
    },
  },
  img: {
    width: 200,
    paddingTop: 10,
  }
})

export default withStyles(styles)(withApi(Home))