import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendRequestsReducer from './friend_requests_reducer';
import UserFilesReducer from './user_files_reducer';

const EntitiesReducer = combineReducers({
  users : UsersReducer,
  friendRequests : FriendRequestsReducer,
  userFiles : UserFilesReducer
});

export default EntitiesReducer;