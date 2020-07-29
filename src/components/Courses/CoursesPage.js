import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";

function CoursesPage(props) {
  const { loadAuthors, loadCourses, courses } = props;
  useEffect(() => {
    loadCourses();
    loadAuthors();
  }, []);

  return (
    <>
      <h2>This is the Course Page</h2>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/course">
            <button style={{ marginBottom: "20px" }} className="btn btn-primary">
              Add Course
            </button>
          </Link>
          <CourseList courses={props.courses} />
        </>
      )}
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  courses:
    state.authors.length === 0
      ? []
      : state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
          };
        }),
  authors: state.authors,
  loading: state.apiCallsInProgress > 0
});

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
