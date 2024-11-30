import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducer/index";

export const mainStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
