import {
  RECEIVE_SESSION_ERRORS
} from '../actions/session_errors_actions';

const SessionErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return [action.error];
    default:
      return state;
  }
}

export default SessionErrorsReducer;