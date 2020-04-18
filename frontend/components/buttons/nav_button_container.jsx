import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavButton from './nav_button';

const msp = (state, ownProps) => ({
  route: ownProps.route,
  message: ownProps.message
});

export default withRouter(connect(msp, null)(NavButton));