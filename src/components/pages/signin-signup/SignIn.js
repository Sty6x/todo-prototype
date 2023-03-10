import React from "react";

export const SignIn = () => {
	return (
		<div id="sign-in-container">
			<h1>Sign In</h1>
			<form
				onSubmit={(e) => {
					e.defaultPrevented();
				}}
			></form>
		</div>
	);
};
