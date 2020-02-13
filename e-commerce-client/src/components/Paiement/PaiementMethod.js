import React, { Component } from 'react'
import Paypal from './Paypal';

// MUI
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'

class PaiementMethod extends Component {

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Méthode de paiement
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardName" label="Nom de la carte" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardNumber" label="Numéro carte" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="expDate" label="Date d'expériration" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="Cryptogramme"
                            helperText="Code de sécurité, situé derrière la carte"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Se souvenir de cette carte"
                            />
                            <Paypal/>
                    </Grid>
                </Grid>
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

export default withStyles(styles)(PaiementMethod)