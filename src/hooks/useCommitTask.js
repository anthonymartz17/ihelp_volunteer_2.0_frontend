import { useState } from "react";
import { commitToTask, unCommitToTask } from "../services/fetch";

export function useCommitTask() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	async function commit(taskId, token) {
		setIsLoading(true);
		try {
			const result = await commitToTask(taskId, token);
			return result;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setIsLoading(false);
		}
	}
	async function uncommit(taskId, token) {
		setIsLoading(true);
		try {
			const result = await unCommitToTask(taskId, token);
			return result;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setIsLoading(false);
		}
	}

	return { commit, uncommit, isLoading, error };
}
