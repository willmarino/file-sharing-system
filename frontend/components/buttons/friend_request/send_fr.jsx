import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';

class SendFR extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.createFriendRequest(this.props.userId);
  }
  render(){
    return(
      <div onClick={this.handleClick} className='frb-container'>
        <TiPlusOutline/>
      </div>
    )
  }
}
export default SendFR;