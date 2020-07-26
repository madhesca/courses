import * as types from "./actionTypes";
import * as apiCourses from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export const loadCoursesSuccess = courses => ({
  type: types.LOAD_COURSES_SUCCESS,
  courses
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
