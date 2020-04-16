import { connect } from 'react-redux';
import SearchHeader from './search_header';
import { searchForUsers } from '../../../../actions/user_actions';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
  searchForUsers : (search) => dispatch(searchForUsers(search))
});

export default connect(msp, mdp)(SearchHeader);