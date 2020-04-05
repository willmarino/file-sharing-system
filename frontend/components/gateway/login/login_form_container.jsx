import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './login_form';

const msp = (state, ownProps) => ({
  
})

const mdp = (dispatch) => ({

})

export default withRouter(connect(msp, mdp)(LoginForm));