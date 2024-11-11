import { useState, useEffect } from "react";
import { fetchQuest } from "../services/fetch";
import { useAuth } from "../context/authContext";
import { updateQuestProgress } from "../services/fetch";

export function useQuest(taskId) {
	const { currentUser } = useAuth();
	const [quest, setQuest] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	async function updateQuest(taskId, token) {
		try {
			const data = await updateQuestProgress(taskId, token);
			setQuest((prev) => ({ ...prev, ...data }));
		} catch (err) {
			setError(err);
		}
	}

	useEffect(() => {
		async function loadQuest() {
			try {
				setIsLoading(true);
				const data = await fetchQuest(taskId, currentUser.accessToken);
				setQuest(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}

		loadQuest();
	}, []);

	return { quest, setQuest, updateQuest, isLoading, error };
}
