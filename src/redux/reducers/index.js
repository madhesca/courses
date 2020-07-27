import courses from "./courseReducer";
import authors from "./authorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
