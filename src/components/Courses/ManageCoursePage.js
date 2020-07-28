import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors, ...props }) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    loadCourses();
    loadAuthors();
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveCourse(course);
  };

  return <CourseForm onSave={handleSave} onChange={handleChange} course={course} errors={errors} authors={authors} />;
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  course: newCourse,
  courses: state.courses,
  authors: state.authors
});

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
