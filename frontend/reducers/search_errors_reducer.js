import {
  RECEIVE_SEARCH_ERROR
} from '../actions/search_errors_actions';
import { CLEAR_ALL } from '../actions/session_actions';

const SearchErrorsReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_SEARCH_ERROR:
      return [action.error];
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

export default SearchErrorsReducer;