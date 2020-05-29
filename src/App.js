import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route,Switch, Redirect,withRouter} from 'react-router-dom'
import RedirectAuth from './containers/auth/RedirectAuth/RedirectAuth'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Layout from './components/layout/layout'
import Apps from './components/Apps/Apps'
import AppDetails from './containers/appDetails/appDetails'
import Auth from './containers/auth/Auth'
import Profile from './containers/profile/Profile'
import Logout from './containers/auth/Logout/Logout'
import NotFound from './components/page/NotFound'

import {CheckAuthState} from './action/authActions'


class App extends Component {

  componentDidMount = () => {
    this.props.CheckAuthState();
  }
  
  renderContent = () => {

    if (this.props.isAuth) {
      return (
          <Switch>

            <Route  path='/' exact>
              <Layout>
                    <Apps />
                </Layout>
              </Route>
            <Route  path='/auth' exact component={Auth} />
          
            <Route  path='/app/:id' exact render={(props) => (
              <Layout>
                    <AppDetails {...props}  />
                </Layout>
            )}  >  
            </Route>
            <Route  path='/me' exact render={(props) => (
              <Layout>
                    <Profile {...props}  />
                </Layout>
            )}  >  
            </Route>

            <Route  path='/logout' exact component={Logout} />
            <Route component={NotFound} />
          </Switch>
    )

    } else {
       return (
          <Switch>
            <Route  path='/' exact component={RedirectAuth} />
            <Route  path='/auth' exact component={Auth} />
            <Route  path='/signup' exact component={Auth} />
            <Route component={NotFound} />
          </Switch>
          )
    }
     

  }
  render() {
    return (
           this.renderContent()
    )
  }
}

const mapStateToProps =(state) =>{
  return {
    isAuth:state.auth.token != null ? true : false,
  }
}

export default withRouter(connect(mapStateToProps,{CheckAuthState})(App)) ;
