import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashboardBodyMain from './dashboard_body_main';

const msp = (state, ownProps) => ({
  mounted: ownProps.mounted
})

export default withRouter(connect(msp, null)(DashboardBodyMain));