import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  visitorCreateReducer,
  visitorListReducer,
} from "./reducers/visitorReducers";

import {userLoginReducer} from './reducers/userReducer'

const reducer = combineReducers({
  createVisitor: visitorCreateReducer,
  visitorList: visitorListReducer,
  userLogin : userLoginReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
  userLogin: {userInfo : userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
