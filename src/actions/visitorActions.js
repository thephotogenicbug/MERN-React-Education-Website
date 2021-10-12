import axios from "axios";
import {
  VISITOR_CREATE_FAIL,
  VISITOR_CREATE_REQUEST,
  VISITOR_CREATE_SUCCESS,
} from "../constants/visitorConstants";

export const createVisitorAction =
  (name, email, mobile, options, purpose, pic) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: VISITOR_CREATE_REQUEST,
      });

       const {

       } = getState()
      const { data } = await axios.post(
        `https://distance-api-url.herokuapp.com/visitor/createvisitor`,
        { name, email, mobile, options, purpose, pic }
      );

      dispatch({
        type: VISITOR_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: VISITOR_CREATE_FAIL,
        payload: message,
      });
    }
  };
