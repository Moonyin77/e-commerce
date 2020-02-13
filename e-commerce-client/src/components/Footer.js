import React, { Component } from 'react'

// MUI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

// Components
import Copyright from './Copyright'

class StickyFooter extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Le concept du groupe T & M & D est de vous prendre le maximum d'argent pour un minimum de qualité et de façon durable.</Typography>
                    <Copyright />
                </Container>
                </footer>
            </div>
        )
    }
}

//Stylesheet
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        //Change the height of the footer
        minHeight: '0vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
})

export default withStyles(styles)(StickyFooter)