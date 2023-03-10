import { ROUTES } from "../routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const RouterSwitch = () => {
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
