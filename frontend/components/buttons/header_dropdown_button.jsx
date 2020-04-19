import React from 'react';
import HeaderDropdownContainer from '../dropdowns/header_dropdown_container';

class HeaderDropdownButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.dropdown = <HeaderDropdownContainer/>;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open : !this.state.open });
  }

  render(){
    let dropdown = null;
    let manualClassList = 'ud-header-action';
    if(this.state.open){
      manualClassList += ' ud-header-action-focused';
      dropdown = this.dropdown;
    }
    return(
      <div onClick={this.handleClick} className={manualClassList}>
        {this.props.display}
        {dropdown}
        {/* {this.props.dropdown} */}
      </div>
    )
  }
}

export default HeaderDropdownButton;