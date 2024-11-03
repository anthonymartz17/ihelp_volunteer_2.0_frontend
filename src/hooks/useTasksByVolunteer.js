import { useState, useEffect } from "react";
import { fetchTasksByVolunteer } from "../services/fetch";

export function useTasksByVolunteer(token) {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function loadTasks(token) {
			setIsLoading(true);
			try {
				const tasks = await fetchTasksByVolunteer(token);
				setTasks(tasks);
			} catch (err) {
				setError(err);
				throw err;
			} finally {
				setIsLoading(false);
			}
		}
		loadTasks(token);
	}, []);

	return { tasks, isLoading, error, setTasks };
}
