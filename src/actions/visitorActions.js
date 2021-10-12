import axios from "axios";
import {
  VISITOR_CREATE_FAIL,
  VISITOR_CREATE_REQUEST,
  VISITOR_CREATE_SUCCESS,
  VISITOR_LIST_REQUEST,
  VISITOR_LIST_SUCCESS,
  VISITOR_LIST_FAIL,
} from "../constants/visitorConstants";

export const createVisitorAction =
  (name, email, mobile, options, purpose, pic) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: VISITOR_CREATE_REQUEST,
      });

      const {} = getState();
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

export const listVisitor = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VISITOR_LIST_REQUEST,
    });

    const {} = getState();

    const { data } = await axios.get(
      `https://distance-api-url.herokuapp.com/visitor/getvisitor`
    );

    dispatch({
      type: VISITOR_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = 
    error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    dispatch({
      type: VISITOR_LIST_FAIL,
      payload: message,
    })
  }
};
