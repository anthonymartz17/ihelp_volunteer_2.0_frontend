import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckboxStyleList from "./UI/CheckboxStyleList";
import SwitchToggleButton from "./UI/switchTogglerButton";
import userIcon from "../assets/icons/user.svg";
import requestsIcon from "../assets/icons/requests.svg";
import commitmentsIcon from "../assets/icons/commitments.svg";
import helpIcon from "../assets/icons/help.svg";
import leaderboardIcon from "../assets/icons/leaderboard.svg";
import RangeSlider from "./UI/RangeSlider";
import BottomBlopShape from "../assets/graphics/bottom_blob_shape.svg";

export default function FiltersMenu({ isOpen, onSetIsOpen, onFilterRequests }) {
	const navigate = useNavigate();
	const [selectedCategories, setSelectedCategories] = useState(new Set());


	function filterRequests() {
		onFilterRequests(selectedCategories);
	}
	return (
		<>
			<div
				className={`bg-secondary   text-lightest  flex flex-col rounded-t-3xl fixed   top-40 left-0 right-0  h-full duration-300 z-10 w-full transform ${
					isOpen ? "translate-y-0 shadow-left" : "translate-y-full"
				} transition-transform px-2`}
			>
				<div
					className={`flex  ${
						selectedCategories.size === 0 ? "justify-end" : "justify-between"
					}  items-center py-4 mt-2 mb-4`}
				>
					{selectedCategories.size !== 0 && (
						<button
							onClick={() => {
								const cleared = new Set();
								setSelectedCategories(cleared);
								onFilterRequests(cleared);
								onSetIsOpen(false);
							}}
							className=" text-dark flex justify-center items-center bg-light w-[100px] rounded-lg p-3 input-shadow label-text"
						>
							Clear filter
						</button>
					)}
					<button
						onClick={() => {
							filterRequests();
							onSetIsOpen(false);
						}}
						className=" text-dark flex justify-center items-center bg-light w-[100px] rounded-lg p-3 input-shadow label-text"
					>
						Apply
					</button>
				</div>

				<div className="flex flex-col gap-4">
					{/* <SwitchToggleButton
						option1={"Single task"}
						option2={"Multiple tasks"}
					/> */}

					<div>
						<p className="text-center subtitle-heading mb-2">Category</p>
						<CheckboxStyleList
							onSetSelectedCategories={setSelectedCategories}
							selectedCategories={selectedCategories}
						/>
					</div>
				</div>
				<img
					src={BottomBlopShape}
					alt="blop shape"
					className="absolute bottom-10 left-0 right-0"
				/>
			</div>

			{/* backdrop   */}
			<div
				onClick={() => onSetIsOpen(false)}
				className={`mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</>
	);
}
