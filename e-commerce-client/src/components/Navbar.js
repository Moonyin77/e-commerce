import React, { useRef } from 'react'

// MUI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import Link from '@material-ui/core/Link'
import SearchIcon from '@material-ui/icons/Search'
import CssBaseline from '@material-ui/core/CssBaseline'
import Switch from '@material-ui/core/Switch';
import { fade, makeStyles } from '@material-ui/core/styles'

// Router
import { Link as RouterLink } from 'react-router-dom'

// Components
import Sidebar from './Sidebar'
import CartPopover from './ShopCart/CartPopover'

function SearchAppBar(props) {
  const classes = useStyles()

  // Create ref for sidebar
  const childRef = useRef()

  // const [theme, setTheme] = React.useState(true);

  // const handleChange = event => {
  //   setTheme(event.target.checked);
  // };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => childRef.current.show()}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link 
            component={RouterLink} 
            className={classes.title}
            to="/" 
            variant="h6"
            color="textPrimary"
          >
            <Typography variant="h6" noWrap>
              T & M & D
            </Typography>

          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Switch
            checked={props.getCurrentTheme() === 'light' ? true : false}
            onChange={props.switchTheme}
            value="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          {/* <FormControlLabel>
            control={<Switch onChange={handleChange} aria-label="theme switch" />}
            label={ theme ? 'lightTheme' : 'darkTheme'}
          </FormControlLabel> */}
          <CartPopover />
        </Toolbar>
      </AppBar>
      <Sidebar 
        isAuthed={props.isAuthed}
        isAdmin={props.isAdmin}
        ref={childRef}
      />

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  cartIcon: {
    marginLeft: '1em'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))

export default SearchAppBar