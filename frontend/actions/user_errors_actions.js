

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUserErrors = (error) => ({
  type: RECEIVE_USER_ERRORS,
  error
})