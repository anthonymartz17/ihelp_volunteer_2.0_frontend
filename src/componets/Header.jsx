import { useState } from "react";
import MobileMenu from "./MobileMenu";

const currentUser = true;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-light p-4 flex justify-between items-center ">
			{/* <img src={saamLogo} alt="app logo" className="w-20" /> */}{" "}
			<p className="subtitle-heading">LOGO</p>
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
