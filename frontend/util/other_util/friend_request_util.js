export const fetchFriendRequests = () => (
  $.ajax({
    method: 'GET',
    url: 'api/friend_requests'
  })
)


export const createFriendRequest = (id) => (
  $.ajax({
    method: 'POST',
    url: 'api/friend_requests',
    data: {id}
  })
);

// 'info' should contain the id of the user who is being accepted/rejected by the friend request (not the user performing the action, that id is already stored in the backend),
// the 'resp' boolean which tells us whether or not the friend request has been accepted or rejected,
// which will control the flow of the logic for the respond controller action
export const respondToFriendRequest = (info) => (
  $.ajax({
    method: 'POST',
    url: `api/friend_requests/respond/${info.id}`,
    data: {info}
  })
);