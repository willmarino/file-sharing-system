import { connect } from 'react-redux';
import AcceptFR from './accept_fr';
import { respondToFriendRequest } from '../../../actions/friend_request_actions';

const msp = (state, ownProps) => ({
  userId : ownProps.userId,
  fr: ownProps.fr
})

const mdp = (dispatch) => ({
  respondToFriendRequest: (info) => dispatch(respondToFriendRequest(info))
});

export default connect(msp, mdp)(AcceptFR);