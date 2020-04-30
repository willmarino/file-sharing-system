import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilesMain from './files_main';

const msp = (state, ownProps) => ({
  shouldTransition: ownProps.shouldTransition
})


export default withRouter(connect(msp, null)(FilesMain));