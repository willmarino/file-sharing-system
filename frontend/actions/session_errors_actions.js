

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveSessionErrors = (error) => ({
  type: RECEIVE_SESSION_ERRORS,
  error
})