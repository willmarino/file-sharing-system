import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './login/login_form';

const GatewayPage = () => {
  return(
    <div className='gateway-page-container'>
      <Route path='/login' component={LoginForm}/>
      <Route path='/register' component={}/>
    </div>
  )
}

export default GatewayPage;