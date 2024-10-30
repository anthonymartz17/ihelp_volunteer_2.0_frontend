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

	useEffect(() => {
		setUserBadges(new Set(currentUserProfile.badges));
	}, [currentUserProfile]);

	return (
		<div className="p-4 mt-5 grid gap-8 bg-primary">
			<h2 className="subtitle-heading text-lightest">ProfilePage</h2>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && <ServerError />}
			{!isLoading && !error && (
				<div>
					<div className="text-lightest flex justify-between items-center bg-dark  bg-opacity-35 border-lightest border-opacity-35   border-[1px] rounded-2xl px-3 py-2">
						<div className="flex items-center gap-4">
							<img
								className="bg-dark rounded-full border-2  border-lightest   p-2 w-24"
								src={currentUserProfile.avatar_url}
								alt={`${currentUserProfile.username}'avatar picture`}
							/>
							<div>
								<p className="body-text">{currentUserProfile.username}</p>
								<p className="label-text">
									{currentUserProfile.total_points} Points
								</p>
							</div>
						</div>
						<div>
							<p className="label-text">Since</p>
							<p className="body-text">
								{formatDate(currentUserProfile.start_date)}
							</p>
						</div>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h2 className="subtitle-heading text-lightest mb-4">Badges</h2>
							<span className="text-lightest ">See All</span>
						</div>

						<ul className="grid grid-cols-3 gap-4 justify-between">
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
					<div className="z-10">
						<div className="flex justify-between items-center">
							<h2 className="subtitle-heading text-lightest mb-4">Rewards</h2>
							<span className="text-lightest ">See All</span>
						</div>
						<div>
							{currentUserProfile.rewards.length > 0 ? (
								<ul className="grid grid-cols-3 gap-4">
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
													className="w-26 h-24 object-contain absolute top-0 -left-2" // Adjust the size here
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
				</div>
			)}
			{/* <img
				src={BottomBlopShape}
				alt="blop shape"
				className="absolute -bottom-28  left-0 right-0"
			/> */}
		</div>
	);
}
