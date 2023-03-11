import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../App";

export const SignOutButton = () => {
	const { auth } = useContext(firebaseContext);
	const navigate = useNavigate();
	return (
		<button
			onClick={() => {
				signOut(auth);
				navigate("/");
			}}
		>
			Sign Out
		</button>
	);
};
