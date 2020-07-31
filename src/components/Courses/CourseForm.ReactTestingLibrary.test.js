import React from "react";
import CourseForm from "./CourseForm";
import { cleanup, render } from "react-testing-library";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course Header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("label Save when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("label Saving... when saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
