import {
  RECEIVE_FRIEND_REQUEST,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_FRIEND_REQUEST,
  RECEIVE_FETCHED_STATUS,
} from '../actions/friend_request_actions';
import { CLEAR_ALL } from '../actions/session_actions';

const FriendRequestReducer = (state={}, action) => {
  if(action.type === REMOVE_FRIEND_REQUEST) debugger;
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_FRIEND_REQUEST:
      // the problem is here
      if(state.sent){
        newState = state.sent;
        newState[action.fr.receiver_id] = action.fr;
      }else{
        newState = { 'sent' : {}};
        newState.sent[action.fr.receiver_id] = action.fr;
      }
      return Object.assign({}, state, newState);
    case REMOVE_FRIEND_REQUEST:
      newState = Object.assign({}, state);
      delete newState.received.frId;
      return newState;
    case RECEIVE_FRIEND_REQUESTS:
      newState = {};
      action.frs.forEach((fr) => {
        (action.key === 'sent') ? newState[fr.receiver_id] = fr : newState[fr.sender_id] = fr;
      });
      return Object.assign({}, state, { [action.key] : newState });
    case RECEIVE_FETCHED_STATUS:
      return Object.assign({}, state, { fetched : true });
    case CLEAR_ALL:
      return {};
    default:
      return state;
  }
}

export default FriendRequestReducer;