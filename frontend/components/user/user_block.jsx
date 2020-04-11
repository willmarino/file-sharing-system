import React from 'react';

const UserBlock = (props) => {
  if(!props.user){
    return <p>loading</p>;
  }
  return(
    <div className='user-block-container'>
      <p>{props.user.username}</p>
    </div>
  )
}

export default UserBlock;