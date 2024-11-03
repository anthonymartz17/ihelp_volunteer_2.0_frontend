import { useState, useEffect } from "react";
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
import blobShape from "../assets/graphics/blop_no_backdrop.svg";
import AvatarFrame from "../componets/UI/AvatarFrame";
import ServerError from "../componets/UI/ServerError";
import { useLeaderboard } from "../hooks/useLeaderboard";
// const leaderboardData = [
// 	{
// 		volunteer_id: 1,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
// 		username: "John",
// 		points: 100,
// 		hours: 10,
// 	},
// 	{
// 		volunteer_id: 2,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
// 		username: "Kevin",
// 		points: 90,
// 	},
// 	{
// 		volunteer_id: 3,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
// 		username: "Bob",
// 		points: 80,
// 	},
// 	{
// 		volunteer_id: 4,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
// 		username: "Alice",
// 		points: 70,
// 	},
// 	{
// 		volunteer_id: 5,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
// 		username: "Kevin",
// 		points: 90,
// 	},
// 	{
// 		volunteer_id: 6,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
// 		username: "David",
// 		points: 80,
// 	},
// 	{
// 		volunteer_id: 7,
// 		avatar_url:
// 			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
// 		username: "Alice",
// 		points: 70,
// 	},
// ];

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
	const [ranking, setRanking] = useState("Points");

	function switchBtn(option) {
		setRanking(option);
		if (option === "Points") {
			setLeaderboardVolunteers((prev) =>
				[...prev]
					.sort((a, b) => b.total_points - a.total_points)
					.map((volunteer, idx) => ({
						...volunteer,
						ranking: idx + 1,
					}))
			);
		} else {
			setLeaderboardVolunteers((prev) =>
				[...prev]
					.sort((a, b) => b.total_hours - a.total_hours)
					.map((volunteer, idx) => ({
						...volunteer,
						ranking: idx + 1,
					}))
			);
		}
		setTopThree([
			leaderboardVolunteers[1],
			leaderboardVolunteers[0],
			leaderboardVolunteers[2],
		]);
	}

	useEffect(() => {
		if (!isLoading) {
			setTopThree([
				leaderboardVolunteers[1],
				leaderboardVolunteers[0],
				leaderboardVolunteers[2],
			]);
		}
	}, [leaderboardVolunteers]);
	return (
		<div className="mt-10  flex flex-col min-h-[85vh]">
			<h1 className="title-heading text-lightest px-4  mb-4">Leaderboard </h1>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && <ServerError />}

			{!isLoading && !error && (
				<div className="h-[81vh] flex flex-col justify-between">
					<div className="flex items-center px-4 mb-6 ">
						<SwitchToggleButton
							option1={"Points"}
							option2={"Hours"}
							onSwitchBtn={switchBtn}
						/>
					</div>

					<ul className="flex gap-4 items-end justify-between px-4 h-[45%]">
						{topThree.map((player, idx) => {
							const heightClass =
								idx === 1 ? "h-[100%]" : idx === 2 ? "h-[85%]" : "h-[80%]";
							const customPadding =
								idx === 1 ? "pt-0" : idx === 2 ? "pt-4" : "pt-8";

							return (
								<li
									key={player.id}
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
											{ranking === "Points"
												? player.total_points
												: player.total_hours}

											{ranking === "Points" ? " Pts" : " Hrs"}
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

					<div className=" overflow-y-scroll  rounded-t-3xl bg-tertiary border-t-[1px] px-6 text-lightest pt-5 h-[55%]">
						<ul className="flex flex-col gap-4">
							{leaderboardVolunteers.map(
								(leader, idx) =>
									idx > 2 && (
										<li
											key={leader.id}
											className="flex justify-between items-center    border-b-2 border-light border-opacity-50 py-1 pb-3"
										>
											<p className="text-xl label-text  numbers-shadow flex-auto">
												{idx + 1}
											</p>
											<div className="flex justify-between items-center gap-4 w-[90%]">
												<img
													className="bg-tertiary  rounded-full   p-2 w-10 border-[1px]"
													src={leader.avatar_url}
													alt={`${leader.username}'avatar picture`}
												/>

												<p className="body-text text-lightest">
													{leader.username}
												</p>
												<p className="label-text">
													{ranking === "Points"
														? leader.total_points
														: leader.total_hours}

													{ranking === "Points" ? " Pts" : " Hrs"}
												</p>
											</div>
										</li>
									)
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
