import React from 'react';
import { ProtectedRoute, AuthRoute } from './util/route_util/protected_route';
import UserDashboardContainer from './components/user_dashboard_container';
import GatewayPage from './components/gateway/gateway_page';

const App = () => {
  return(
    <div className='app-container'>
      <ProtectedRoute path='/' component={UserDashboardContainer}/>
      <AuthRoute path='/gateway' component={GatewayPage}/>
    </div>
  )
}

export default App;