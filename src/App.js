import { useEffect, useRef, useState } from "react";
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

function App() {
	return (
		<div className="App">
			<RouterSwitch />
		</div>
	);
}

export default App;
