import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RegisterForm from './register_form';
import { signupUser } from '../../../actions/user_actions';

const msp = (state, ownProps) => ({
  
})

const mdp = (dispatch) => ({
  signupUser : (user) => dispatch(signupUser(user))
})

export default withRouter(connect(msp, mdp)(RegisterForm));