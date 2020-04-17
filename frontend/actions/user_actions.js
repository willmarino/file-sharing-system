import * as UserUtil from '../util/other_util/user_util';
import { receiveSession } from './session_actions';
import { receiveUserErrors } from './user_errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_IDS = 'RECEIVE_USER_IDS';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
});

const receiveIds = (field, ids) => ({
  type: RECEIVE_USER_IDS,
  at: field,
  ids
})

export const signupUser = (user) => dispatch => (
  UserUtil.signUpUser(user)
    .then(res => {
      dispatch(receiveUser(res.user));
      dispatch(receiveSession(res.user.id));
    },
    errors => {
      dispatch(receiveUserErrors(errors.responsJSON[0]));
    })
)

export const searchForUsers = (search) => dispatch => (
  UserUtil.searchForUsers(search)
    .then(res => {
      debugger;
      dispatch(receiveUsers(res.users));
      dispatch(receiveIds('userSearchIds', res.users.map((user) => id)))
    })
)