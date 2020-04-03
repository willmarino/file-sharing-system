import * as UserUtil from '../util/other_util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = (users) => ({
  type: RECEIVE_USER,
  users
});

const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
});

export const signUpUser = (user) => (
  UserUtil.signUpUser(user)
    .then(res => receiveUser(res.user))
)