import * as FRUtil from '../util/other_util/friend_request_util';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';

const receiveFriendRequest = (fr) => ({
  type: RECEIVE_FRIEND_REQUEST,
  fr
});

const removeFriendRequest = (fr) => ({
  type: REMOVE_FRIEND_REQUEST,
  fr
});

export const createFriendRequest = (info) => (dispatch) => (
  FRUtil.createFriendRequest(info)
    .then(res => {
      dispatch(receiveFriendRequest(res.fr));
    })
);

// the info object should have a boolean 'resp' which corresponds to acceptance/rejection,
// and the id of the friend request which is being addressed
export const respondToFriendRequest = (info) => (dispatch) => {
  FRUtil.respondToFriendRequest(info)
    .then(res => {
      dispatch(removeFriendRequest(res.frId));
    })
};