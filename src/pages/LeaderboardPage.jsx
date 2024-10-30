import { useState, useEffect } from "react";
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
import blobShape from "../assets/graphics/blop_no_backdrop.svg";
import AvatarFrame from "../componets/UI/AvatarFrame";

import { useLeaderboard } from "../hooks/useLeaderboard";
const leaderboardData = [
	{
		volunteer_id: 1,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
		username: "John",
		points: 100,
		hours: 10,
	},
	{
		volunteer_id: 2,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
		username: "Kevin",
		points: 90,
	},
	{
		volunteer_id: 3,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "Bob",
		points: 80,
	},
	{
		volunteer_id: 4,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
		username: "Alice",
		points: 70,
	},
	{
		volunteer_id: 5,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
		username: "Kevin",
		points: 90,
	},
	{
		volunteer_id: 6,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "David",
		points: 80,
	},
	{
		volunteer_id: 7,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
		username: "Alice",
		points: 70,
	},
];

// const topThree = [
// 	{
// 		volunteer_id: 2,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
// 		username: "Karen",
// 		points: 90,
// 		ranking: 2,
// 	},
// 	{
// 		volunteer_id: 1,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
// 		username: "John",
// 		points: 100,
// 		ranking: 1,
// 	},
// 	{
// 		volunteer_id: 3,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
// 		username: "Cristina",
// 		points: 80,
// 		ranking: 3,
// 	},
// ];

export default function LeaderboardPage() {
	const { leaderboardVolunteers, isLoading, error, setLeaderboardVolunteers } =
		useLeaderboard();
	const [topThree, setTopThree] = useState([]);

	useEffect(() => {
		// fetch leaderboard data from API
		setLeaderboardVolunteers(
			leaderboardData
				.sort((a, b) => b.points - a.points)
				.map((player, index) => ({
					...player,
					ranking: index + 1,
				}))
		);
		const topThree = leaderboardVolunteers.slice(0, 3);
		setTopThree([topThree[1], topThree[0], topThree[2]]);
	}, []);
	return (
		<div className="mt-10  flex flex-col">
			<h1 className="subtitle-heading text-lightest px-4  mb-4">
				Leaderboard{" "}
			</h1>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			<div className="h-[81vh] flex flex-col justify-between">
				<div className="flex items-center px-4 mb-6 ">
					<SwitchToggleButton option1={"By Points"} option2={"By Hour"} />
				</div>

				<ul className="flex gap-4 items-end justify-between px-4 h-[45%]">
					{topThree.map((player, idx) => {
						const heightClass =
							idx === 1 ? "h-[100%]" : idx === 2 ? "h-[85%]" : "h-[80%]";
						const customPadding =
							idx === 1 ? "pt-0" : idx === 2 ? "pt-4" : "pt-8";

						return (
							<li
								key={player.volunteer_id}
								className={`relative overflow-hidden w-[30%] text-center flex flex-col justify-center items-center gap-1 h-full ${customPadding}`}
							>
								<AvatarFrame
									avatar={player.avatar_url}
									size={20}
									bgColor="secondarylight"
								/>
								<div>
									<p className="body-text text-lightest">{player.username}</p>
									<p className="subtitle-heading text-light px-2">
										{player.points} Pts
									</p>
								</div>
								<div className="h-full w-[100%] grid relative">
									<div
										className={`absolute bottom-0 bg-dark w-[100%] border-light border-[1px] border-opacity-40 bg-opacity-55 text-lightest grid justify-center items-center rounded-t-lg text-2xl ${heightClass}`}
									>
										{player.ranking}
									</div>
								</div>
							</li>
						);
					})}
				</ul>

				<div className=" rounded-t-3xl bg-tertiary border-t-[1px] px-4 text-lightest pt-5 h-[55%]">
					<ul className="overflow-y-scroll flex flex-col gap-4">
						{leaderboardVolunteers.map(
							(leader, idx) =>
								idx > 2 && (
									<li
										key={leader.volunteer_id}
										className="flex justify-between items-center    border-b-2 border-light border-opacity-50 py-1 pb-3"
									>
										<p className="text-xl label-text  numbers-shadow flex-auto">
											{idx + 1}
										</p>
										<div className="flex justify-between items-center gap-4 w-[90%]">
											<img
												className="bg-dark rounded-full   p-2 w-10 border-[1px]"
												src={leader.avatar_url}
												alt={`${leader.username}'avatar picture`}
											/>
											<p className="body-text text-lightest">
												{leader.username}
											</p>
											<p className="label-text">{leader.points} Pts</p>
										</div>
									</li>
								)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
