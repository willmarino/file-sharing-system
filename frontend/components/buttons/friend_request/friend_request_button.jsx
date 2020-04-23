import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    // e.preventDefault();
    // 
  }

  render(){
    return(
      <div className='frb-container' onClick={this.handleClick}>
        <TiPlusOutline/>
      </div>
    )
  }
}

export default FriendRequestButton;