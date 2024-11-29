import firstTaskBadge from "../assets/badges/badge_first_task.svg";
import topDogBadge from "../assets/badges/badge_top_dog.svg";
import goatStatusBadge from "../assets/badges/badge_goat_status.svg";
import punctualityBadge from "../assets/badges/badge_punctuality.svg";
import fiveTaskStreakBadge from "../assets/badges/badge_five_task_streak.svg";
import fifteenTaskStreakBadge from "../assets/badges/badge_fifteen_task_streak.svg";
import rewardShape from "../assets/graphics/reward_shape.svg";
import BottomBlopShape from "../assets/graphics/blop_no_backdrop.svg";
import { formatDate } from "../utils/formatters";
import { useProfile } from "../hooks/useProfile";
import { useEffect, useState } from "react";
import ServerError from "../componets/UI/ServerError";
import AvatarFrame from "../componets/UI/AvatarFrame";

// const userBadges = {
// 	1: true,
// 	4: true,
// 	5: true,
// };

const badgelist = [
	{
		id: 1,
		badge_id: 1,
		badge_name: "First Task",
		badge_description: "Complete your first task",
		badge_icon: firstTaskBadge,
		badge_points: 10,
	},
	{
		id: 2,
		badge_id: 2,
		badge_name: "Top Dog",
		badge_description: "Complete 5 tasks in a row",
		badge_icon: topDogBadge,
		badge_points: 25,
	},
	{
		id: 3,
		badge_id: 3,
		badge_name: "Goat Status",
		badge_description: "Complete 10 tasks in a row",
		badge_icon: goatStatusBadge,
		badge_points: 50,
	},
	{
		id: 4,
		badge_id: 4,
		badge_name: "Punctuality",
		badge_description: "Complete tasks on time",
		badge_icon: punctualityBadge,
		badge_points: 10,
	},
	{
		id: 5,
		badge_id: 5,
		badge_name: "5 Task Streak",
		badge_description: "Complete 5 tasks in a row",
		badge_icon: fiveTaskStreakBadge,
		badge_points: 10,
	},
	{
		id: 6,
		badge_id: 6,
		badge_name: "15 Task Streak",
		badge_description: "Complete 15 tasks in a row",
		badge_icon: fifteenTaskStreakBadge,
		badge_points: 25,
	},
];

export default function ProfilePage() {
	const { currentUserProfile, isLoading, error } = useProfile(3);
	const [userBadges, setUserBadges] = useState(null);
	const [showAllBadges, setShowAllBadges] = useState(false);
	const [showAllRewards, setShowAllRewards] = useState(false);

	useEffect(() => {
		setUserBadges(new Set(currentUserProfile.badges));
	}, [currentUserProfile]);

	return (
		<div className="p-4  grid gap-6 relative bg-primary  min-h-[90vh]">
			<h2 className="title-heading text-lightest">ProfilePage</h2>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && <ServerError />}
			{!isLoading && !error && (
				<>
					<div className="text-lightest  bg-primarylight  rounded-lg px-2 py-3 relative">
						<div className="absolute shadow-generic top-0 right-5 bg-primarydark py-1 px-2 rounded-b-lg">
							<p className="text-light body-text-regular">Since</p>
							<p className="body-text">
								{formatDate(currentUserProfile.start_date)}
							</p>
						</div>
						<div className="flex items-center gap-4 border-b-2 border-primary pb-4 border-opacity-50">
							<AvatarFrame
								avatar={currentUserProfile.avatar_url}
								size={24}
								bgColor="primarylight"
							/>
							<p className="label-text">{currentUserProfile.username}</p>
						</div>

						<div className="flex justify-between py-2">
							<div className="border-r-2 border-primary border-opacity-50 p-2 flex flex-col items-center flex-1">
								<p className="body-text">Rank</p>
								<p className="label-text">{currentUserProfile.points_rank}</p>
							</div>
							<div className="border-r-2 border-primary border-opacity-50 p-2 flex flex-col items-center flex-1">
								<p className="body-text">Points</p>
								<p className="label-text">{currentUserProfile.total_points}</p>
							</div>
							<div className="border-r-2 border-primary border-opacity-50 p-2 flex flex-col items-center flex-1">
								<p className="body-text">Hours</p>
								<p className="label-text">{currentUserProfile.total_hours}</p>
							</div>
							<div className=" p-2 flex flex-col items-center flex-1">
								<p className="body-text">Completed</p>

								<p className="label-text flex items-center gap-1">
									<span>{currentUserProfile.completed_tasks}</span>
									<span className="body-text">tasks</span>
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h2 className="subtitle-heading text-lightest mb-4">Badges</h2>
							<button
								className="text-lightest hover:text-light"
								onClick={() => setShowAllBadges(!showAllBadges)}
							>
								{showAllBadges ? "See Less" : "See All"}
							</button>
						</div>

						<ul
							className={` mb-3 grid grid-cols-3 gap-4 justify-between ${
								!showAllBadges
									? "max-h-[8em]   overflow-hidden"
									: "max-h-[20em] overflow-y-auto"
							}`}
						>
							{badgelist.map((badge) => {
								return (
									<li
										key={badge.id}
										className={`flex items-center gap-4 ${
											!userBadges.has(badge.id) ? "opacity-25" : ""
										}`}
									>
										<img
											className="w-30"
											src={badge.badge_icon}
											alt={`${badge.badge_name} badge`}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<div className=" min-h-[300px] mb-[4em]">
						<div className="flex justify-between items-center">
							<h2 className="subtitle-heading text-lightest mb-4">Rewards</h2>
							<button
								className="text-lightest hover:text-light"
								onClick={() => setShowAllRewards(!showAllRewards)}
							>
								{showAllRewards ? "See Less" : "See All"}
							</button>
						</div>
						<div className="pt-2">
							{currentUserProfile.rewards.length > 0 ? (
								<ul
									className={`grid grid-cols-3 gap-4 justify-between px-2 ${
										!showAllRewards
											? "max-h-[110px] overflow-hidden"
											: "max-h-[225px] overflow-y-auto"
									}`}
								>
									{currentUserProfile.rewards.map((reward) => {
										return (
											<li
												key={reward.id}
												className="flex flex-col items-center gap-2 relative"
											>
												<img
													className="w-28"
													src={rewardShape}
													alt={`${reward.reward_name} reward`}
												/>
												<img
													className="w-20 h-24 object-contain absolute top-0 left-3"
													src={reward.reward_icon_url}
													alt={`${reward.reward_name} reward`}
												/>
											</li>
										);
									})}
								</ul>
							) : (
								<p className="body-text">No rewards yet</p>
							)}
						</div>
					</div>
				</>
			)}
			<img
				src={BottomBlopShape}
				alt="blop shape"
				className="absolute  bottom-[-10em]  left-0 right-0 "
			/>
		</div>
	);
}
