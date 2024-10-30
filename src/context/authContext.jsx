import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const contexValue = {
		user,
		setUser,
	};

	return (
		<AuthContext.Provider value={contexValue}>{children}</AuthContext.Provider>
	);
}


export function  useAuth() {
	return useContext(AuthContext);
} 