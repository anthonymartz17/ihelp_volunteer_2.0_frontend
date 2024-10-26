import { useState, useEffect } from "react";
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
import blobShape from "../assets/graphics/blop_no_backdrop.svg";
import AvatarFrame from "../componets/UI/AvatarFrame";
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
		username: "Kevin Smith",
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
		username: "Kevin Davis",
		points: 90,
	},
	{
		volunteer_id: 6,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "David Elm",
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

const topThree = [
	{
		volunteer_id: 2,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
		username: "Karen Julien",
		points: 90,
		ranking: 2,
	},
	{
		volunteer_id: 1,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
		username: "John Johnson",
		points: 100,
		ranking: 1,
	},
	{
		volunteer_id: 3,
		avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
		username: "Cristina Rodriguez",
		points: 80,
		ranking: 3,
	},
];

export default function LeaderboardPage() {
	const [leaderboard, setLeaderboard] = useState(leaderboardData);

	useEffect(() => {
		// fetch leaderboard data from API
		setLeaderboard(leaderboardData.sort((a, b) => b.points - a.points));
	}, []);
	return (
		<div className="mt-10 h-screen flex flex-col">
			<h1 className="subtitle-heading text-lightest px-4  mb-4">Leaderboard</h1>

			<div className="flex items-center px-4 mb-6">
				<SwitchToggleButton option1={"Weekly"} option2={"All Time"} />
			</div>

			<ul className="flex gap-4 items-end justify-between px-4 h-[30%]">
				{topThree.map((player) => {
					const heightClass =
						player.ranking === 1
							? "h-[100%]"
							: player.ranking === 2
							? "h-[85%]"
							: "h-[80%]";
					const customPadding =
						player.ranking === 1
							? "pt-0"
							: player.ranking === 2
							? "pt-4"
							: "pt-8";

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

			<div className=" rounded-t-3xl bg-tertiary border-t-[1px] px-4 text-lightest pt-5 h-[50%]">
				<ul className="overflow-y-scroll flex flex-col gap-4">
					{leaderboard.map(
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
										<p className="body-text text-lightest">{leader.username}</p>
										<p className="label-text">{leader.points} Pts</p>
									</div>
								</li>
							)
					)}
				</ul>
			</div>
		</div>
	);
}
