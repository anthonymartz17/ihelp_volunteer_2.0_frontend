import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SwitchToggleButton from "./UI/switchTogglerButton";
import CheckboxStyleList from "./UI/CheckboxStyleList";
import userIcon from "../assets/icons/user.svg";
import requestsIcon from "../assets/icons/requests.svg";
import commitmentsIcon from "../assets/icons/commitments.svg";
import helpIcon from "../assets/icons/help.svg";
import leaderboardIcon from "../assets/icons/leaderboard.svg";
import RangeSlider from "./UI/RangeSlider";

export default function MobileMenuUser({ isOpen, onSetIsOpen }) {
	const navigate = useNavigate();

	return (
		<>
			<div
				className={`bg-secondary md:hidden text-lightest  flex flex-col rounded-t-3xl fixed   top-40 left-0 right-0  h-full duration-300 z-10 w-full transform ${
					isOpen ? "translate-y-0 shadow-left" : "translate-y-full"
				} transition-transform px-2`}
			>
				<div className="flex justify-end items-center py-4 mt-2 mb-4">
					<button
						onClick={() => setIsOpen(true)}
						className=" text-dark flex justify-center items-center bg-light w-[100px] rounded-lg p-3 input-shadow label-text"
					>
						Apply
					</button>
				</div>
				<div>
					<SwitchToggleButton
						option1={"Single task"}
						option2={"Multiple tasks"}
					/>
				</div>

				<div>
					<div></div>
					<RangeSlider min={10} max={200} step={40} />
				</div>
				<div>
					<p className="text-center label-text">Category</p>
					<CheckboxStyleList />
				</div>
			</div>
			{/* backdrop   */}
			<div
				onClick={() => onSetIsOpen(false)}
				className={`md:hidden mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</>
	);
}
