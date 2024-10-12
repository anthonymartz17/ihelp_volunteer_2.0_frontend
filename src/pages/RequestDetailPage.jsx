import { Link } from "react-router-dom";

import errandIcon from "../assets/icons/errand_icon_dark.svg";
import cleaningIcon from "../assets/icons/cleaning_icon_dark.svg";
import technologyIcon from "../assets/icons/technology_icon_dark.svg";
import petCareIcon from "../assets/icons/pet_care_icon_dark.svg";
import variousIcon from "../assets/icons/various_icon_dark.svg";
import mealPrep from "../assets/icons/mealprep_icon_dark.svg";
import coin from "../assets/icons/coin.svg";
import calendar from "../assets/icons/calendar_primary.svg";
import clock from "../assets/icons/clock.svg";
import location from "../assets/icons/location.svg";

const request = {
	id: 1,
	category: "errands",
	category_id: 1,
	date: "2023-06-01",
	time: "10:00 AM",
	points: 30,
	address: {
		street: "123 Main St",
		city: "Amityville",
		state: "NY",
		zip: "11701",
	},
	description: "Need someone to pick up groceries and drop them off at home.",

	tasks: [
		{
			id: 1,
			description: "Pick up groceries from the supermarket.",
			status: "assigned",
			status_id: 2,
			points: 10,
		},
		{
			id: 2,
			description: "Return a package to the post office.",
			status: "open",
			points: 10,
		},
		{
			id: 3,
			description: "Pick up dry cleaning from the local shop.",
			status: "open",
			status_id: 1,
			points: 5,
		},
		{
			id: 4,
			description: "Buy flowers from the florist for a special occasion.",
			status: "assigned",
			status_id: 2,
			points: 7,
		},
	],
};
const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};

export default function RequestDetailPage() {
	return (
		<div className=" text-dark">
			<div className="flex items-center text-light gap-3 mb-10 p-4">
				<Link to="/account" className="mt-2">
					<span className="material-symbols-outlined ">arrow_back_ios</span>
				</Link>
				<h2 className="subtitle-heading text-lightest ">Request</h2>
			</div>
			<div className="bg-light card-shadow rounded-lg p-4 mx-4 flex flex-col gap-6 mb-10">
				<div className="flex justify-between items-center rounded-lg ">
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
					<p className="body-text flex items-center gap-">
						<img className="w-6" src={coin} alt="coin" />
						<span className="title-heading">{request.points} Pts</span>
					</p>
				</div>
				<div className="flex  justify-between">
					<p className="flex items-center gap-1">
						<img src={calendar} alt="" className="w-6" />
						<span className="pt-1">{request.date}</span>
					</p>
					<p className="flex items-center gap-1">
						<img src={clock} alt="" className="w-6" />
						<span className="pt-1">{request.time}</span>
					</p>
					<p className="flex items-center gap-1">
						<img src={location} alt="" className="w-6" />
						<span className="pt-1">
							{request.address.city}, {request.address.state}
						</span>
					</p>
				</div>
				<div>
					<h2 className="label-text">Description:</h2>
					<p>{request.description}</p>
				</div>
			</div>
			<h2 className="subtitle-heading text-lightest m-4">Tasks</h2>
			<ul className=" h-96 max-h-96 overflow-y-auto px-4 ">
				{request.tasks.map((task, idx) => {
					return (
						<li key={task.id} className="mb-4">
							<div className="flex justify-between items-center gap-2">
								<p className="text-3xl label-text  numbers-shadow">{idx + 1}</p>
								<p className="bg-light card-shadow rounded-lg p-2 flex flex-col gap-6 body-text flex-1 ">
									{task.description}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="fixed bottom-8 left-2 right-2">
				<button className="label-text bg-secondary w-full rounded py-3 text-lightest ">
					Commit
				</button>
			</div>
		</div>
	);
}
