import React from 'react';
import UserRowContainer from './user_row_container';

class SearchResult extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchFriendRequests();
  }

  render(){
  // if()
  if(!this.props.users.userSearchIds){
    return <p>{this.props.error}</p>
  }
  let users = this.props.users.userSearchIds.map((id) => this.props.users[id]);
  return(
    <ul className='search-result-container'>
      {users.map((user) => <UserRowContainer user={user} key={user.username}/>)}
    </ul>
  )}
}

export default SearchResult;