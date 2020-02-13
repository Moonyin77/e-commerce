import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

// Components
import CartList from '../ShopCart/CartList'

class PaiementReview extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                Récapitulatif de la commande
                </Typography>
                <CartList />
            </React.Fragment>
        )
    }
}


//Stylesheet
const styles = theme => ({

    root: {
        flexGrow: 1,
      },
})
export default withStyles(styles)(PaiementReview)