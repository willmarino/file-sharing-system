import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserRow from './user_row';

const msp = (state, ownProps) => {
  return({
    user: ownProps.user,
  })
}

const mdp = (dispatch) => ({

})

export default withRouter(connect(msp, mdp)(UserRow));