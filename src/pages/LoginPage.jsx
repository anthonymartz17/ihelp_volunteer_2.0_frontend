export default function Login() {
	return (
		<div className="bg-lightest h-screen">
			<div className="p-4 h-[30%] bg-primary relative">
				<div className="text-lightest subtitle-heading">LOGO</div>
				<p className="title-heading text-center text-lightest h-full mt-16">
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

			<section className="h-[70%] mt-4 relative">
				<form className="p-4 flex flex-col gap-4">
					<div>
						<label className="label-text text-dark" htmlFor="email">
							Email
						</label>
						<input
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
							type="password"
							name="password"
							id="password"
							className="bg-light w-full p-3 rounded-lg outline-none text-dark body-text mt-2 input-shadow"
						/>
					</div>
					<button className="label-text bg-secondary w-full rounded py-3 text-lightest">
						Login
					</button>
				</form>
			</section>
		</div>
	);
}
