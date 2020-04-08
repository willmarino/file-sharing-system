import React from 'react';
import UserBlock from '../../user/user_block';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logoutUser();
  }

  render(){
    return(
      <div className='ud-header-container'>
        <UserBlock user={this.props.user}/>
        <div className='ud-header-actions'>
          <div className='ud-header-action'>
            <p>files</p>
          </div>
          <div className='ud-header-action'>
            <p>connect</p>
          </div>
          <div className='ud-header-action' onClick={this.handleLogout}>
            <p>log out</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;