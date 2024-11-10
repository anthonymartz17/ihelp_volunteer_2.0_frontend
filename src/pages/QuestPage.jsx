import { useState } from "react";
import { Link } from "react-router-dom";
import startIcon from "../assets/icons/start_icon.svg";
import workingIcon from "../assets/icons/working_icon.svg";
import completeIcon from "../assets/icons/completed_icon.svg";
import locationIcon from "../assets/icons/location_icon.svg";
import onMyWayIcon from "../assets/icons/onmyway_icon.svg";
import coin from "../assets/icons/coin.svg";
import blopShape from "../assets/graphics/bottom_blob_shape.svg";
import CelebrationModal from "../componets/UI/CelebrationModal";
import AvatarFrame from "../componets/UI/AvatarFrame";

const taskProgress = [
	{
		id: 1,
		icon: startIcon,
	},
	{
		id: 2,
		icon: onMyWayIcon,
		title: "On My Way",
	},
	{
		id: 3,
		icon: locationIcon,
		title: "At Location",
	},
	{
		id: 4,
		icon: workingIcon,
		title: "Task in Progress",
	},
	{
		id: 5,
		icon: completeIcon,
	},
];

const currentUser = {
	id: 10,
	username: "user123",
	avatar_url:
		"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
};

const buttonText = {
	1: "Start",
	2: "Arrived",
	3: "Begin Task",
	4: "Complete Task",
};
export default function QuestPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [task, setTask] = useState({
		id: 1,
		description: "Pick up groceries from the supermarket.",
		status: "assigned",
		status_id: 2,
		volunteer_id: 1,
		volunteer_username: "Incognito23",
		volunteer_avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
		points: 55,
	});

	function handleNextStep() {
		setCurrentStep((prevStep) => prevStep + 1);
	}

	return (
		<div className="flex flex-col relative bg-primary h-[100vh] pt-5">
			{/* <div className="flex justify-between mx-4 mt-8">
				<h1 className="subtitle-heading text-lightest">Quest</h1>
				<p className="body-text flex items-center gap-">
					<img className="w-6" src={coin} alt="coin" />
					<span className="label-text text-lightest">{task.points} Pts</span>
				</p>
			</div> */}
			<div className="flex items-center  text-light gap-3 mb-12 px-4">
				<Link to="/account/commitments" className="mt-2">
					<span className="material-symbols-outlined ">arrow_back_ios</span>
				</Link>
				<h2 className="title-heading text-lightest text-center w-full">
					Quest
				</h2>
			</div>

			<div className="flex mb-5 justify-center item-center">
				<div className="pl-3 flex flex-col items-center justify-center">
					<AvatarFrame
						bgColor="primarylight"
						avatar={currentUser.avatar_url}
						size="40"
					/>
				</div>
				<ul className="flex flex-col-reverse gap-2 w-[55%] justify-center ">
					{taskProgress.map((task) => (
						<li
							key={task.id}
							className={`bg-secondary  ${
								task.id > currentStep && "opacity-30 "
							} rounded-full p-4 mb-4 w-20 h-20 flex cilinder-shadow flex-col items-center justify-center relative
            ${task.id === 2 && "translate-x-16"}
            ${task.id === 4 && "translate-x-16"}
            ${task.id === 3 && "translate-x-24"}
						${currentStep === task.id && "active-step "}
            
            `}
						>
							{currentStep === task.id && task.title && (
								<div
									onClick={() => console.log("clickable")}
									className=" -top-14 px-1 py-3 w-40 text-center bg-light input-shadow rounded-md body-text text-dark z-[9999] fixed left-[-90%] after:absolute after:right-1/4 after:top-full after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-lightest after:-translate-x-1/2 after:input-shadow"
								>
									{task.title}
								</div>
							)}
							<img
								src={task.icon}
								alt=""
								className={`absolute -top-0 left-3 w-12 object-cover ${
									task.id > currentStep ? "opacity-50 " : ""
								}`}
							/>
						</li>
					))}
				</ul>
			</div>
			{currentStep < 5 && (
				<div className="m-4">
					<button
						onClick={() => handleNextStep()}
						className="label-text bg-tertiary w-full rounded py-3 text-lightest card-shadow "
					>
						{buttonText[currentStep]}
					</button>
				</div>
			)}
			{currentStep === 5 && <CelebrationModal />}
		</div>
	);
}
