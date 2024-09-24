import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const initialState = {
    name: "",
    password: "",
    email: "",
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

      dispatch(signup(values));
      navigate("/login");
  };

  return (
    <div className="flex items-center justify-center align-center h-screen">
      <div className="relative flex flex-col bg-white hover:shadow-lg border border-gray/30 w-96 rounded-lg my-4">
        <div className="relative m-2.5 items-center flex justify-center text-yellow h-24 rounded-md bg-gray">
          <h3 className="text-2xl">Sign Up</h3>
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
            <label className="block mb-2 text-gray font-bold">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent placeholder:text-gray/50 text-sm border border-gray/30 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray/40 hover:border-gray/30 shadow-sm focus:shadow"
              placeholder="Your Email"
              value={values.email}
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
        </div>
        <div className="p-6 pt-0">
          <button
            className="w-full rounded-md bg-gray py-2 px-4 border border-transparent text-center font-bold text-yellow hover:text-black transition-all shadow-md hover:shadow-lg focus:bg-gray focus:shadow-none active:bg-gray hover:bg-green active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleSubmit}
          >
            Sign up
          </button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Already have an account?
            <a
              href="/login"
              className="ml-1 font-bold text-gray hover:text-green underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
