import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({ history, courses, authors, loadCourses, loadAuthors, saveCourse, ...props }) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    } else {
      setCourse({ ...props.course });
    }
    loadAuthors();
  }, [props.course]);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  return <CourseForm onSave={handleSave} onChange={handleChange} course={course} errors={errors} authors={authors} />;
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;

  const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
