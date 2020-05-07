import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavButton from './nav_button';

const msp = (state, ownProps) => ({
  destinationRoute: ownProps.destinationRoute,
  highlightedRoutes: ownProps.highlightedRoutes,
  message: ownProps.message
});

export default withRouter(connect(msp, null)(NavButton));