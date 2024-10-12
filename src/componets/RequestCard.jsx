import React from "react";
import { Link } from "react-router-dom";
import errandIcon from "../assets/icons/errand_icon.svg";
import cleaningIcon from "../assets/icons/cleaning_icon.svg";
import technologyIcon from "../assets/icons/technology_icon.svg";
import petCareIcon from "../assets/icons/pet_care_icon.svg";
import variousIcon from "../assets/icons/various_icon.svg";
import calendar from "../assets/icons/calendar.svg";
import coin from "../assets/icons/coin.svg";

const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
};

const cardColors = ["tertiary", "secondary", "dark"];

export default function Request({ request, index }) {
	return (
		<Link>
			<div
				className={`bg-${
					cardColors[index % cardColors.length]
				} p-4 rounded-lg text-lightest card-shadow`}
			>
				<div className="flex justify-center items-center gap-2 mb-8">
					<img
						className="w-12"
						src={categoryIcons[request.category_id]}
						alt={request.category}
					/>
					<p className="subtitle-heading">
						{request.category[0].toUpperCase() + request.category.slice(1)}
					</p>
				</div>
				<div className="flex justify-between">
					<p className="body-text flex items-center gap-2">
						<img className="w-6" src={calendar} alt="calendar" />
						<span>{request.date}</span>
					</p>
					<p className="body-text flex items-center gap-2">
						<img className="w-6" src={coin} alt="coin" />
						<span className="title-heading">{request.points} Pts</span>
					</p>
				</div>
			</div>
		</Link>
	);
}
