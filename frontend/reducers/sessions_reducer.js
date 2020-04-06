import {
  RECEIVE_SESSION,
  REMOVE_SESSION
} from '../actions/session_actions';

const SessionsReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION:
      return { currentUser: action.userId }
    case REMOVE_SESSION:
      return { currentUser: null }
    default:
      return state;
  }
}

export default SessionsReducer;