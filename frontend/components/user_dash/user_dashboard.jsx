import React from 'react';

class UserDashboard extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render(){
    return(
      <div className='user-dashboard-container'>
        <p>this is the user dashboard</p>
        <p onClick={this.handleLogout}>working log out button</p>
      </div>

    )
  }
}

export default UserDashboard;