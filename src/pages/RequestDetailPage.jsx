import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate, formatMilitaryToStandardTime } from "../utils/formatters";

import socket from "../services/socket";

//icons and graphics
import errandIcon from "../assets/icons/errand_icon_dark.svg";
import cleaningIcon from "../assets/icons/cleaning_icon_dark.svg";
import technologyIcon from "../assets/icons/technology_icon_dark.svg";
import petCareIcon from "../assets/icons/pet_care_icon_dark.svg";
import variousIcon from "../assets/icons/various_icon_dark.svg";
import mealPrep from "../assets/icons/mealprep_icon_dark.svg";
import coin from "../assets/icons/coin.svg";
import hoursIcon from "../assets/icons/hours_icon_dark.svg";
import calendar from "../assets/icons/calendar_primary.svg";
import clock from "../assets/icons/clock.svg";
import craftIcon from "../assets/icons/craft_icon_dark.svg";
import eventIcon from "../assets/icons/event_icon_dark.svg";
import gardeningIcon from "../assets/icons/gardening_icon_dark.svg";
import officeIcon from "../assets/icons/office_icon_dark.svg";
import sportCoachingIcon from "../assets/icons/sport_coaching_icon_dark.svg";
import tutoringIcon from "../assets/icons/tutoring_icon_dark.svg";
import location from "../assets/icons/location.svg";
import ConfirmationAlert from "../componets/UI/ConfirmationAlert";
import AlertMessage from "../componets/UI/AlertMessage";
import blobShape from "../assets/graphics/blop_no_backdrop.svg";
//

import ServerError from "../componets/UI/ServerError";
import { useRequestDetail } from "../hooks/useRequestDetails";
import { useCommitTask } from "../hooks/useCommitTask";

const currentUser = {
	id: 4,
	username: "Kevin",
	avatar_url:
		"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
};

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

