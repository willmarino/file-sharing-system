import React from 'react';
import HeaderDropdownContainer from '../../dropdowns/header_dropdown_container';

class HeaderButton extends React.Component{
  constructor(props){
    super(props);

    if(this.props.dropdown){
      this.state = {
        open: false,
      }
      this.dropdown = <HeaderDropdownContainer inProp={this.state.open}/>
    }

    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCloseDropdown(){
    this.setState({ open : false });
  }

  handleClick(){
    this.setState({ open : !this.state.open });
  }


  render(){
    console.log('render');
    let dropdown = null;
    if(this.props.dropdown){
      if(this.state.open){
        dropdown = this.dropdown;
      }
    }
    return(
      <li tabIndex='0' className='ud-header-button' onClick={(this.props.dropdown) ? this.handleClick : null} onBlur={(this.props.dropdown) ? this.handleCloseDropdown : null}>
        <p>{this.props.message}</p>
        {dropdown}
      </li>
    )
  }
}

export default HeaderButton;