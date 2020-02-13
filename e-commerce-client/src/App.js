import React, { Component } from 'react'

// MUI
import { ThemeProvider } from '@material-ui/core/styles'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NonAuthedRoute from './components/Auth/NonAuthedRoute'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import AdminRoute from './components/Auth/AdminRoute'

// Components
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import Navbar from './components/Navbar'
import Logout from './components/Auth/Logout'
import StickyFooter from './components/Footer'
import CartList from './components/ShopCart/CartList'

// Pages
import AdminIndex from './components/Admin/AdminIndex'
import AdminUserListPage from './pages/admin/AdminUserListPage'
import AdminCategoryPage from './pages/admin/AdminCategoryListPage'
import SizeChart from './pages/SizeChart'
import Paiement from './pages/Paiement'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'

// Utils
import { getToken, getUser, deleteUser, storeUser } from './utils/localStorage'
import withApi from './components/Api/withApi'
import withSwitch from './components/ThemeSwitch/withSwitch'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isAuthed: false,
      user: null,
    }

    const token = getToken()
    if (token) {
      this.state.isAuthed = true

      const user = getUser()
      if (user) {
        this.state.user = user
      }
    }

    this.updateTokenState = this.updateTokenState.bind(this)
    this.getUserFromApi = this.getUserFromApi.bind(this)
  }

  // Get and store user details in App state, doesnt work if token is not in local storage
  getUserFromApi() {
    this.props.api.getUser()
      .then(res => {
        switch (res.status) {
          case 200:
            // Store user data to localstorage
            storeUser(res.data.success)

            this.setState({
              user: res.data.success
            })
            console.log('Successfully got user details in App')
            break;
        
          default:
            console.error(`Error on getting user detail ${res}`)
            break;
        }
      })
      .catch(err => {
        console.error(`Error on getting user detail ${err}`)
      })
  }

  /**
   * If token is present, change isAuthed to true
   * if token is not present, change isAuthed to false
   */
  updateTokenState() {
    const token = getToken()
    if (token) {
      this.setState({
        isAuthed: true,
      })
      this.getUserFromApi()
    } else {
      this.setState({
        isAuthed: false,
        user: null
      })
      deleteUser()
    }
  }

  render() {
    const {
      updateTokenState
    } = this
    const {
      user,
      isAuthed,
    } = this.state

    return (
      <ThemeProvider theme={this.props.theme}>
        <Router>
          <Navbar 
            isAuthed={this.state.isAuthed}
            isAdmin={user !== null && user.role === 'ROLE_ADMIN' ? user.role : false}
            switchTheme={this.props.switchTheme}
            getCurrentTheme={this.props.getCurrentTheme}
          />

          {/* Routes */}
          <Switch>

            {/* NON AUTHED ROUTES (Not authed, no token) */}
            {/* Login page */}
            <NonAuthedRoute 
              path='/login' 
              auth={isAuthed}
              component={(state) => <LoginForm updateToken={updateTokenState} />}
            />
              

            {/* Register page */}
            <NonAuthedRoute 
              path='/register' 
              auth={isAuthed} 
              component={(state) => <RegisterForm updateToken={updateTokenState} />}
            />

            {/* AUTHED SPECIFIC ROUTES */}
            <ProtectedRoute 
              path="/logout" 
              auth={isAuthed}
              component={(state) => <Logout callback={this.updateTokenState} />}
            />
            
            {/* ADMIN ROUTES */}
            <AdminRoute 
              path="/admin"
              exact
              role={user !== null ? user.role : false}
              component={(state) => <AdminIndex />}
            />

            <AdminRoute 
              path="/admin/user"
              exact
              role={user !== null ? user.role : false}
              component={AdminUserListPage}
            />

            <AdminRoute 
              path="/admin/category"
              exact
              role={user !== null ? user.role : false}
              component={AdminCategoryPage}
            />

            {/* Public pages (size) */}
            <Route 
              path="/size" 
              exact
              component={SizeChart}
            />

            {/* Public pages (contact) */}
            <Route 
              path="/contact" 
              exact
              component={Contact}
            />

            {/* Public pages (product) */}
            <Route 
              path="/article/:id" 
              exact
              component={(props) => (< Product 
                isAdmin={user !== null && user.role === 'ROLE_ADMIN' ? user.role : false}
                auth={isAuthed} 
                user={user}
                {...props}
              />)
                
            }
            />

            {/* Public pages (paiement) */}
            <Route 
              path="/paiement" 
              exact
              component={Paiement}
            />
            
            {/* Public pages (authed & non authed) */}
            <Route 
              path="/" 
              exact
              component={Home}
            />

            <Route 
              path="/cart" 
              exact
              component={CartList}
            />

            <Route 
              path="/no-access" 
              exact
              component={() => (<p>Vous n'avez pas accès a cette page !</p>)}
            />

          </Switch>
          <StickyFooter />
        </Router>
      </ThemeProvider>
    )
  }
}

export default withSwitch(withApi(App))