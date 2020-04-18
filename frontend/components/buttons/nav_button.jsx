import React from 'react';

class NavButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let { history, route } = this.props;
    history.push(route);
  }

  render(){
    debugger;
    let { history, route } = this.props;
    let manualClassList = 'ud-header-button';
    if(route === history.location.pathname){
      manualClassList += ' ud-header-button-focused';
    }
    return(
      <div className={manualClassList} onClick={this.handleClick}> 
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default NavButton;