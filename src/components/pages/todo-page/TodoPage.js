import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../../../App";
import { SignOutButton } from "../../Signout";

export const TodoPage = () => {
	const { auth, db } = useContext(firebaseContext);
	useEffect(() => {
		console.log(auth.currentUser);
	}, [auth.currentUser]);
	return (
		<div>
			{auth.currentUser !== null && (
				<>
					<h1>Welcome Back, {auth.currentUser.email}</h1>
					<p>What would you like to do today?</p>
					<SignOutButton />
				</>
			)}
		</div>
	);
};
