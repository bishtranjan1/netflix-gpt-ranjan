import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKDROP, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (ev) => {
    const nVal = name?.current?.value;
    const eVal = email.current.value;
    const pVal = password.current.value;
    const message = checkValidData(nVal, eVal, pVal);
    setErrors(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, eVal, pVal)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nVal,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrors("errorMessage :" + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors(errorCode + ":" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, eVal, pVal)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="h-screen">
        <img
          className="object-cover h-full w-full"
          src={NETFLIX_BACKDROP}
          alt="Netflix Bckground"
        />
      </div>
      <form
        className="p-12 absolute bg-black top-0 bg-opacity-85 w-11/12 md:w-6/12 lg:w-5/12 xl:w-3/12 mt-36 mx-auto right-0 left-0 flex flex-col text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email adress"
          className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
        ></input>
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-transparent border-solid border-2 border-gray-400"
        ></input>
        <p className="text-red-500 text-lg font-bold py-1">{errors}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
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
