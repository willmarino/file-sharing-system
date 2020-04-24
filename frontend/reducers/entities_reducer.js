import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendRequestsReducer from './friend_requests_reducer';

const EntitiesReducer = combineReducers({
  users : UsersReducer,
  friendRequests : FriendRequestsReducer
});

export default EntitiesReducer;