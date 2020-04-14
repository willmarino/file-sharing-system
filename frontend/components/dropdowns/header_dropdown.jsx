import React from 'react';
import { CSSTransition } from 'react-transition-group';

class HeaderDropdown extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logoutUser();
  }

  render(){
    return(
      <CSSTransition classNames='regular-dropdown' in={this.props.inProp} timeout={750}>
        <ul className='regular-dropdown'>
          <li onClick={this.handleLogout} className='regular-dropdown-item'>
            <p>Logout</p>
          </li>
        </ul>
      </CSSTransition>
    )
  }
}

export default HeaderDropdown;