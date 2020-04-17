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
      <CSSTransition classNames='height-transition' in={this.props.inProp} timeout={750}>
        <ul className='regular-dropdown'>
          <li onClick={this.handleLogout} className='regular-dropdown-item'>
            <p>Logout</p>
          </li>
          <li className='regular-dropdown-item'>
            <p>Sample 1</p>
          </li>
          <li className='regular-dropdown-item'>
            <p>Sample 2</p>
          </li>
          <li className='regular-dropdown-item'>
            <p>Sample 3</p>
          </li>
        </ul>
      </CSSTransition>
    )
  }
}

export default HeaderDropdown;