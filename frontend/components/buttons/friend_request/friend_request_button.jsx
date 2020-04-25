import React from 'react';
import SendFRContainer from './send_fr_container';
import AcceptFRContainer from './accept_fr_container';
import { FaEllipsisH, FaUserFriends } from 'react-icons/fa';

// In this component, userId is the id of the user who the search result row, which this component is inside of, addressess.
// So, if I search for a pull up Lisa, then this component will have to look for interactions with Lisa
class FriendRequestButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let { friendRequests, userId, currentUser } = this.props;
    // 1 - the user has sent a friend request which we have received
    // 2 - we have sent a friend request to this user, and are waiting for a response
    // 3 - there has been no contact between the two of you, so you can click to send a friend request
    if(friendRequests.received){
      if(friendRequests.received[userId]){
        return <AcceptFRContainer fr={friendRequests.received[userId]}/>;
      }
    }
    if(friendRequests.sent){
      if(friendRequests.sent[userId]){
        return <FaEllipsisH/>;
      }
    }
    if(currentUser.friends.includes(userId.toString())){
      return <FaUserFriends/>;
    }
    return <SendFRContainer userId={userId}/>;
  }
}

export default FriendRequestButton;