import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { FaHandsHelping, FaEllipsisH } from 'react-icons/fa';

class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);
    this.options = {
      none: {
        func: (id) => this.props.createFriendRequest(id),
        icon: <TiPlusOutline/>
      },
      received: {
        func: (info) => this.props.respondToFriendRequest(info),
        icon: <FaHandsHelping/>
      },
      sent: {
        func: () => {1 + 1},
        icon: <FaEllipsisH/>
      }
    }
    this.func = null;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();

  }

  // I want to render one icon if I have sent out a request and am awaiting a response,
  // another icon if I have received a request from someone and not yet responded,
  // and another icon if there has been no contact between the two users
  render(){
    let { friendRequests, userId } = this.props;
    let el;
    // if(Object.values(friendRequests.received).map((fr) => fr.sender_id).includes(userId){

    // }
    return(
      <div className='frb-container' onClick={this.handleClick}>
        <TiPlusOutline/>
      </div>
    )
  }
}

export default FriendRequestButton;