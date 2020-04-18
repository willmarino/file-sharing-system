import React from 'react';

class HeaderDropdownButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open : !this.state.open });
  }

  render(){
    let manualClassList = 'ud-header-action';
    if(this.state.open){
      manualClassList += ' ud-header-action-focused';
    }
    return(
      <div onClick={this.handleClick} className={manualClassList}>
        {this.props.display}
        {this.props.dropdown}
      </div>
    )
  }
}

export default HeaderDropdownButton;