import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/userSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <Link to="/tasks">Tasks</Link>
      <Link to="/shopping">Lists</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/login" onClick={() => handleLogout()}>
        Logout
      </Link>
    </nav>
  );
};

export default Navigation;
