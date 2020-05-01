import {
  RECEIVE_FILE,
  RECEIVE_FILES,
  RECEIVE_FILES_FETCHED_STATUS
} from '../actions/user_file_actions';

const FilesReducer = (state={}, action) => {
  if(action.type === RECEIVE_FILES) debugger;
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_FILE:
      return Object.assign({}, state, { [action.file.id] : action.file });
    case RECEIVE_FILES:
      action.files.forEach((file) => {
        newState[file.id] = file;
      })
      return Object.assign({}, state, newState);
    case RECEIVE_FILES_FETCHED_STATUS:
      return Object.assign({}, state, { fetched : true });
    default:
      return state;
  }
}

export default FilesReducer;