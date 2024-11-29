import { useState } from "react";
import AppRoutes from "./router/router";
import AuthContextProvider from "./context/authContext";
import "./App.css";

function App() {
	return (
		<AuthContextProvider>
			<div className="desktop-view">
				<div className="phone-view">
					<AppRoutes />
				</div>
			</div>
		</AuthContextProvider>
	);
}

export default App;
