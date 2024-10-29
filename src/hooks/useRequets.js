import { useState, useEffect } from "react";
import { fetchOpenRequests } from "../services/fetch";

export function useRequests() {
	const [requests, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRequests() {
			try {
				setIsLoading(true);
				const data = await fetchOpenRequests();
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
