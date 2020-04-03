import React from 'react';
import { ProtectedRoute, AuthRoute } from './util/route_util/protected_route';
import UserDashboard from './components/user_dashboard';
import LoginPage from './components/login/gateway_page';

const App = () => {
  return(
    <div>
      <ProtectedRoute path='/' component={UserDashboard}/>
      <AuthRoute path='/login' component={GatewayPage}/>
    </div>
  )
}

export default App;