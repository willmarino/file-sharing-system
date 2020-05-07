import React from 'react';

class NavButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let { history, destinationRoute } = this.props;
    history.push(destinationRoute);
  }

  render(){
    let { history, highlightedRoutes } = this.props;
    let manualClassList = 'ud-header-button';
    if(highlightedRoutes.includes(history.location.pathname)){
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