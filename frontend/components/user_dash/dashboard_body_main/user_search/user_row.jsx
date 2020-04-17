import React from 'react';

const UserRow = (props) => {
  return(
    <div className='search-result-row'>
      <p>{props.user.username}</p>
      <p>{props.user.description}</p>
    </div>
  )
}

export default UserRow;