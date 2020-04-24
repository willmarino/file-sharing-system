import React from 'react';
import { connect } from 'react-redux';
import FriendRequestButton from './friend_request_button';
import { createFriendRequest, respondToFriendRequest } from '../../../actions/friend_request_actions';

const msp = (state, ownProps) => ({
  userId: ownProps.userId,
  friendRequests: state.entities.friendRequests
});

const mdp = (dispatch) => ({
  createFriendRequest: (id) => dispatch(createFriendRequest(id)),
  respondToFriendRequest: (info) => dispatch(respondToFriendRequest(info))
});

export default connect(msp, mdp)(FriendRequestButton);