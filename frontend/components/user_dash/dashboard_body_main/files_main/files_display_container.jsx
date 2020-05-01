import { connect } from 'react-redux';
import FilesDisplay from './files_display';
import { fetchFiles } from '../../../../actions/user_file_actions';

const msp = state => ({
  files: state.entities.files
});

const mdp = dispatch => ({
  fetchFiles: () => dispatch(fetchFiles())
});

export default connect(msp, mdp)(FilesDisplay);