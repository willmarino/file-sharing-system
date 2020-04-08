import React from 'react';

const UserBlock = (props) => {
  return(
    <div className='user-block-container'>
      <p>{props.user.username}</p>
    </div>
  )
}

export default UserBlock;