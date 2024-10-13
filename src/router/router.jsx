import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AvatarGalleryPage from "../pages/AvatarGalleryPage";
import NotFound from "../pages/NotFound";
import Commitments from "../pages/Commitments";
import ProfilePage from "../pages/ProfilePage";
import HelpPage from "../pages/HelpPage";
import LeaderboardPage from "../pages//LeaderboardPage";
import QuestPage from "../pages/QuestPage";
import RequestDetailPage from "../pages/RequestDetailPage";
import RequestsPage from "../pages/RequestsPage";
import AccountPage from "../pages/AccountPage";

const userLoggedIn = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={userLoggedIn ? "/account" : "/login"} />,
	},

	{
		path: "/login",
		meta: { name: "Login" },
		element: <LoginPage />,
	},
	{
		path: "/account",
		element: <AccountPage />,
		children: [
			{
				path: "",
				meta: { name: "Requests" },
				element: userLoggedIn ? <RequestsPage /> : <LoginPage />,
			},
			{
				path: "requests/:id",
				name: "Request Detail",
				element: userLoggedIn ? <RequestDetailPage /> : <LoginPage />,
			},
			{
				path: "quest/request/:id/task/:id",
				name: "Quest",
				element: userLoggedIn ? <QuestPage /> : <LoginPage />,
			},
			{
				path: "avatar-gallery",
				name: "Avatar Gallery",
				element: <AvatarGalleryPage />,
			},
			{
				path: "profile",
				name: "Profile",
				element: userLoggedIn ? <ProfilePage /> : <LoginPage />,
			},
			{
				path: "commitments",
				name: "Commitments",
				element: userLoggedIn ? <Commitments /> : <LoginPage />,
			},
			{
				path: "leaderboard",
				name: "Leaderboard",
				element: userLoggedIn ? <LeaderboardPage /> : <LoginPage />,
			},
			{
				path: "help",
				name: "Help",
				element: userLoggedIn ? <HelpPage /> : <LoginPage />,
			},
		],
	},
	{
		path: "*",
		name: "Not Found",
		element: <NotFound />,
	},
]);

export default function AppRoutes() {
	return <RouterProvider router={router} />;
}
