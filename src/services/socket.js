import { io } from "socket.io-client";
const baseUrl = import.meta.env.VITE_IHELP_SERVER;
const socket = io(baseUrl, {
	auth: {
		token: localStorage.getItem("token"),
	},
	withCredentials: true,
	transports: ["websocket", "polling"],
});

export default socket;
