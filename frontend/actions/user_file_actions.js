import * as UserFileUtil from '../util/other_util/user_file_util';

export const RECEIVE_FILE = "RECEIVE_FILE";
export const RECEIVE_FILES = "RECEIVE_FILES";
export const RECEIVE_FILES_FETCHED_STATUS = "RECEIVE_FILES_FETCHED_STATUS";

const receiveFile = (file) => {
  return({
  type: RECEIVE_FILE,
  file
  })
}

const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files
});

const receiveDisplayFiles = () => ({
  type: RECEIVE_FILES_FETCHED_STATUS
});

export const createUserFile = (info) => (dispatch) => {
  return(
    UserFileUtil.createUserFile(info)
      .then(res => {
        dispatch(receiveFile(res.file));
      })
  )
};

export const fetchFiles = () => dispatch => (
  UserFileUtil.fetchFiles()
    .then(res => {
      debugger;
      dispatch(receiveFiles(res));
      dispatch(receiveDisplayFiles());
    })
)
