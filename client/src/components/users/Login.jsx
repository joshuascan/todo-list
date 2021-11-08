import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
