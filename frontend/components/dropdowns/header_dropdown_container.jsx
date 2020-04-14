import { connect } from 'react-redux';
import HeaderDropdown from './header_dropdown';
import { logoutUser } from '../../actions/session_actions';

const mdp = dispatch => ({
  logoutUser : () => dispatch(logoutUser())
});

export default connect(null, mdp)(HeaderDropdown);