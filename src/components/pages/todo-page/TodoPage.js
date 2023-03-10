import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { firebaseContext } from "../../../App";

export const TodoPage = () => {
	const { auth, db } = useContext(firebaseContext);
	const [userLoaded, setUserLoaded] = useState(false);
	const navigate = useNavigate();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserLoaded(true);
		} else {
			console.log("not logged in");
		}
	});

	useEffect(() => {
		if (!userLoaded) navigate("/sign-up");
	}, [userLoaded]);
	return (
		<div>
			{userLoaded && <h1>Welcome Back, {auth.currentUser.email}</h1>}
			<p>What would you like to do today?</p>
		</div>
	);
};
