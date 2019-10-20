import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";
import { initialState } from "./init-state";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
