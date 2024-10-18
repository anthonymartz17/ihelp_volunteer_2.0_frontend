import React from "react";
import { Link } from "react-router-dom";
import errandIcon from "../assets/icons/errand_icon.svg";
import cleaningIcon from "../assets/icons/cleaning_icon.svg";
import technologyIcon from "../assets/icons/technology_icon.svg";
import petCareIcon from "../assets/icons/pet_care_icon.svg";
import variousIcon from "../assets/icons/various_icon.svg";
import calendar from "../assets/icons/calendar.svg";
import coin from "../assets/icons/coin.svg";
import mealPrep from "../assets/icons/mealprep_icon.svg";

const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};

const cardColors = ["tertiary", "secondary", "dark"];

export default function Request({ request, index }) {
	return (
		<Link to={`/account/requests/${request.id}`}>
			<div
				className={`bg-primarylight p-4 rounded-lg text-lightest card-shadow-primary relative`}
			>
				<div className="flex justify-between items-center gap-6 relative  rounded-lg px-1 text-lightest mb-8">
					<div className="flex justify-center items-center gap-2 ">
						<img
							className="w-12"
							src={categoryIcons[request.category_id]}
							alt={request.category}
						/>
						<p className="subtitle-heading">
							{request.category[0].toUpperCase() + request.category.slice(1)}
						</p>
					</div>
					<div className="flex justify-center items-center gap-8">
						<ul className="flex justify-center items-center    w-20  ">
							{request.assigned_volunteers.map((volunteer, idx) => (
								<li key={volunteer.volunteer_id} className=" w-6">
									<img
										src={volunteer.avatar_url}
										alt=""
										className="min-w-10 w-4 rounded-full bg-primarydark p-1 border-2 border-lightest"
									/>
								</li>
							))}
						</ul>

						<p className="text-sm">
							{request.assigned_volunteers.length}/{request.tasks_total}
						</p>
					</div>
				</div>
				<div className="flex justify-between px-1">
					<p className="body-text flex items-center gap-2">
						<img className="w-6 " src={calendar} alt="calendar" />
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
