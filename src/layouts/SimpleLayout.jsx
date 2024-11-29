import { useLocation } from "react-router-dom";

export default function SimpleLayout({ children }) {
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
		<div className={`${getBgColor()} relative `}>
			<main>{children}</main>
		</div>
	);
}
