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

	function getBgColor() {
		if (
			location.pathname === "/account" ||
			location.pathname === "/account/profile" ||
			location.pathname === "/account/help" ||
			location.pathname.startsWith("/account/quest")
		) {
			return "bg-primary";
		} else {
			return "bg-secondary";
		}
	}

	return (
		<div className={`${getBgColor()} h-screen w-screen overflow-y-scroll`}>
			<header className="h-[10%] mb-2">
				<Header />
			</header>
			<main className="">
				<Outlet />
			</main>
		</div>
	);
}
