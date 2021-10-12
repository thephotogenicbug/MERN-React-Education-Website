import {
  VISITOR_CREATE_FAIL,
  VISITOR_CREATE_REQUEST,
  VISITOR_CREATE_SUCCESS,
  VISITOR_LIST_REQUEST,
  VISITOR_LIST_SUCCESS,
  VISITOR_LIST_FAIL,
} from "../constants/visitorConstants";

export const visitorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_CREATE_REQUEST:
      return { loading: true };
    case VISITOR_CREATE_SUCCESS:
      return { loading: false, success: true };
    case VISITOR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const visitorListReducer = (state = {visitors:[]}, action) =>{
  switch (action.type) {
    case VISITOR_LIST_REQUEST:
      return {loading :true};
    case VISITOR_LIST_SUCCESS:
      return {loading: false, visitors: action.payload};
    case VISITOR_LIST_FAIL:
      return {loading :false, error : action.payload}    
    default:
      return state
  }
}
