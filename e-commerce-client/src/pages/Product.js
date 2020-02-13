import React, { Component } from 'react'

// MUI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

// Utils
import withApi from '../components/Api/withApi'
import withCart from '../components/ShopCart/withCart'

// Components
import Avis from '../components/Avis'
import AvisForm from '../components/Forms/AvisForm'

const logo = require('../assets/img/size.png')

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            article: null,
            id: null
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.api.getArticleById(id)
            .then(res => {
                if(res.status === 200) {
                    this.setState({
                        article: res.data.success,
                        id
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { classes, isAdmin, auth, user  } = this.props
        
        if (this.state.article === null) return <p>loading...</p>

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="product" src= { logo }></img>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Grid item xs={12}>
                                        <h4>{this.state.article.name}</h4>
                                </Grid>
                                <Grid item xs={12}>
                                        <p>Description : </p>
                                </Grid>
                                <Grid item xs={9}>
                                        {this.state.article.marque}
                                        <br />
                                        {this.state.article.description}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3} align="right">
                          <Button variant="contained" color="primary" component="span"
                            onClick={() => {
                              this.props.cart.addItem(this.state.article)
                            }}
                          >
                              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                  Ajouter au panier
                              </Typography>
                          </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                      <Grid item xs={12} md={3} lg={12} className={classes.price} align="right">
                          <h1>{this.state.article.prix}€</h1>
                      </Grid>
                </Paper>
                <Paper className={classes.paper2}>
                  <AvisForm 
                    auth={auth} 
                    user={user} 
                    id={this.state.id}
                    history={this.props.history}
                  />
                  {this.state.article.avis.length > 0 ?
                      this.state.article.avis.map(el => (
                      <Avis 
                        isAdmin={isAdmin} 
                        key={el.id} 
                        data={el} 
                        history={this.props.history} 
                      />))
                    : null
                  }
                </Paper>

            </div>
        )
    }
}

const styles = theme => ({

    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1200,
      marginTop: 50,
      marginBottom: 50,
    },
    paper2: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1200,
      marginTop: 50,
      marginBottom: 50,
      backgroundColor: theme.palette.primary.main
    },
    image: {
      width: 200,
      height: 350,
      borderColor: 'text.primary',
    },
    img: {
      margin: 0,
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
})

export default withStyles(styles)(withApi(withCart(Product)))