import * as types from "./actionTypes";
import * as apiAuthors from "../../api/authorApi";

export const loadAuthorsSuccess = authors => ({
  type: types.LOAD_AUTHORS_SUCCESS,
  authors
});

export const loadAuthors = () => {
  return async dispatch => {
    try {
      const authors = await apiAuthors.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (err) {
      console.log(err);
    }
  };
};
