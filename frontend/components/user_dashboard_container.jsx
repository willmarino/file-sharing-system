import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { logoutUser } from '../actions/session_actions';

const mdp = (dispatch) => ({
  logoutUser : () => dispatch(logoutUser())
});


export default connect(null, mdp)(UserDashboard);