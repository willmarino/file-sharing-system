import * as UserFileUtil from '../util/other_util/user_file_util';

export const RECEIVE_USER_FILE = "RECEIVE_USER_FILE";

const receiveUserFile = (userFileObj) => {
  return({
  type: RECEIVE_USER_FILE,
  userFileObj
  })
}

export const createUserFile = (info) => (dispatch) => {
  return(
    UserFileUtil.createUserFile(info)
      .then(res => {
        dispatch(receiveUserFile(res.user_file));
      })
  )
}
