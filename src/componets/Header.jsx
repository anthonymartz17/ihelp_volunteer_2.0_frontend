import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_white.svg";

const currentUser = true;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-light py-4 px-2  flex justify-between items-center  ">
			<Link to="/">
				<img src={logo} alt="ihelp logo" className="w-24" />
			</Link>
			<span
				onClick={() => setIsOpen(!isOpen)}
				className="material-symbols-outlined text-4xl cursor-pointer font-bold"
			>
				menu
			</span>
			<MobileMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
		</header>
	);
}
