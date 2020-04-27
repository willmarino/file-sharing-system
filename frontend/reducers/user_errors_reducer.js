import {
  RECEIVE_USER_ERRORS
} from '../actions/user_errors_actions';
import { CLEAR_ALL } from '../actions/session_actions';

const UserErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return [action.type];
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

export default UserErrorsReducer;