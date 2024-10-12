import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/icons/user.svg";
import requestsIcon from "../assets/icons/requests.svg";
import commitmentsIcon from "../assets/icons/commitments.svg";
import helpIcon from "../assets/icons/help.svg";
import leaderboardIcon from "../assets/icons/leaderboard.svg";
import RangeSlider from "./UI/RangeSlider";
import errandIcon from "../assets/icons/errand_icon_dark.svg";
import cleaningIcon from "../assets/icons/cleaning_icon_dark.svg";
import technologyIcon from "../assets/icons/technology_icon_dark.svg";
import petCareIcon from "../assets/icons/pet_care_icon_dark.svg";
import variousIcon from "../assets/icons/various_icon_dark.svg";
import mealPrep from "../assets/icons/mealprep_icon_dark.svg";

const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};

const categories = [
	{
		category_id: 1,
		category: "errands",
	},
	{
		category_id: 2,
		category: "cleaning",
	},
	{
		category_id: 3,
		category: "technology",
	},
	{
		category_id: 4,
		category: "pet care",
	},
	{
		category_id: 5,
		category: "various",
	},
	{
		category_id: 6,
		category: "meal prep",
	},
];

export default function MobileMenuUser({ isOpen, onSetIsOpen }) {
	const navigate = useNavigate();

	return (
		<>
			<div
				className={`bg-secondary md:hidden text-lightest  flex flex-col rounded-t-3xl fixed   top-40 left-0 right-0  h-full duration-300 z-10 w-full transform ${
					isOpen ? "translate-y-0 shadow-left" : "translate-y-full"
				} transition-transform px-2`}
			>
				<div className="flex justify-between items-center py-4 mt-2">
					<span
						onClick={() => onSetIsOpen(false)}
						className="material-symbols-outlined title-heading "
					>
						close
					</span>
					<button
						onClick={() => setIsOpen(true)}
						className=" text-dark flex justify-center items-center bg-light w-[100px] rounded-lg p-3 input-shadow label-text"
					>
						Apply
					</button>
				</div>
				<div>//single / multi</div>

				<div>
					<div></div>
					<RangeSlider min={10} max={200} step={40} />
				</div>
				<div>
					<p className="text-center label-text">Category</p>
					<ul className="bg-lightest bg-opacity-50 w-full text-dark grid grid-cols-3 gap-1 p-2 rounded-lg">
						{categories.map((category) => (
							<li
								key={category.category_id}
								className="flex justify-between items-center px-4 py-2  relative"
							>
								{/* <div className="flex justify-center items-center gap-1 absolute left-0 top-0">
									<img
										src={categoryIcons[category.category_id]}
										alt={category.category}
										className="w-8"
									/>
									<p className="label-text">{category.category}</p>
								</div> */}
								<input type="checkbox" className="checkbox bg-dark w-[5em] h-[10em] rounded-full"  />
							</li>
						))}
					</ul>
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
