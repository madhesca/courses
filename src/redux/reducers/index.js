import courses from "./courseReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
