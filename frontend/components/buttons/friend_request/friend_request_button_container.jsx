import React from 'react';
import FriendRequestButton from './friend_request_button';
import { connect } from 'react-redux';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
  // add friend
});

export default connect(msp, mdp)(FriendRequestButton);