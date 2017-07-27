import { combineReducers } from 'redux'
import inbox from "./inbox";
import inwords from "./words";

// main reducers
export default combineReducers({
  inbox,
  inwords,
});
