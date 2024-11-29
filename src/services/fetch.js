// const baseURL = import.meta.env.VITE_IHELP_API_URL;
const baseURL = import.meta.env.VITE_IHELP_SERVER + "/volunteers-webapp";

export async function fetchOpenRequests(token) {
	try {
		const response = await fetch(`${baseURL}/open-requests`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

export async function fetchRequestDetail(requestId, token) {
	try {
		const response = await fetch(`${baseURL}/open-requests/${requestId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function fetchVolunteerProfile(volunteerId, token) {
	try {
		const response = await fetch(`${baseURL}/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

export async function fetchLeaderboardVolunteers(token) {
	try {
		const response = await fetch(`${baseURL}/leaderboard`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

export async function commitToTask(taskId, token) {
	try {
		const response = await fetch(`${baseURL}/tasks/${taskId}/commit`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function unCommitToTask(taskId, token) {
	try {
		const response = await fetch(`${baseURL}/tasks/${taskId}/uncommit`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function fetchTasksByVolunteer(token) {
	try {
		const response = await fetch(`${baseURL}/volunteerTasks`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function fetchUser(token) {
	try {
		const response = await fetch(`${baseURL}/user`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

export async function fetchQuest(taskId, token) {
	try {
		const response = await fetch(`${baseURL}/quest/tasks/${taskId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function updateQuestProgress(taskId, token) {
	try {
		const response = await fetch(`${baseURL}/quest/tasks/${taskId}/progress`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
