import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import RegisterFormContainer from './register/register_form_container';

const GatewayPage = (props) => {
  return(
    <div className='gateway-page-container'>
      <p className='gateway-page-header'>File Sharing System</p>
      <Route exact path='/gateway' component={LoginFormContainer}/>
      <Route exact path='/gateway/register' component={RegisterFormContainer}/>
    </div>
  )
}

export default GatewayPage;