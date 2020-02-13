import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

class PaiementForm extends Component {

    render() {
        return (

            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Adresse de livraison
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Nom de famille"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="adress1"
                        name="adress1"
                        label="Adresse 1"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="adress2"
                        name="adress2"
                        label="Adresse 2"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Ville"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="Département" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Code postal"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Pays"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Utiliser cette adresse pour la livraison"
                    />
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

export default withStyles(styles)(PaiementForm)
            