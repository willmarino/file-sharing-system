import React from 'react';
import { IoMdPerson } from 'react-icons/io';

const UserRow = (props) => {
  debugger;
  let avatar = (props.user.photoURL === 'default') ? <IoMdPerson/> : <img src={props.user.photoURL} alt=""/>
  return(
    <div className='search-result-row'>
      {avatar}
      <p>{props.user.username}</p>
      <p>{props.user.description}</p>
    </div>
  )
}

export default UserRow;