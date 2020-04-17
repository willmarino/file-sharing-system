import React from 'react';

const UserRow = (props) => {
  debugger;
  return(
    <div className='search-result-row'>
      <p>{props.user.username}</p>
      <p>{props.user.description}</p>
      <p>{props.errors}</p>
    </div>
  )
}

export default UserRow;