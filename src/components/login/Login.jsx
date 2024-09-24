import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialState = {
    name: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    const userValidation = /^[A-Za-z]{4,30}$/i.test(values.name);
    const passwordValidation =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$/i.test(
        values.password
      );
    if (!userValidation) {
      console.error("Username must be 4 to 30 alphanumeric characters.");
      return;
    }
    if (!passwordValidation) {
      console.error(
        "Password must be 4 to 20 characters long and include at least one letter, one number, and one special character."
      );
      return;
    }

    try {
      const resultAction = await dispatch(login(values));
      if (resultAction.type === "auth/login/fulfilled") {
        navigate("/");
      } else {
        console.error(
          "Login failed:",
          resultAction.error.message || resultAction.error
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex items-center justify-center align-center h-screen">
      <div className="relative flex flex-col bg-white hover:shadow-lg border border-gray/30 w-96 rounded-lg my-4">
        <div className="relative m-2.5 items-center flex justify-center text-yellow h-24 rounded-md bg-gray">
          <h3 className="text-2xl">Sign In</h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-gray font-bold">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent placeholder:text-gray/50 text-sm border border-gray/30 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray/40 hover:border-gray/30 shadow-sm focus:shadow"
              placeholder="Your Name"
              value={values.name}
              onChange={onChange}
            />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-gray font-bold">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full bg-transparent placeholder:text-gray/50 text-sm border border-gray/30 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray/40 hover:border-gray/30 shadow-sm focus:shadow"
              placeholder="Your Password"
              value={values.password}
              onChange={onChange}
            />
          </div>
          <div className="inline-flex items-center mt-2">
            <label
              className="flex items-center cursor-pointer relative"
              htmlFor="check-2"
            >
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-gray/40 checked:bg-green checked:border-gray"
                id="check-2"
              />
              <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer ml-2 text-gray text-sm"
              htmlFor="check-2"
            >
              Remember Me
            </label>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="w-full rounded-md bg-gray py-2 px-4 border border-transparent text-center font-bold text-yellow hover:text-black transition-all shadow-md hover:shadow-lg focus:bg-gray focus:shadow-none active:bg-gray hover:bg-green active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Don't have an account?
            <a
              href="/signup"
              className="ml-1 font-bold text-gray hover:text-green underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
