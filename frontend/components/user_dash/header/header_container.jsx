import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import { logoutUser } from '../../../actions/session_actions';

const msp = (state) => {
  let curUserId = state.session.currentUser;
  return({
    user : state.entities.users[curUserId]
  })
}

const mdp = (dispatch) => ({
  logoutUser : () => dispatch(logoutUser())
})

export default withRouter(connect(msp, mdp)(Header));