import React from 'react';
import HeaderDropdownContainer from '../dropdowns/header_dropdown_container';
import { GoGear } from 'react-icons/go';
import { CSSTransition } from 'react-transition-group';

class HeaderDropdownButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.dropdown = (
    <CSSTransition in={this.state.open} timeout={750} classNames='height-transition'>
      <HeaderDropdownContainer/>
    </CSSTransition>
    )
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open : !this.state.open });
  }

  render(){
    let dropdown = null;
    let manualClassList = 'ud-header-button';
    if(this.state.open){
      manualClassList += ' ud-header-button-focused';
      dropdown = this.dropdown;
    }
    return(
      <div tabIndex='0' onClick={this.handleClick} className={manualClassList} onBlur={() => {this.setState({ open: false })}}>
        <GoGear/>
        {dropdown}
      </div>
    )
  }
}

export default HeaderDropdownButton;