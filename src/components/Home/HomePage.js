import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administraction</h1>
      <p>React, Redux, React Router for responsive wWeb Application</p>
      <Link to="/about" className="btn btn-primary btn-lg">
        Learn more . . .
      </Link>
    </div>
  );
}

export default HomePage;
