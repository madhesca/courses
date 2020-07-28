import * as types from "./actionTypes";
import * as apiCourses from "../../api/courseApi";

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

export const loadCourses = () => {
  return async dispatch => {
    try {
      const result = await apiCourses.getCourses();
      return dispatch(loadCoursesSuccess(result));
    } catch (err) {
      console.log(err);
    }
  };
};

export const saveCourse = course => {
  return async dispatch => {
    try {
      const result = await apiCourses.saveCourse();
      return course.id ? dispatch(updateCourseSuccess(result)) : dispatch(createCourseSuccess(result));
    } catch (err) {
      console.log(err);
    }
  };
};
