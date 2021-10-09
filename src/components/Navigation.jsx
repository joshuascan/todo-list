import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/tasks">Tasks</Link>
      <Link to="/shopping">Lists</Link>
      <Link to="/notes">Notes</Link>
    </nav>
  );
};

export default Navigation;
