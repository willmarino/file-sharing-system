import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendRequestsReducer from './friend_requests_reducer';
import FilesReducer from './user_files_reducer';

const EntitiesReducer = combineReducers({
  users : UsersReducer,
  friendRequests : FriendRequestsReducer,
  files : FilesReducer
});

export default EntitiesReducer;