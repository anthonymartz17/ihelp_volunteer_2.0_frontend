import { Outlet, useLocation } from "react-router-dom";
import Header from "../componets/Header";

const bgColors = {
	"/account": "bg-primary",
	"/account/requests": "bg-primary",
	"/account/avatar-gallery": "bg-avatar-gallery",
	"/account/profile": "bg-profile",
	"/account/commitments": "bg-commitments",
	"/account/leaderboard": "bg-leaderboard",
	"/account/help": "bg-help",
	"*": "bg-notfound",
};

export default function AccountPage() {
	const location = useLocation();
	console.log(location, "location.pathname");

	return (
		<div className="bg-primary h-screen">
			<Header />
			<Outlet />
		</div>
	);
}
