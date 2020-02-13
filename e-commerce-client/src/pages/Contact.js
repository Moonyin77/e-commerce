import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3];

export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
            <br/>
              NOUS SERIONS RAVIS DE NE PAS DISCUTER AVEC VOUS
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              <br/>
                Chattez pas avec nous
              </Typography>
                Vous pouvez obtenir une réponse aux questions jamais posées en discutant avec notre assistant virtuel inexistant,
                indisponible 24 h/24, 7 j/7. Pendant les heures d'ouverture non détaillées ci-dessous,
                il pourra aussi vous rediriger vers un de nos agents si vous avez besoin d'aide supplémentaire.
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              <br/>
                REJOIGNEZ-NOUS SUR LES RESEAUX SOCIAUX
              </Typography>
                Facebook
                Twitter
                Instagram
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="pic"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}