import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';
import NavButtonContainer from '../../buttons/nav_button_container';
import HeaderDropdownButton from '../../buttons/header_dropdown_button'

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          <ul className='ud-header-buttons'>
            <NavButtonContainer message='files' destinationRoute='/' highlightedRoutes={['/', '/add', '/display']}/>
            <NavButtonContainer message='connect' destinationRoute='/connect' highlightedRoutes={['/connect']}/>
            <HeaderDropdownButton/>
          </ul>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;