import { connect } from 'react-redux'
import SearchResult from './search_result';
import { fetchFriendRequests } from '../../../../actions/friend_request_actions';

const msp = (state) => ({
  users: state.entities.users,
  error: state.errors.searchErrors[0]
});

const mdp = (dispatch) => ({
  fetchFriendRequests: () => dispatch(fetchFriendRequests())
});

export default connect(msp, mdp)(SearchResult);