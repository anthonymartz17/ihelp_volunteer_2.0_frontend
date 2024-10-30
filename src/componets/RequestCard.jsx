import React from "react";
import { Link } from "react-router-dom";

import errandIcon from "../assets/icons/errand_icon.svg";
import cleaningIcon from "../assets/icons/cleaning_icon.svg";
import technologyIcon from "../assets/icons/technology_icon.svg";
import petCareIcon from "../assets/icons/pet_care_icon.svg";
import variousIcon from "../assets/icons/various_icon.svg";
import mealPrep from "../assets/icons/mealprep_icon.svg";
import craftIcon from "../assets/icons/craft_icon.svg";
import eventIcon from "../assets/icons/event_icon.svg";
import gardeningIcon from "../assets/icons/gardening_icon.svg";
import officeIcon from "../assets/icons/office_icon.svg";
import sportCoachingIcon from "../assets/icons/sport_coaching_icon.svg";
import tutoringIcon from "../assets/icons/tutoring_icon.svg";
import calendar from "../assets/icons/calendar.svg";
import timeIcon from "../assets/icons/time_icon_light.svg";
import { formatDate } from "../utils/formatters";

const categoryIcons = {
	1: variousIcon,
	2: errandIcon,
	3: technologyIcon,
	4: cleaningIcon,
	5: petCareIcon,
	6: gardeningIcon,
	7: tutoringIcon,
	8: mealPrep,
	9: eventIcon,
	10: sportCoachingIcon,
	11: craftIcon,
	12: officeIcon,
};

export default function Request({ request, index }) {
	return (
		<Link to={`/account/requests/${request.id}`}>
			<div
				className={`bg-primarylight p-4 rounded-lg text-lightest card-shadow-primary relative border-secondary`}
			>
				<div className="flex justify-between items-center gap-6 relative  rounded-lg px-1 text-lightest mb-8">
					<div className="flex justify-center items-center gap-2 ">
						<img
							className="w-12"
							src={categoryIcons[request.category_id]}
							alt={request.category}
						/>
						<p className="title-heading">
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
						<span>{formatDate(request.date)}</span>
					</p>
					<p className="body-text flex items-center gap-1">
						<img className="w-5" src={timeIcon} alt="coin" />
						<span className="subtitle-heading">
							{request.hours} {request.hours > 1 ? "Hours" : "Hour"}
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
}
