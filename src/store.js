import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  visitorCreateReducer,
  visitorListReducer,
} from "./reducers/visitorReducers";

const reducer = combineReducers({
  createVisitor: visitorCreateReducer,
  visitorList: visitorListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
