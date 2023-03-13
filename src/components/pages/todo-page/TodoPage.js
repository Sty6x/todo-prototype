import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../../../App";
import { SignOutButton } from "../signin-signup//Signout";

export const TodoPage = () => {
  const { auth, db } = useContext(firebaseContext);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  useEffect(() => {
    const checkCurrentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        return setIsLoadingUser(true)
      }
      console.log('user is not logged in ')

    })

    return checkCurrentUser
  }, [auth.currentUser]);
  return (
    <div>
      {isLoadingUser &&
        <>
          <h1>Welcome Back, {auth.currentUser.email}</h1>
          <p>What would you like to do today?</p>
          <SignOutButton />
        </>}
    </div>
  );
};
