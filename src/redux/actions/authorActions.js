import * as types from "./actionTypes";
import * as apiAuthors from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export const loadAuthorsSuccess = authors => ({
  type: types.LOAD_AUTHORS_SUCCESS,
  authors
});

export const loadAuthors = () => {
  return async dispatch => {
    dispatch(beginApiCall());
    try {
      const authors = await apiAuthors.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
};
