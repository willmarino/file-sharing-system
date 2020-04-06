import * as SessionUtil from '../util/other_util/session_util';
import { receiveUser } from './user_actions';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";

export const receiveSession = (userId) => ({
  type: RECEIVE_SESSION,
  userId
});

const removeSession = () => ({
  type: REMOVE_SESSION
});

export const loginUser = (user) => dispatch => (
  SessionUtil.loginUser(user)
    .then(res => {
      dispatch(receiveSession(res.userId));
      dispatch(receiveUser(res.user));
    })
);

export const logoutUser = () => dispatch => (
  SessionUtil.logoutUser()
    .then(() => {
      dispatch(removeSession());
    })
);