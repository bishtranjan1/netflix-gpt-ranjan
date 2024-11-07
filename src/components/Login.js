import React, { useState } from "react";
import Header from "./Header";
import { is } from "../../node_modules/acorn/dist/acorn";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="Netflix Bckground"
        />
      </div>
      <form className="p-12 absolute bg-black top-0 bg-opacity-85 w-3/12 mt-36 mx-auto right-0 left-0 flex flex-col text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email adress"
          className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
        ></input>

        <button className="p-4 my-4 bg-red-700 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Signup now"
            : " Already a User Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
