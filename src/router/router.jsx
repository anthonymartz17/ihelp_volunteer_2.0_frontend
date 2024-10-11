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
		element: <LoginPage />,
	},
	{
		path: "/account",
		element: <AccountPage />,
		children: [
			{
				path: "",
				element: userLoggedIn ? <RequestsPage /> : <LoginPage />,
			},
			{
				path: "requests/:id",
				element: userLoggedIn ? <RequestDetailPage /> : <LoginPage />,
			},
			{
				path: "quest/request/:id/task/:id",
				element: userLoggedIn ? <QuestPage /> : <LoginPage />,
			},
			{
				path: "avatar-gallery",
				element: <AvatarGalleryPage />,
			},
			{
				path: "profile",
				element: userLoggedIn ? <ProfilePage /> : <LoginPage />,
			},
			{
				path: "commitments",
				element: userLoggedIn ? <Commitments /> : <LoginPage />,
			},
			{
				path: "leaderboard",
				element: userLoggedIn ? <LeaderboardPage /> : <LoginPage />,
			},
			{
				path: "help",
				element: userLoggedIn ? <HelpPage /> : <LoginPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default function AppRoutes() {
	return <RouterProvider router={router} />;
}
