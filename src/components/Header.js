import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => {
      unSubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-2 md:px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-20  md:w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex flex-row p-2 justify-between items-center">
          <img
            className="w-5 h-5 md:w-12 md:h-12"
            alt="user logo"
            src={user?.photoURL}
          />
          <button
            className="md:p-2 md:ml-4 rounded text-white  md:font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
