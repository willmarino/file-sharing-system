import { connect } from 'react-redux';
import FileUploadForm from './file_upload_form';
import { createUserFile } from '../../actions/user_file_actions';

const mdp = (dispatch) => ({
  createUserFile: (info) => dispatch(createUserFile(info))
});

export default connect(null, mdp)(FileUploadForm);