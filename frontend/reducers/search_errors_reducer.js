import {
  RECEIVE_SEARCH_ERROR
} from '../actions/search_errors_actions';

const SearchErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_SEARCH_ERROR:
      return [action.error];
    default:
      return state;
  }
}

export default SearchErrorsReducer;