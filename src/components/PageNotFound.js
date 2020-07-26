import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Oops, Page Not Found</h1>
      <Link to="/">
        <h6>Back to Home Page</h6>
      </Link>
    </div>
  );
}

export default PageNotFound;
