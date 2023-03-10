import { createContext, useEffect, useRef, useState } from "react";
import "./App.scss";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	connectAuthEmulator,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	setDoc,
	addDoc,
	add,
	collection,
} from "firebase/firestore";
import { RouterSwitch } from "./components/RouterSwitch";
import userEvent from "@testing-library/user-event";

const firebaseConfig = {
	apiKey: "AIzaSyB_vmCPMb-eEMt9-333XwoMDPw5VVFi8YA",
	authDomain: "test-c1001.firebaseapp.com",
	projectId: "test-c1001",
	storageBucket: "test-c1001.appspot.com",
	messagingSenderId: "584682848751",
	appId: "1:584682848751:web:354124c8533c022301361a",
	measurementId: "G-MDWEQ7YWN6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const firebaseContext = createContext();
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("user state changed");
	} else {
		console.log("not signed in");
	}
});
function App() {
	return (
		<div className="App">
			<firebaseContext.Provider value={{ auth, db }}>
				<RouterSwitch />
			</firebaseContext.Provider>
		</div>
	);
}

export default App;
