import React from 'react';
// import { IoMdPerson } from 'react-icons/io';
import DefaultUserIcon from '../../../user/default_user_icon';

const UserRow = (props) => {
  let avatar = (props.user.photoURL === 'default') ? <DefaultUserIcon/> : <img src={props.user.photoURL} alt=""/>
  return(
    <div className='search-result-row'>
      {avatar}
      <div id='user-row-username-container'>
        <p>{props.user.username}</p>
      </div>
      <p>{props.user.description}</p>
    </div>
  )
}

export default UserRow;