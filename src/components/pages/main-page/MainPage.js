import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const MainPage = () => {
	const displaySigninAndSignupLinks = ROUTES.map((route, i) => {
		if (route.id) {
			return (
				<li key={i}>
					<Link key={route.id} to={route.path}>
						{route.pageName}
					</Link>
				</li>
			);
		}
	});

	return (
		<div className="page">
			<h1>Main Page</h1>
			{displaySigninAndSignupLinks}
		</div>
	);
};
