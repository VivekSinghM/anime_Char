import { applyMiddleware, compose, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const inisitialState = {};

const store = legacy_createStore(
  rootReducer,
  inisitialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
