import React from 'react';

class HeaderDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      open: true
    }
  }

  render(){
    if(!this.state.open){
      return <p></p>;
    }
    return(
      <CSSTransition classNames='regular-dropdown' in={this.state.open} timeout={750}>
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