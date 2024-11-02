import { createContext, useContext, useState, useEffect } from "react";

import { auth } from "../../firebase-config";
import { fetchUser } from "../services/fetch.js";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({
	currentUser: {},
	signUp: () => {},
	login: () => {},
	logout: () => {},
	resetPassword: () => {},
});

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [user, setUser] = useState({});

	async function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	async function login(email, password) {
		const res = await signInWithEmailAndPassword(auth, email, password);
		// const userData = await fetchUser(res.user.accessToken);

		setUser(userData);
	}
	async function logout() {
		return signOut(auth);
	}
	async function resetPassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return () => unsubscribe();
	}, []);

	const ctxValue = {
		currentUser,
		isLoggedIn: !!currentUser,
		user,
		signUp,
		login,
		logout,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
