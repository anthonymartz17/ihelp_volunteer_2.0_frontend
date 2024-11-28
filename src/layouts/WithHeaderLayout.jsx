import Header from "../componets/Header";
import { useLocation } from "react-router-dom";

export default function WithHeaderLayout({ children }) {
	const location = useLocation();

	function getBgColor() {
		if (
			location.pathname === "/account" ||
			location.pathname === "/account/profile" ||
			location.pathname === "/account/help" ||
			location.pathname.startsWith("/account/quest")
		) {
			return "bg-primary";
		}
		return "bg-secondary";
	}

	return (
		<div
			className={`${getBgColor()} layout-with-header relative  lg:flex lg:justify-center`}
		>
			<div className="max-w-[1500px]">
				<header>
					<Header />
				</header>
				<main>{children}</main>
			</div>
		</div>
	);
}
