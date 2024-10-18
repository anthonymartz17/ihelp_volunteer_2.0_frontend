import { useState } from "react";
import MobileMenu from "./MobileMenu";
import whitebgLogo from "../assets/logo/white_bg_logo.svg";
import primarybgLogo from "../assets/logo/primary_bg_logo.svg";
import secondarybgLogo from "../assets/logo/primary_bg_logo.svg";

const currentUser = true;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-light py-4 px-2  flex justify-between items-center  ">
			{/* <img src={saamLogo} alt="app logo" className="w-20" /> */}{" "}
			<img src={primarybgLogo} alt="ihelp logo" className="w-36" />
			<span
				onClick={() => setIsOpen(!isOpen)}
				className="material-symbols-outlined text-5xl cursor-pointer font-bold"
			>
				menu
			</span>
			<MobileMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
		</header>
	);
}
