import { connect } from 'react-redux'
import SearchResult from './search_result';

const msp = (state) => ({
  users: state.entities.users,
  error: state.errors.searchErrors[0]
})

export default connect(msp, null)(SearchResult);