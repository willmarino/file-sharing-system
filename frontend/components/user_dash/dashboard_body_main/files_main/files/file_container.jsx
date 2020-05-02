import { connect } from 'react-redux';
import File from './file';

const msp = (state, ownProps) => ({
  file: ownProps.file
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(File);