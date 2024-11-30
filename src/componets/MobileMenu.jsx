import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/icons/user.svg";
import requestsIcon from "../assets/icons/requests.svg";
import commitmentsIcon from "../assets/icons/commitments.svg";
import helpIcon from "../assets/icons/help.svg";
import leaderboardIcon from "../assets/icons/leaderboard.svg";
import { useAuth } from "../context/authContext";

const currentUser = true;
const menuItems = [
	{
		title: "Profile",
		link: "/account/profile",
		icon: userIcon,
	},
	{
		title: "Requests",
		link: "/account",
		icon: requestsIcon,
	},
	{
		title: "Commitments",
		link: "/account/commitments",
		icon: commitmentsIcon,
	},
	{
		title: "Help",
		link: "/account/help",
		icon: helpIcon,
	},
	{
		title: "Leaderboard",
		link: "/account/leaderboard",
		icon: leaderboardIcon,
	},
];
export default function MobileMenuUser({ isOpen, onSetIsOpen }) {
	const navigate = useNavigate();
	const { logout } = useAuth();

	return (
		<>
			<nav
				className={`z-30 bg-tertiary flex flex-col absolute top-0 right-0  h-full duration-300  w-3/4  transform ${
					isOpen ? "translate-x-90 shadow-left" : "translate-x-full"
				} transition-transform`}
			>
				<div className="flex justify-between px-4 py-4">
					<span
						onClick={() => onSetIsOpen(false)}
						className="material-symbols-outlined cursor-pointer"
					>
						close
					</span>
				</div>

				<ul className="mt-10 px-4 flex-1  ">
					{menuItems.map((item, index) => (
						<li key={index}>
							<Link
								to={item.link}
								className="flex items-center py-3 gap-3 mb-3 label-text hover:text-secondary "
								onClick={() => onSetIsOpen(false)}
							>
								<img className="w-6" src={item.icon} alt={item.title} />
								<span>{item.title}</span>
							</Link>
						</li>
					))}
				</ul>

				<div className="text-center mb-10 px-2">
					<button
						onClick={() => logout()}
						type="button"
						className="label-text bg-secondary w-full rounded py-3 text-lightest max-w-[300px]"
					>
						Log out
					</button>
				</div>
			</nav>
			<div
				onClick={() => onSetIsOpen(false)}
				className={` mobile_menu_backdrop z-20 ${isOpen ? "open" : ""}`}
			></div>
		</>
	);
}
