import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Utils
import withApi from './Api/withApi'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

function Avis(props) {
  const classes = useStyles()
  const {data, isAdmin, api, history} = props
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {data.user.name}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          {data.comment}
        </Typography>
      </CardContent>
      {isAdmin ? 
        <CardActions>
          <Button size="small"
            onClick={() => {
              api.adminDeleteAvis(data.id)
                .then(() => {
                  history.go(0)
                })
            }}
          >Delete</Button>
        </CardActions> : null
      }
    </Card>
  )
}

export default withApi(Avis)