import { combineReducers } from "redux";
import EntitiesReducer from './entities_reducer';
import SessionsReducer from './sessions_reducer';

const RootReducer = combineReducers({
  entities : EntitiesReducer,
  session : SessionsReducer
});

export default RootReducer;