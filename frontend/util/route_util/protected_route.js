import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// the protected route will render the dash page when a user is already logged in, and will redirect to the login page if the user is not logged in
const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route
    path={path}
    exact={exact}
    render={
      (props) => ( loggedIn ? ( <Component {...props}/> ) : ( <Redirect to='/gateway'/> ))
    }
  />
)

// the auth route will render the login page if the user is not logged in, and will redirect to the dash page if the user is logged in
const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route
    path={path}
    exact={exact}
    render={
      (props) => ( !loggedIn ? ( <Component {...props}/>) : ( <Redirect to='/'/>))
    }

  />
)

const msp = (state) => ({
  loggedIn : Boolean(state.session.currentUser)
})

export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
export const AuthRoute = withRouter(connect(msp, null)(Auth));