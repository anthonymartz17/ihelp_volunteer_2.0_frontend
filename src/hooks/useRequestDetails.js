import { useState, useEffect } from "react";
import { fetchRequestDetail } from "../services/fetch";

export function useRequestDetail(requestId) {
	const [requestDetail, setRequestDetail] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRequestDetail() {
			try {
				setIsLoading(true);
				const data = await fetchRequestDetail(requestId);
				setRequestDetail(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}

		if (requestId) {
      loadRequestDetail();
      console.log(requestDetail,'dfd');
		}
	}, [requestId]);

	return { requestDetail, isLoading, error };
}
