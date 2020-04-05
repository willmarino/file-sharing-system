import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import RegisterFormContainer from './register/register_form_container';

const GatewayPage = (props) => {
  debugger;
  return(
    <div className='gateway-page-container'>
      <Route exact path='/gateway' component={LoginFormContainer}/>
      <Route exact path='/gateway/register' component={RegisterFormContainer}/>
    </div>
  )
}

export default GatewayPage;