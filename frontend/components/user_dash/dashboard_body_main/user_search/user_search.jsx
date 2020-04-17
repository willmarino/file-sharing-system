import React from 'react';
import SearchHeaderContainer from './search_header_container';
import SearchResultContainer from './search_result_container';

const UserSearch = () => {
  return(
    <div className='user-search-container'>
      <SearchHeaderContainer/>
      <SearchResultContainer/>
    </div>
  )
}

export default UserSearch;