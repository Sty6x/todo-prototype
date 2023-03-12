import { ROUTES } from "../routes";
import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../App";
import { onAuthStateChanged } from "firebase/auth";

export const RouterSwitch = () => {
	const { auth } = useContext(firebaseContext);
	const navigate = useNavigate();

	const [userLoaded, setUserLoaded] = useState();

	useEffect(() => {
		const redirectIfNotLoggedIn = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate(`/app/today`);
				setUserLoaded(() => true);
			} else {
				navigate("/");
			}
		});
		return redirectIfNotLoggedIn;
	}, []);

	const appendRoutes = ROUTES.map((route) => {
		return (
			<Route
				key={route.pageName}
				path={route.path}
				element={route.element}
			/>
		);
	});
	return <Routes>{appendRoutes}</Routes>;
};
