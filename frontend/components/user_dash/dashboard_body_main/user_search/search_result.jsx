import React from 'react';
import UserRowContainer from './user_row_container';

const SearchResult = (props) => {
  if(!props.users.userSearchIds){
    return <p>{props.error}</p>
  }
  let users = props.users.userSearchIds.map((id) => props.users[id]);
  return(
    <ul className='search-result-container'>
      {users.map((user) => <UserRowContainer user={user} key={user.username}/>)}
    </ul>
  )
}

export default SearchResult;