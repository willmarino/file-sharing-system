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
      <div>
        <p>this is the user dashboard</p>
        <button onClick={this.handleLogout}></button>
      </div>

    )
  }
}

export default UserDashboard;