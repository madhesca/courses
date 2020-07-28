import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

function CoursesPage(props) {
  const { loadAuthors, loadCourses, courses } = props;
  useEffect(() => {
    loadCourses();
    loadAuthors();
  }, []);

  return (
    <form>
      <h2>This is the Course Page</h2>

      <CourseList courses={courses} />
    </form>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
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
  authors: state.authors
});

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
