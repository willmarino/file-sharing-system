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
      if(state.sent){
        newState = state.sent;
      }else{
        newState = {};
      }
      newState[action.fr.receiver_id] = action.fr;
      return Object.assign({}, state, newState);
    case REMOVE_FRIEND_REQUEST:
      newState = Object.assign({}, state);
      delete newState.frId;
      return newState;
    case RECEIVE_FRIEND_REQUESTS:
      newState = {};
      action.frs.forEach((fr) => {
        (action.key === 'sent') ? newState[fr.receiver_id] = fr : newState[fr.sender_id] = fr;
      });
      return Object.assign({}, state, { [action.key] : newState });
    case RECEIVE_FETCHED_STATUS:
      return Object.assign({}, state, { fetched : true });
    default:
      return state;
  }
}

export default FriendRequestReducer;