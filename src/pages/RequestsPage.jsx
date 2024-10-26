import { useState, useEffect } from "react";

import RequestCard from "../componets/RequestCard";
import FiltersMenu from "../componets/FiltersMenu";
import blobShape from "../assets/graphics/bottom_blob_shape.svg";
import logo_white from "../assets/logo/white_bg_logo.svg";
/*
task status:
1. open
2. assigned
3. in progress
4. completed
5. cancelled
*/

const requests = [
	{
		id: 1,
		date: "2023-06-01",
		category: "errands",
		// points: 30,
		hours: 2,
		category_id: 1,
		tasks_total: 4,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 2,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 3,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
			},
		],
	},
	{
		id: 2,
		date: "2023-06-02",
		time: "11:30 AM",
		category: "cleaning",
		tasks_total: 4,
		points: 50,
		hours: 3,
		category_id: 2,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 2,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
			},
		],
	},
	{
		id: 3,
		date: "2023-06-03",
		time: "2:00 PM",
		category: "technology",
		points: 20,
		hours: 1,
		category_id: 3,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
		],
		tasks_total: 2,
	},
	{
		id: 4,
		date: "2023-06-04",
		time: "9:15 AM",
		category: "pet care",
		points: 40,
		hours: 1,
		category_id: 4,
		assigned_volunteers: [],
		tasks_total: 1,
	},
	{
		id: 5,
		date: "2023-06-05",
		time: "4:45 PM",
		category: "various",
		points: 25,
		hours: 1,
		category_id: 5,
		assigned_volunteers: [],
		tasks_total: 3,
	},
];

export default function RequestsPage() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" relative bg-primary">
			<div className="flex justify-between items-center  px-4 pb-2 ">
				<h1 className="title-heading text-lightest ">Requests</h1>
				<div
					onClick={() => setIsOpen(true)}
					className=" text-dark flex  gap-1 items-center bg-light w-[6em] rounded-lg p-2 input-shadow cursor-pointer"
				>
					<span className="material-symbols-outlined ">tune</span>
					<span className="label-text ">Filters</span>
				</div>
			</div>

			<ul className="grid grid-cols-1 md:grid-cols-2  gap-4 overflow-y-auto rounded-lg p-4 h-[80vh] ">
				{requests.map((request, index) => (
					<li key={request.id}>
						<RequestCard request={request} index={index} />
					</li>
				))}
			</ul>
			<FiltersMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
			{/* <div className="relative"> */}
				<img src={blobShape} alt="graphic blob" className=" w-full" />
				{/* <img
					src={logo_white}
					alt="logo"
					className="w-28 absolute bottom-0 left-[50%] translate-x-[-50%]"
				/> */}
			{/* </div> */}
		</div>
	);
}
