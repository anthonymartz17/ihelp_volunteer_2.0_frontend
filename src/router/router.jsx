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
import LeaderboardPage from "../pages/LeaderboardPage";
import QuestPage from "../pages/QuestPage";
import RequestDetailPage from "../pages/RequestDetailPage";
import RequestsPage from "../pages/RequestsPage";
import AccountPage from "../pages/AccountPage";
import WithHeaderLayout from "../layouts/WithHeaderLayout";
import SimpleLayout from "../layouts/SimpleLayout";
import { useAuth } from "../context/AuthContext";

// const isLoggedIn = true;

export default function AppRoutes() {
	const { isLoggedIn } = useAuth();

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navigate to={isLoggedIn ? "/account" : "/login"} />,
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
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<RequestsPage />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "requests/:id",
					element: isLoggedIn ? (
						<SimpleLayout>
							<RequestDetailPage />
						</SimpleLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "quest/request/:id/task/:id",
					element: isLoggedIn ? (
						<SimpleLayout>
							<QuestPage />
						</SimpleLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "avatar-gallery",
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<AvatarGalleryPage />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "profile",
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<ProfilePage />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "commitments",
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<Commitments />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "leaderboard",
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<LeaderboardPage />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
				{
					path: "help",
					element: isLoggedIn ? (
						<WithHeaderLayout>
							<HelpPage />
						</WithHeaderLayout>
					) : (
						<LoginPage />
					),
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);
	return <RouterProvider router={router} />;
}
