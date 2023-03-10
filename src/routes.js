import { Route, Router } from "react-router-dom";
import { MainPage } from "./components/pages/main-page/MainPage";
import { ProfileCreate } from "./components/pages/signin-signup/ProfileCreate";
import { SignUp } from "./components/pages/signin-signup/SignUp";
import { SignIn } from "./components/pages/signin-signup/SignIn";
import { TodoPage } from "./components/pages/todo-page/TodoPage";

export const ROUTES = [
	{ path: "/", pageName: "Home", element: <MainPage /> },
	{ path: "/sign-up", pageName: "Sign Up", element: <SignUp />, id: "sign" },
	{
		path: "/sign-up/create-profile",
		pageName: "Create Profile",
		element: <ProfileCreate />,
	},
	{ path: "/sign-in", pageName: "Sign in", element: <SignIn />, id: "sign" },
	// on success of creating and signing in
	{
		path: `/:profileID/todo-page`,
		// need to check if the profile id matches the authorized users UID
		pageName: "ToDo List",
		element: <TodoPage />,
	},
];
