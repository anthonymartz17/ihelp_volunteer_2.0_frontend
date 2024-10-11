import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
export default function AccountPage() {
	return (
		<div className="bg-primary h-screen">
			<Header />
			<Outlet />
		</div>
	);
}
