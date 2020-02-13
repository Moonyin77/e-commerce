import React, { forwardRef, useImperativeHandle } from 'react'

// MUI
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SecurityIcon from '@material-ui/icons/Security';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { makeStyles } from '@material-ui/core/styles'

// React router
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const TemporaryDrawer = forwardRef((props, ref) => {
  const { isAuthed, isAdmin } = props
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const getState = () => state

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  useImperativeHandle(ref, () => ({
    show(){
      setState({ ...getState(), left: true})
    }
  }))

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link component={RouterLink}
          to="/categories"
          variant="h6"
          color="textPrimary"
        >
          <ListItem button key={'login-link'}>
              <ListItemIcon><ViewModuleOutlinedIcon /></ListItemIcon>
              <ListItemText 
                primary={"Catégories"}
              />
            </ListItem>
        </Link>

        {['Historique', 'Panier'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Link component={RouterLink}
          to="/size"
          variant="h6"
          color="textPrimary"
        >
          <ListItem button key={'login-link'}>
              <ListItemIcon><DeveloperBoardIcon /></ListItemIcon>
              <ListItemText 
                primary={"Guide des tailles"}
              />
            </ListItem>
        </Link>

        <Link component={RouterLink}
          to="/contact"
          variant="h6"
          color="textPrimary"
        >
          <ListItem button key={'login-link'}>
              <ListItemIcon><ContactSupportIcon /></ListItemIcon>
              <ListItemText 
                primary={"Contacte-nous"}
              />
            </ListItem>
        </Link>
      </List>

      {/* If admin show divider and links */}
      {isAdmin ? <Divider /> : null }
      {isAdmin ? 
        <List>
          <Link 
            component={RouterLink} 
            to="/admin" 
            variant="h6"
            color="textPrimary"
          >
            <ListItem button key={'login-link'}>
              <ListItemIcon><SecurityIcon /></ListItemIcon>
              <ListItemText 
                primary={"Panel Admin"}
              />
            </ListItem>
          </Link>
        </List> : null 
      }

      <Divider />
      <List>

        {!isAuthed ?
          <Link 
            component={RouterLink} 
            to="/login" 
            variant="h6"
            color="textPrimary"
          >
            <ListItem button key={'login-link'}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText 
                primary={"Connexion"}
              />
            </ListItem>
          </Link> : null
        }

        {!isAuthed ?
          <Link 
            component={RouterLink} 
            to="/register" 
            variant="h6"
            color="textPrimary"
          >
            <ListItem button key={'register-link'}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText 
                primary={"Inscription"}
              />
            </ListItem>
          </Link> : null
        }

        {isAuthed ?
          <Link 
            component={RouterLink} 
            to="/logout" 
            variant="h6"
            color="textPrimary"
          >
            <ListItem button key={'logout-link'}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText 
                primary={"Deconnexion"}
              />
            </ListItem>
          </Link> : null
        }

      </List>
    </div>
  )

  return (
    <div>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
})

export default TemporaryDrawer