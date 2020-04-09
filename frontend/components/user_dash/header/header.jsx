import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.navToFiles = this.navToFiles.bind(this);
    this.navToConnect = this.navToConnect.bind(this);
  }

  handleLogout(){
    this.props.logoutUser();
  }

  navToFiles(){
    this.props.history.push('/');
  }

  navToConnect(){
    this.props.history.push('/connect');
  }

  render(){
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          <div className='ud-header-actions'>
            <div className='ud-header-action' onClick={this.navToFiles}>
              <p>files</p>
            </div>
            <div className='ud-header-action' onClick={this.navToConnect}>
              <p>connect</p>
            </div>
            <div className='ud-header-action' onClick={this.handleLogout}>
              <p>log out</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;