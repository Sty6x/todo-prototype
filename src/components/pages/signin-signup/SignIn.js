import React, { useContext, useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { SignOutButton } from "./Signout";
import { SignForm } from "../signin-signup/SignForm"

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginErr, setLoginErr] = useState(false);
  const { auth, db } = useContext(firebaseContext);
  const navigate = useNavigate();

  async function signInUser(e) {
    e.preventDefault();
    try {
      const success = await signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );
      const user = success.user;
      console.log("user successfully logged in");
      console.log(user.uid);
      setUserCredentials({ email: "", password: "" });
      // navigate(`//todo-page`);
    } catch (err) {
      console.log(err);
      setLoginErr(true);
    }
  }

  function handleOnChangeInput(e) {
    const target = e.target;
    if (target.id === "email") {
      return setUserCredentials((prev) => ({
        ...prev,
        email: target.value,
      }));
    }
    return setUserCredentials((prev) => ({
      ...prev,
      password: target.value,
    }));
  }

  useEffect(() => {
    console.log(userCredentials);
  }, [userCredentials]);

  function authenticateRedirection() {
    // for each user in the users collection, check if the uid of the current user that is logged in matches any of the user documents and if so redirect them to the ':userID/tasks'
    // and if not create a new document for the user using his/her uid
  }

  return (
    <div className="page" id="sign-in-container">
      <h1>Sign In</h1>
      {loginErr && <p>Wrong Email And Password</p>}
      <SignForm onSubmit={signInUser} handleChange={handleOnChangeInput}>
      </SignForm>

      <SignOutButton />
    </div>
  );
};
