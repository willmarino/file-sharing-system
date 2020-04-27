import {
  RECEIVE_SESSION_ERRORS
} from '../actions/session_errors_actions';
import { CLEAR_ALL } from '../actions/session_actions';

const SessionErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return [action.error];
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer;