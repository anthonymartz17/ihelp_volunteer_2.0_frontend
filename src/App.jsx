import { Link } from "react-router-dom";
import AppRoutes from "./router/router";
import AuthContextProvider from "./context/authContext";
import "./App.css";
import logoColorfull from "../src/assets/logo/white_bg_logo.svg";

function App() {
	return (
		<AuthContextProvider>
			<div className="desktop-view">
				<img
					src={logoColorfull}
					alt=""
					className="w-40 absolute top-5 left-40 hidden lg:block"
				/>
				<div className="bg-dark p-8 text-lightest hidden lg:block">
					<div className="max-w-3xl mx-auto space-y-6">
						<h1 className="text-5xl leading-normal  font-bold tracking-tight">
							Empowering Youth Through
							<span className="text-secondary bg-lightest px-2 mx-2 rounded-lg">
								Community Service
							</span>
						</h1>

						<p className="text-xl leading-relaxed">
							Explore the app in action!
							<span className="mx-2 font-bold ">On the right,</span>
							discover our volunteer interface to see how teens connect with
							impactful community service opportunities. Alternatively, click
							the Organization Portal to explore how administrators seamlessly
							manage volunteers and service requests.
						</p>

						<div className="flex gap-4 pt-4">
							<a
								href="https://ihelp-org-v2.netlify.app/login"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="bg-lightest text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
									Organization Portal
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className="phone-view">
					<AppRoutes />
				</div>
			</div>
		</AuthContextProvider>
	);
}

export default App;
