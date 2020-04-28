import {
  RECEIVE_USER_FILE
} from '../actions/user_file_actions';

const UserFilesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER_FILE:
      return Object.assign({}, state, { [action.userFileObj.id] : action.userFileObj });
    default:
      return state;
  }
}

export default UserFilesReducer;