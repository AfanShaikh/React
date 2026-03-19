import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/Action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = React.useState({
    email: "eve.holt@reqres.in",
    password: "admin@123",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user)).then((res) => {
      console.log(res);
      return navigate(location.state?.from || "/", { replace: true });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          defaultValue={user.email}
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          defaultValue={user.password}
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
};
