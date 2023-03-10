import { Route, Router } from "react-router-dom";

export const ROUTES = [
	{ path: "/", pageName: "Home", element: "" },
	{ path: "/sign-up", pageName: "Sign Up", element: "" },
	{ path: "/sign-up/create-profile", pageName: "Create Profile", element: "" },
	{ path: "/sign-in", pageName: "Sign in", element: "" },
	// on success of creating and signing in
	{ path: `/:profileID/todos`, pageName: "ToDo List", element: "" },
];
