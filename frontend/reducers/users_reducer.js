import {
  RECEIVE_USER,
  RECEIVE_USERS,
  REMOVE_USER
} from '../actions/user_actions';

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
    case REMOVE_USER:
      newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;