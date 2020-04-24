import React from 'react';
import { connect } from 'react-redux';
import FriendRequestButton from './friend_request_button';
import { createFriendRequest } from '../../../actions/friend_request_actions';

const msp = (state, ownProps) => ({
  curUser: state.session.currentUser,
  userId: ownProps.userId
});

const mdp = (dispatch) => ({
  createFriendRequest: (info) => dispatch(createFriendRequest(info))
});

export default connect(msp, mdp)(FriendRequestButton);