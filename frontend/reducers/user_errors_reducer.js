import {
  RECEIVE_USER_ERRORS
} from '../actions/user_errors_actions';

const UserErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return [action.type];
    default:
      return state;
  }
}

export default UserErrorsReducer;