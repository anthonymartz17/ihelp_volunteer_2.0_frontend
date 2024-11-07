import { useState } from "react";
import AppRoutes from "./router/router";
import AuthContextProvider from "./context/authContext";
import "./App.css";

function App() {
	return (
		<AuthContextProvider>
			<AppRoutes />
		</AuthContextProvider>
	);
}

export default App;
