import { useState, useEffect } from "react";
import { fetchOpenRequests } from "../services/fetch";
import { useAuth } from "../context/authContext";
export function useRequests() {
	const { currentUser } = useAuth();

	const [requests, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRequests() {
			try {
				setIsLoading(true);
				const data = await fetchOpenRequests(currentUser.accessToken);
				setRequests(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}

		loadRequests();
	}, []);

	return { requests, isLoading, error };
}
