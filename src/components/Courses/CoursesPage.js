import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

function CoursesPage(props) {
  useEffect(() => {
    props.actions.loadCourses();
  }, []);

  return (
    <form>
      <h2>CoursesPage</h2>
      {props.courses.map(course => {
        return <p key={course.title}>{course.title}</p>;
      })}
    </form>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ courses }) => ({
  courses
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
