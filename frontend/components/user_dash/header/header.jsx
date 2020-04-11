import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';
import { GoGear } from 'react-icons/go';
import HeaderButton from './header_button';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      lastClicked: null
    }

    this.classNames={
      focused: 'ud-header-action-focused',
      passive: 'ud-header-action'
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.headerDropdown = <HeaderDropdown />;
    // (<CSSTransition classNames='regular-dropdown' in={this.state.headerDropdownOpen} timeout={750}>
    //     <ul className='regular-dropdown'>
    //       <li onClick={this.handleLogout} className='regular-dropdown-item'>
    //         <p>Logout</p>
    //       </li>
    //     </ul>
    //   </CSSTransition>
    // );
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

  openDropdown(){
    
  }

  render(){
    // let headerDropdown = (this.state.headerDropdownOpen && this.state.lastClicked === 2) ? this.headerDropdown : null;
    // let classes = [];
    // for(let i = 0; i < 3; i++){
    //   if(i === this.state.lastClicked){
    //     classes.push('ud-header-action ud-header-action-focused');
    //   }else{
    //     classes.push('ud-header-action');
    //   }
    // }
    // let headerActions = (
    //   <ul className='ud-header-actions'>
    //     <li className={classes[0]} onClick={this.navToFiles()} key={0} data-idx={'0'}>
    //       <p>files</p>
    //     </li>
    //     <li className={classes[1]} onClick={this.navToConnect()} key={1} data-idx={'1'}>
    //       <p>connect</p>
    //     </li>
    //     <li id='header-dropdown' className={classes[2]} onFocus={this.handleOnFocus} onClick={this.openDropdown()} key={2} data-idx={'2'}>
    //       <GoGear/>
    //       {headerDropdown}
    //     </li>
      // </ul>);
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          {/* {headerActions} */}
          <ul className='ud-header-buttons'>
            <HeaderButton message='files'/>
            <HeaderButton message='connect'/>
            <HeaderButton message={<GoGear/>}/>
          </ul>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;