export default function RequestDetailPage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const isPendingCommitment = searchParams.get("committed");

	const {
		commit,
		uncommit,
		isLoading: isLoadingCommit,
		error: errorCommit,
	} = useCommitTask();

	const {
		requestDetail,
		isLoading: isLoadingRequestDetail,
		error: errorRequestDetail,
	} = useRequestDetail(id);

	const [selectedTask, setSelectedTask] = useState(null);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [isError, setIsError] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [selectedAvatarId, setSelectedAvatarId] = useState(null);

	function toggleUsername(id) {
		setSelectedAvatarId((prevId) => (prevId ? null : id));
	}

	function selectTask(task_idx) {
		if (requestDetail.tasks[task_idx].volunteer_id) {
			requestDetail.tasks[task_idx].volunteer_id = null;
			requestDetail.tasks[task_idx].volunteer_avatar_url = null;
			setSelectedTask(null);
		} else {
			requestDetail.tasks[task_idx].volunteer_id = currentUser.id;
			requestDetail.tasks[task_idx].volunteer_avatar_url =
				currentUser.avatar_url;
			setSelectedTask(requestDetail.tasks[task_idx]);
		}
	}

	function tryCommitToTask() {
		if (selectedTask) {
			setIsAlertOpen(true);
			setAlertMessage("Once confirmed, this task will be assigned to you.");
		} else {
			setIsError(true);
			setAlertMessage("Oops! A task must be selected first.");
		}
	}
	function tryUncommitTask() {
		if (selectedTask) {
			setIsAlertOpen(true);
			setAlertMessage("Are you sure you want to quit this task?");
		}
	}
	async function handleTaskCommitment() {
		try {
			if (isPendingCommitment) {
				await uncommit(selectedTask.id, currentUser.accessToken);
				socket.emit("taskUncommitted", {
					taskId: selectedTask.id,
					volunteerId: currentUser.id,
					requestId: id,
				});
				// setAlertMessage("Task committed successfully!");
			} else {
				await commit(selectedTask.id, currentUser.accessToken);

				socket.emit("taskCommitted", {
					taskId: selectedTask.id,
					volunteerId: currentUser.id,
					requestId: id,
				});
				// setAlertMessage("Task committed successfully!");
			}

			// setIsAlertOpen(true);
			navigate(`/account/commitments`);
		} catch (error) {
			setAlertMessage("Error committing task. Please try again.");
			setIsAlertOpen(true);
		}
	}
	useEffect(() => {
		if (requestDetail?.tasks) {
			const taskSelected = requestDetail.tasks.find(
				(task) => task.volunteer_id === currentUser.id
			);
			if (taskSelected) {
				setSelectedTask(taskSelected);
				console.log(selectedTask, "selectedTask");
			}
		}
	}, [requestDetail?.tasks]);

	return (
		<div className=" text-dark  bg-secondary  overflow-y-hidden relative min-h-[100vh]  pt-4">
			<div className="flex items-center  text-light gap-3 mb-12 px-4">
				<Link to="/account" className="mt-2">
					<span className="material-symbols-outlined ">arrow_back_ios</span>
				</Link>
				<h2 className="title-heading text-lightest text-center w-full">
					Request Details
				</h2>
			</div>
			{isLoadingRequestDetail && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{errorRequestDetail && <ServerError />}
			{!isLoadingRequestDetail && !errorRequestDetail && (
				<div>
					<div className="bg-light flex-1  rounded-lg p-3 py-6 mx-4 flex flex-col gap-5 mb-6">
						<div className="flex justify-between items-center rounded-lg ">
							<div className="flex justify-center items-center gap-2 ">
								<img
									className="w-12"
									src={categoryIcons[requestDetail.category_id]}
									alt={requestDetail.category}
								/>
								<p className="title-heading">
									{requestDetail.category[0].toUpperCase() +
										requestDetail.category.slice(1)}
								</p>
							</div>
							<p className="body-text flex items-center gap-1">
								<img className="w-5" src={hoursIcon} alt="coin" />
								<span className="subtitle-heading">
									{requestDetail.hours}{" "}
									{requestDetail.hours > 1 ? "Hours" : "Hour"}
								</span>
							</p>
						</div>
						<div className="flex gap-1  justify-between body-text ">
							<p className="flex items-center gap-1">
								<img src={calendar} alt="" className="w-6" />
								<span className="pt-1">{formatDate(requestDetail.date)}</span>
							</p>
							<p className="flex items-center  gap-1">
								<img src={clock} alt="" className="w-6" />
								<span className="pt-1">
									{formatMilitaryToStandardTime(requestDetail.event_time)}
								</span>
							</p>
							<p className="flex items-center ">
								<img src={location} alt="" className="w-6" />
								<span className="pt-1">
									{requestDetail.address.city}, {requestDetail.address.state}
								</span>
							</p>
						</div>
						<div>
							<h2 className="label-text">Description:</h2>
							<p className="body-text">{requestDetail.description}</p>
						</div>
					</div>
					<div className="flex-1">
						<h2 className="subtitle-heading text-lightest m-4">Tasks</h2>

						<ul className="px-4 ">
							{requestDetail.tasks.map((task, idx) => {
								return (
									<li key={task.id} className="mb-4 relative ">
										{selectedAvatarId && selectedAvatarId === task.id && (
											<div
												onClick={() => toggleUsername()}
												className="absolute -top-8 flex  gap-2 pl-2 right-6 bg-dark  rounded-lg border-2 border-lightest "
											>
												<p className="text-lightest">
													{task.volunteer_username}
												</p>
												<span className="material-symbols-outlined bg-light   text-dark">
													cancel
												</span>
											</div>
										)}
										{task.volunteer_avatar_url && (
											<img
												id={task.id}
												onClick={() => toggleUsername(task.id)}
												src={task.volunteer_avatar_url}
												alt=""
												className="w-8 rounded-full bg-dark p-1 border-2 border-lightest absolute -top-3 -right-2 z-10"
											/>
										)}
										{task.volunteer_id === currentUser.id ? (
											<div
												onClick={() => {
													if (!isPendingCommitment) selectTask(idx);
												}}
												className="flex cursor-pointer items-center gap-2 "
											>
												<p className="text-3xl label-text  numbers-shadow">
													{idx + 1}
												</p>
												<div
													className={`card-shadow rounded-lg p-2 flex justify-between   gap-1 body-text w-[100%] ${
														task.volunteer_id === currentUser.id
															? "bg-dark text-lightest"
															: "bg-light text-dark"
													}`}
												>
													<p className="">{task.description}</p>
													<p className="body-text flex items-center gap-1  w-[20%]">
														<img className="w-4" src={coin} alt="coin" />

														<span className="body-text text-sm label-text">
															{task.points} Pts
														</span>
													</p>
												</div>
											</div>
										) : (
											<div
												onClick={() => {
													if (!isPendingCommitment) selectTask(idx);
												}}
												className={`flex cursor-pointer items-center gap-2 ${
													task.task_status_id == 2 || selectedTask
														? "opacity-40 pointer-events-none"
														: ""
												}`}
											>
												<p className="text-3xl label-text  numbers-shadow">
													{idx + 1}
												</p>
												<div className="bg-light card-shadow rounded-lg p-2 flex justify-between  gap-1 body-text w-[100%]">
													<p className="">{task.description}</p>
													<p className="body-text flex items-center gap-1  w-[20%]">
														<img className="w-4" src={coin} alt="coin" />

														<span className="body-text text-sm label-text">
															{task.points} Pts
														</span>
													</p>
												</div>
											</div>
										)}
									</li>
								);
							})}
						</ul>

						<div className="mx-4 ">
							{isPendingCommitment ? (
								<div className="mb-[15em] mt-10">
									<button
										onClick={() =>
											navigate(`/account/quest/tasks/${selectedTask.id}`)
										}
										className="subtitle-heading mb-2  bg-primary  w-full card-shadow rounded-lg py-3 text-lightest"
									>
										Start Quest
									</button>

									<button
										onClick={() => tryUncommitTask()}
										className="subtitle-heading bg-dark bg-opacity-70 w-full card-shadow rounded-lg py-3 text-lightest"
									>
										Uncommit
									</button>
								</div>
							) : (
								<button
									onClick={() => tryCommitToTask()}
									className={`subtitle-heading mb-[15em]  w-full card-shadow rounded-lg py-3 text-lightest ${
										!selectedTask
											? "opacity-40 pointer-events-none bg-dark"
											: "bg-primary"
									} `}
								>
									Commit
								</button>
							)}
						</div>
					</div>
				</div>
			)}
			{isAlertOpen && (
				<ConfirmationAlert
					onHandleTaskCommitment={handleTaskCommitment}
					onSetIsAlertOpen={setIsAlertOpen}
					alertMessage={alertMessage}
				/>
			)}
			{isError && (
				<AlertMessage alertMessage={alertMessage} setIsError={setIsError} />
			)}
			<img
				src={blobShape}
				alt="graphic blob"
				className=" w-full translate-y-20 absolute bottom-0 left-0"
			/>
		</div>
	);
}
