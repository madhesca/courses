import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./Courses/CoursesPage";
import ManageCoursePage from "./Courses/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect exact from="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
