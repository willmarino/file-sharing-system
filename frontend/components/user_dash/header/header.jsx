import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';
import { GoGear } from 'react-icons/go';
// import HeaderButton from './header_button';
import NavButtonContainer from '../../buttons/nav_button_container';
import HeaderDropdownButton from '../../buttons/header_dropdown_button'

class Header extends React.Component{
  constructor(props){
    super(props);

    // this.logoutRef = React.createRef();
    // this.filesRef = React.createRef();
    // this.connectRef = React.createRef();

    // this.state = {
    //   lastClicked: this.filesRef,
    //   highLighted: false
    // }
    // this.setInitialClass = this.setInitialClass.bind(this);
    // this.switchClasses = this.switchClasses.bind(this);
    // this.navToFiles = this.navToFiles.bind(this);
    // this.navToConnect = this.navToConnect.bind(this);
  }

  // switchClasses(newRef){
  //   return () => {
  //     if(this.state.lastClicked !== newRef){
  //       this.state.lastClicked.current.classList.remove('ud-header-button-focused');
  //       newRef.current.classList.add('ud-header-button-focused');
  //       this.setState({ lastClicked : newRef, highLighted : true });
  //     }
  //   }
  // }

  // setInitialClass(){
  //   if(!this.state.highLighted && this.filesRef.current){
  //     this.filesRef.current.classList.add('ud-header-button-focused');
  //     this.setState({ highLighted : true });
  //   }
  // }

  // navToFiles(){
  //   this.switchClasses(this.filesRef)();
  //   this.props.history.push('/');
  // }

  // navToConnect(){
  //   this.switchClasses(this.connectRef)();
  //   this.props.history.push('/connect');
  // }

  render(){
    // if I havent highlighted an option, but I am past the first render (and have therefore set lastClicked = this.filesref = files header button)
    // I can set the initial highlighting

    // this.setInitialClass();
    debugger;
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          <ul className='ud-header-buttons'>
            {/* <HeaderButton message='files' dropdown={false} navFunction={this.navToFiles} refProp={this.filesRef}/>
            <HeaderButton message='connect' dropdown={false} navFunction={this.navToConnect} refProp={this.connectRef}/>
            <HeaderButton message={<GoGear/>} dropdown={true} navFunction={null} refProp={this.logoutRef} switchClasses={this.switchClasses(this.logoutRef)}/> */}


            <NavButtonContainer message='files' route='/'/>
            <NavButtonContainer message='connect' route='/connect'/>
            <HeaderDropdownButton/>
          </ul>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;