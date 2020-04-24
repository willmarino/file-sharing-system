import * as FRUtil from '../util/other_util/friend_request_util';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';
export const RECEIVE_FETCHED_STATUS = 'RECEIVE_FETCHED_STATUS';

// receiveFriendRequest will only ever be used to transport frs where the currently logged in user is the sender
const receiveFriendRequest = (fr) => ({
  type: RECEIVE_FRIEND_REQUEST,
  fr
});

const receiveFriendRequests = (frs, key) => ({
  type: RECEIVE_FRIEND_REQUESTS,
  frs,
  key
})

const removeFriendRequest = (frId) => ({
  type: REMOVE_FRIEND_REQUEST,
  frId
});

const receiveFetchedStatus = () => ({
  type: RECEIVE_FETCHED_STATUS
})

// fetch the sent and received frs, but only dispatch info to the reducers if the response data is not nil,
// because if it IS nil, it can cause logical errors (nil.forEach) inside of my reducer
export const fetchFriendRequests = () => (dispatch) => (
  FRUtil.fetchFriendRequests()
    .then(res => {
      if(res.sent_frs){dispatch(receiveFriendRequests(res.sent_frs, 'sent'))};
      if(res.received_frs){dispatch(receiveFriendRequests(res.received_frs, 'received'))};
      dispatch(receiveFetchedStatus());
    })
);

export const createFriendRequest = (id) => (dispatch) => (
  FRUtil.createFriendRequest(id)
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