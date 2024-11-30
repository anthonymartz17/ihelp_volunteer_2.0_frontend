import Logo from "../assets/logo/logo_white.svg";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("kroberts@pursuit.org");
	const [password, setPassword] = useState("@Bc12345");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			// await login(email, password);
			await login("amartinez@pursuit.org", password);
			navigate("/account");
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="bg-lightest h-screen">
			<div className="px-4  h-[30%] bg-primary relative ">
				<div className="pt-4">
					<img src={Logo} alt="logo" className="w-24" />
				</div>
				<p className="title-heading text-center text-lightest h-full mt-12">
					Let's get ready to help your community
				</p>

				<svg
					className="absolute left-0 -mb-1 right-0 bottom-0 w-full h-[3.5em] fill-lightest"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="shape-fill"
					></path>
				</svg>
			</div>

			<section className="h-[70%] mt-4 relative   mx-auto">
				<form className="p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
					<div>
						<label className="label-text text-dark" htmlFor="email">
							Email
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							name="email"
							id="email"
							className="bg-light w-full p-3 rounded-lg outline-none text-dark body-text mt-2 input-shadow"
						/>
					</div>
					<div>
						<label className="label-text text-dark" htmlFor="password">
							Password
						</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							type="password"
							name="password"
							id="password"
							className="bg-light w-full p-3 rounded-lg outline-none text-dark body-text mt-2 input-shadow"
						/>
					</div>
					<button className="label-text bg-secondary w-full rounded-lg py-3 text-lightest active-step">
						{isLoading ? (
							<span className="flex justify-center items-center">
								<svg
									className="animate-spin h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
							</span>
						) : (
							<span>Login</span>
						)}
					</button>
				</form>
			</section>
		</div>
	);
}
