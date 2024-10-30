import { useState, useEffect } from "react";
import { fetchVolunteerProfile } from "../services/fetch";

export function useProfile(volunteerId) {
	const [currentUserProfile, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadProfile() {
			try {
				setIsLoading(true);
				const data = await fetchVolunteerProfile(volunteerId);
				setRequests(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}

		loadProfile();
	}, []);

	return { currentUserProfile, isLoading, error };
}
