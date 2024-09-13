import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/User";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Asif", age: 30, email: "asdf@gmail.com" }));
        }}
      >
        Login
      </button>

      <button onClick={() => {
        dispatch(logout());
      }}>Logout</button>
    </div>
  );
}

export default Login;
