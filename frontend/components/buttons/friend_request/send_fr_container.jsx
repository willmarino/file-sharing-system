import { connect } from 'react-redux';
import SendFR from './send_fr';
import { createFriendRequest } from '../../../actions/friend_request_actions';

const msp = (state, ownProps) => ({
  userId : ownProps.userId
});

const mdp = (dispatch) => ({
  createFriendRequest: (id) => dispatch(createFriendRequest(id))
});

export default connect(msp, mdp)(SendFR);