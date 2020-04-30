import * as UserFileUtil from '../util/other_util/user_file_util';

export const RECEIVE_USER_FILE = "RECEIVE_USER_FILE";

const receiveUserFile = (userFileObj) => {
  debugger;
  return({
  type: RECEIVE_USER_FILE,
  userFileObj
  })
}

export const createUserFile = (info) => (dispatch) => {
  debugger;
  return(
    UserFileUtil.createUserFile(info)
      .then(res => {
        debugger;
        dispatch(receiveUserFile(res.user_file));
      })
  )
}
