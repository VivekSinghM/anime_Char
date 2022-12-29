import { combineReducers } from "redux";
import animeCReducer from "./animecReducer";

export default combineReducers({
  anime: animeCReducer,
});
