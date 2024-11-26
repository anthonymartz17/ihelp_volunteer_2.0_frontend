import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import startIcon from "../assets/icons/start_icon.svg";
import onMyWayIcon from "../assets/icons/onmyway_icon.svg";
import locationIcon from "../assets/icons/location_icon.svg";
import workingIcon from "../assets/icons/working_icon.svg";
import completeIcon from "../assets/icons/completed_icon.svg";
import coin from "../assets/icons/coin.svg";
import clockIcon from "../assets/icons/hours_icon_light.svg";
import blopShape from "../assets/graphics/bottom_blob_shape.svg";
import CelebrationModal from "../componets/UI/CelebrationModal";
import AvatarFrame from "../componets/UI/AvatarFrame";
import { useAuth } from "../context/authContext";
import { useQuest } from "../hooks/useQuest";
import ServerError from "../componets/UI/ServerError";

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

const buttonText = {
	1: "Start",
	2: "Arrived",
	3: "Begin Task",
	4: "Complete Task",
};
export default function QuestPage() {
	const { currentUser } = useAuth();
	console.log(useParams(), "params");
	const { id } = useParams();
	const { quest, updateQuest, isLoading, error } = useQuest(id);
	const [currentStep, setCurrentStep] = useState(quest.task_progress_id);

	function handleNextStep() {
		setCurrentStep((prevStep) => prevStep + 1);
		updateQuest(id, currentUser.accessToken);
	}
	useEffect(() => {
		if (!isLoading) {
			setCurrentStep(quest.task_progress_id);
		}
	}, [quest]);

	return (
		<div className="flex flex-col relative bg-primary h-[100vh] pt-5">
			<div className="flex items-center  text-light gap-3 mb-10 px-4">
				<Link to="/account/commitments" className="mt-2">
					<span className="material-symbols-outlined ">arrow_back_ios</span>
				</Link>
				<h2 className="title-heading text-lightest text-center w-full">
					Quest
				</h2>
			</div>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && <ServerError />}
			{!isLoading && !error && (
				<div className="relative">
					<div className="px-4 label-text absolute top-0 ">
						<p className="flex items-center gap-2 mb-1">
							<img className="w-6" src={coin} alt="coin" />
							<span className=" text-lightest">{quest.point_earnings} Pts</span>
						</p>
						<p className="flex items-center gap-2">
							<img className="w-6" src={clockIcon} alt="clock" />
							<span className=" text-lightest">{quest.hours_needed} Hrs</span>
						</p>
					</div>
					<div className="flex mb-5 justify-center item-center">
						<div className="pl-3 flex flex-col items-center justify-center relative">
							<AvatarFrame
								bgColor="primarylight"
								avatar={quest.volunteer_avatar_url}
								size="40"
							/>
						</div>
						<ul className="flex flex-col-reverse gap-2 w-[55%] justify-center ">
							{taskProgress.map((quest) => (
								<li
									onClick={() => console.log("circle")}
									key={quest.id}
									className={`bg-secondary  ${
										quest.id > currentStep && "opacity-30 z-0 "
									} rounded-full p-4 mb-4 w-20 h-20 flex cilinder-shadow flex-col items-center justify-center relative
							${quest.id === 2 && "translate-x-16"}
							${quest.id === 4 && "translate-x-16"}
							${quest.id === 3 && "translate-x-24"}
							${currentStep === quest.id && "active-step "}
							
							`}
								>
									{currentStep === quest.id && quest.title && (
										<div
											className=" -top-14 px-1 py-3 w-40 text-center z-[999] bg-light input-shadow rounded-md body-text text-dark  absolute left-[-90%] after:absolute after:right-1/4 after:top-full after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-lightest after:-translate-x-1/2 after:input-shadow"
										>
											{quest.title}
										</div>
									)}

									<img
										src={quest.icon}
										alt=""
										className={`absolute -top-0 left-3 w-12 object-cover ${
											quest.id > currentStep ? "opacity-50 " : ""
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
					{currentStep === 5 && <CelebrationModal quest={quest} />}
				</div>
			)}
		</div>
	);
}
