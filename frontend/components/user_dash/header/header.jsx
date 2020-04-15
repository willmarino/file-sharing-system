import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';
import { GoGear } from 'react-icons/go';
import HeaderButton from './header_button';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.logoutRef = React.createRef();
    this.filesRef = React.createRef();
    this.connectRef = React.createRef();

    this.state = {
      lastClicked: this.filesRef
    }

    this.switchClasses = this.switchClasses.bind(this);
    this.navToFiles = this.navToFiles.bind(this);
    this.navToConnect = this.navToConnect.bind(this);
  }

  switchClasses(newRef){
    return () => {
      if(this.state.lastClicked !== newRef){
        this.state.lastClicked.current.classList.remove('ud-header-button-focused');
        newRef.current.classList.add('ud-header-button-focused');
        this.setState({ lastClicked : newRef });
      }
    }
  }

  navToFiles(){
    this.switchClasses(this.filesRef)();
    this.props.history.push('/');
  }

  navToConnect(){
    this.switchClasses(this.connectRef)();
    this.props.history.push('/connect');
  }

  render(){

    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          <ul className='ud-header-buttons'>
            <HeaderButton
              message='files' dropdown={false} navFunction={this.navToFiles} refProp={this.filesRef}/>
            <HeaderButton message='connect' dropdown={false} navFunction={this.navToConnect} refProp={this.connectRef}/>
            <HeaderButton message={<GoGear/>} dropdown={true} navFunction={null} refProp={this.logoutRef} switchClasses={this.switchClasses(this.logoutRef)}/>
          </ul>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;

































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




      // (<CSSTransition classNames='regular-dropdown' in={this.state.headerDropdownOpen} timeout={750}>
    //     <ul className='regular-dropdown'>
    //       <li onClick={this.handleLogout} className='regular-dropdown-item'>
    //         <p>Logout</p>
    //       </li>
    //     </ul>
    //   </CSSTransition>
    // );