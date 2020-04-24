import React from 'react';
import DefaultUserIcon from '../../../user/default_user_icon';
import FriendRequestButtonContainer from '../../../buttons/friend_request/friend_request_button_container';

const UserRow = (props) => {
  let avatar = (props.user.photoURL === 'default') ? <DefaultUserIcon/> : <img src={props.user.photoURL} alt=""/>
  return(
    <div className='search-result-row'>
      <div id='sr-one'>
        {avatar}
        <div id='user-row-username-container'>
          <p>{props.user.username}</p>
        </div>
        <p>{props.user.description}</p>
      </div>
      <div id='sr-two'>
        <FriendRequestButtonContainer userId={props.user.id}/>
      </div>
    </div>
  )
}

export default UserRow;