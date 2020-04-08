import React from 'react';
import { CSSTransition } from 'react-transition-group';
import HeaderContainer from './header/header_container';
import DashboardBody from './dashboard_body/dashboard_body';

class UserDashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      mounted: false
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.setState({ mounted: true });
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render(){
    return(
      <CSSTransition classNames='reverse-transition' in={this.state.mounted} timeout={500}>
        <div className='user-dashboard-container'>
          <HeaderContainer/>
          <DashboardBody/>
        </div>
      </CSSTransition>
    )
  }
}

export default UserDashboard;