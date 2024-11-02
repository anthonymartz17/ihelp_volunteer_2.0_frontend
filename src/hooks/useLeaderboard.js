import { useState, useEffect } from "react";
import { fetchLeaderboardVolunteers } from "../services/fetch";
import { useAuth } from "../context/authContext";

export function useLeaderboard() {
	const { currentUser } = useAuth();
	const [leaderboardVolunteers, setLeaderboardVolunteers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadLeaderboardVolunteers() {
			try {
				setIsLoading(true);
				const data = await fetchLeaderboardVolunteers(currentUser.accessToken);
				setLeaderboardVolunteers(
					data
						.sort((a, b) => b.points - a.points)
						.map((volunteer, index) => ({
							...volunteer,
							ranking: index + 1,
						}))
				);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}
		loadLeaderboardVolunteers();
	}, []);

	return { leaderboardVolunteers, isLoading, error, setLeaderboardVolunteers };
}
