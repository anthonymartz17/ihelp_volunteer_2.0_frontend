const baseURL = import.meta.env.VITE_IHELP_API_URL;

export async function fetchOpenRequests() {
	try {
		const response = await fetch(`${baseURL}/requests`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

export async function fetchRequestDetail(requestId) {
	try {
		const response = await fetch(`${baseURL}/requests/${requestId}`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function fetchVolunteerProfile(volunteerId) {
	try {
		const response = await fetch(`${baseURL}/${volunteerId}/profile`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
