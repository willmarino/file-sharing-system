import React from 'react';
import UserRowContainer from './user_row_container';

const SearchResult = (props) => {
  return(
    <ul>
      {props.users.map((user) => <UserRowContainer user={user}/>)}
    </ul>
  )
}

export default SearchResult;