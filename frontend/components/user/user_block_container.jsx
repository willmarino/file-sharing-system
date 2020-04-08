import { connect } from 'react-redux';
import UserBlock from './user_block';

const msp = (state) => {
  let curUserId = state.session.currentUser;
  return({
    user : state.entities.users[curUserId]
  })
}

export default connect(msp, null)(UserBlock);