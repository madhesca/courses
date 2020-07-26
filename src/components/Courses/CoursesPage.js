import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

function CoursesPage(props) {
  const [state, setState] = useState({
    course: { title: "" }
  });

  const handleChange = event => {
    const course = { ...state.course, title: event };
    setState({ course });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // props.dispatch(createCourse(state.course));
    // props.courseAdder(state.course);
    props.actions.createCourse(state.course);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h2>CoursesPage</h2>
      <h6>Add Course</h6>
      <input type="text" onChange={e => handleChange(e.target.value)} value={state.course.title} />
      <input type="submit" value="Save" />
      {props.courses.map(course => (
        <div key={course.title}>
          <h1>{course.title}</h1>
        </div>
      ))}
    </form>
  );
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => ({
  // courseAdder: course => dispatch(createCourse(course))
  // actions: bindActionCreators(createCourse, dispatch)
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
