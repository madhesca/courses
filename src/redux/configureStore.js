import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reduxImmutableStateinVariant from "redux-immutable-state-invariant";

// const middlewares = [logger, thunk];
// const store = createStore(rootReducer, applyMiddleware(middlewares));
// export default store;

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateinVariant())));
}
