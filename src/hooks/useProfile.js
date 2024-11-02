import { useState, useEffect } from "react";
import { fetchVolunteerProfile } from "../services/fetch";
import { useAuth } from "../context/authContext";
export function useProfile(volunteerId) {
	const { currentUser } = useAuth();
	const [currentUserProfile, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadProfile() {
			try {
				setIsLoading(true);
				const data = await fetchVolunteerProfile(volunteerId, currentUser.accessToken);
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
