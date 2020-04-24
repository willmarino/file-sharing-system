import {
  RECEIVE_FRIEND_REQUEST,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_FRIEND_REQUEST,
  RECEIVE_FETCHED_STATUS
} from '../actions/friend_request_actions';

const FriendRequestReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_FRIEND_REQUEST:
      return Object.assign({}, state, { [action.fr.id] : action.fr });
    case REMOVE_FRIEND_REQUEST:
      newState = Object.assign({}, state);
      delete newState.frId;
      return newState;
    case RECEIVE_FRIEND_REQUESTS:
      newState = {};
      action.frs.forEach((fr) => {
        newState[fr.id] = fr;
      });
      return Object.assign({}, state, { [action.key] : newState });
    case RECEIVE_FETCHED_STATUS:
      return Object.assign({}, state, { fetched : true });
    default:
      return state;
  }
}

export default FriendRequestReducer;