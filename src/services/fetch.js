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
