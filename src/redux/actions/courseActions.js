import * as types from "./actionTypes";
import * as apiCourses from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export const loadCoursesSuccess = courses => ({
  type: types.LOAD_COURSES_SUCCESS,
  courses
});

export const createCourseSuccess = course => ({
  type: types.CREATE_COURSE_SUCCESS,
  course
});

export const updateCourseSuccess = course => ({
  type: types.UPDATE_COURSE_SUCCESS,
  course
});

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export const loadCourses = () => {
  return async dispatch => {
    dispatch(beginApiCall());
    try {
      const result = await apiCourses.getCourses();
      return dispatch(loadCoursesSuccess(result));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
};

export const saveCourse = course => {
  return async dispatch => {
    dispatch(beginApiCall());
    try {
      const result = await apiCourses.saveCourse(course);
      return course.id ? dispatch(updateCourseSuccess(result)) : dispatch(createCourseSuccess(result));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
};

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return apiCourses.deleteCourse(course.id);
  };
}
