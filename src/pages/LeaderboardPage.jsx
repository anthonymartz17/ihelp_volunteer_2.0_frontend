import { useState, useEffect } from "react";
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
const leaderboardData = [
	{
		volunteer_id: 1,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
		username: "John Doe",
		points: 100,
	},
	{
		volunteer_id: 2,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
		username: "Karen Doe",
		points: 90,
	},
	{
		volunteer_id: 3,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "Bob Smith",
		points: 80,
	},
	{
		volunteer_id: 4,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
		username: "Alice Johnson",
		points: 70,
	},
	{
		volunteer_id: 5,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
		username: "Karen Doe",
		points: 90,
	},
	{
		volunteer_id: 6,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "Bob Smith",
		points: 80,
	},
	{
		volunteer_id: 7,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Red-1-Robot-Avatar-icon.png",
		username: "Alice Johnson",
		points: 70,
	},
];

export default function LeaderboardPage() {
	const [leaderboard, setLeaderboard] = useState(leaderboardData);

	useEffect(() => {
		// fetch leaderboard data from API
		setLeaderboard(leaderboardData.sort((a, b) => b.points - a.points));
	}, []);
	return (
		<div className="mt-10 h-[80vh] ">
			<h1 className="subtitle-heading text-lightest px-4">Leaderboard</h1>
			<div className="flex flex-col ">
				<div className="h-[10vh] flex items-center px-4">
					<SwitchToggleButton option1={"Weekly"} option2={"All Time"} />
				</div>
				<div className="flex gap-4 items-end justify-between h-[35vh] px-4">
					<div className="h-[85%] relative overflow-hidden w-[30%] text-center flex flex-col justify-center items-center">
						<img
							className="bg-dark rounded-full   p-2 w-20 border-[1px]"
							src={leaderboard[1].avatar_url}
							alt={`${leaderboard[1].username}'avatar picture`}
						/>
						<p className="body-text text-lightest">{leaderboard[1].username}</p>
						<p className="label-text bg-light rounded-lg px-2 py-1 mb-6 text-dark input-shadow">
							{leaderboard[1].points} Points
						</p>
						<div className="bg-dark w-[100%] h-[50%] bg-opacity-55 text-lightest grid justify-center items-center border-[1px] rounded-t-lg text-2xl">
							2
						</div>
					</div>
					<div className="h-[90%]  relative overflow-hidden w-[30%] text-center flex flex-col justify-center items-center">
						<img
							className="bg-dark rounded-full   p-2 w-20 border-[1px] text-center "
							src={leaderboard[0].avatar_url}
							alt={`${leaderboard[0].username}'avatar picture`}
						/>
						<p className="body-text text-lightest">{leaderboard[1].username}</p>
						<p className="label-text bg-light rounded-lg px-2 py-1 mb-6 text-dark input-shadow">
							{leaderboard[1].points} Points
						</p>
						<div className="bg-dark h-[60%] w-[100%]   bg-opacity-55 text-lightest grid justify-center items-center border-[1px] rounded-t-lg text-2xl">
							1
						</div>
					</div>
					<div className="h-[80%]  relative overflow-hidden w-[30%] text-center flex flex-col justify-center items-center">
						<img
							className="bg-dark rounded-full   p-2 w-20 border-[1px] text-center "
							src={leaderboard[2].avatar_url}
							alt={`${leaderboard[2].username}'avatar picture`}
						/>
						<p className="body-text text-lightest">{leaderboard[1].username}</p>
						<p className="label-text bg-light rounded-lg px-2 py-1 mb-6 text-dark input-shadow">
							{leaderboard[1].points} Points
						</p>
						<div className="bg-dark h-[60%] w-[100%]   bg-opacity-55 text-lightest grid justify-center items-center border-[1px] rounded-t-lg text-2xl">
							3
						</div>
					</div>
				</div>
				<div className="fixed bottom-0 right-0 left-0 rounded-t-3xl bg-tertiary border-t-[1px] px-4 text-lightest h-[40vh] pt-5">
					<ul className="h-[100%] overflow-y-scroll flex flex-col gap-4">
						{leaderboard.map(
							(leader, idx) =>
								idx > 2 && (
									<li
										key={leader.volunteer_id}
										className="flex justify-between items-center py-1 border-b-2 border-light border-opacity-50 "
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
