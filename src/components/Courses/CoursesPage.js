import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

function CoursesPage(props) {
  useEffect(() => {
    props.actions.loadCourses();
    props.actions.loadAuthors();
  }, []);

  return (
    <form>
      <h2>CoursesPage</h2>

      <CourseList courses={props.courses} />
    </form>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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

const mapDispatchToProps = dispatch => ({
  actions: {
    loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
