import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './login_form';
import { loginUser } from '../../../actions/session_actions';

const msp = (state) => ({
  sessionErrors: state.errors.sessionErrors
});

const mdp = (dispatch) => ({
  loginUser : (user) => dispatch(loginUser(user))
})

export default withRouter(connect(msp, mdp)(LoginForm));