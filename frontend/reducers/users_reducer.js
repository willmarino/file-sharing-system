import {
  RECEIVE_USER,
  RECEIVE_USERS,
  REMOVE_USER,
  RECEIVE_USER_IDS,
  CLEAR_USER_IDS
} from '../actions/user_actions';
import { CLEAR_ALL } from '../actions/session_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id] : action.user });
    case RECEIVE_USERS:
      action.users.forEach((user) => {
        newState[user.id] = user;
      })
      return Object.assign({}, state, newState);
    case RECEIVE_USER_IDS:
      return Object.assign({}, state, { [action.at] : action.ids });
    case CLEAR_USER_IDS:
      newState = Object.assign({}, state);
      delete newState[action.at];
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    case CLEAR_ALL:
      return {};
    default:
      return state;
  }
}

export default UsersReducer;