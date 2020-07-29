import courses from "./courseReducer";
import authors from "./authorReducer";
import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
