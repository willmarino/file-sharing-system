import * as SessionUtil from '../util/other_util/session_util';
import { receiveUser } from './user_actions';
import { receiveSessionErrors } from './session_errors_actions';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const CLEAR_ALL = "CLEAR_ALL";

export const receiveSession = (userId) => ({
  type: RECEIVE_SESSION,
  userId
});

const removeSession = () => ({
  type: REMOVE_SESSION
});

const clearAll = () => ({
  type: CLEAR_ALL
});

export const loginUser = (user) => dispatch => (
  SessionUtil.loginUser(user)
    .then(res => {
      dispatch(receiveSession(res.userId));
      dispatch(receiveUser(res.user));
    },
    errors => {
      dispatch(receiveSessionErrors(errors.responseJSON[0]));
    })
);

export const logoutUser = () => dispatch => (
  SessionUtil.logoutUser()
    .then(() => {
      dispatch(removeSession());
      dispatch(clearAll());
    })
);