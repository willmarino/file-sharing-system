import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RegisterForm from './register_form';

const msp = (state, ownProps) => ({
  
})

const mdp = (dispatch) => ({

})

export default withRouter(connect(msp, mdp)(RegisterForm));