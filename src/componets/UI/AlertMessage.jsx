import { useEffect, useState } from "react";
import triangle_danger_icon from "../../assets/icons/triangle_danger_icon_dark.svg";

export default function AlertMessage({ setIsError, alertMessage }) {
	const [countDown, setCountDown] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountDown((prevCount) => prevCount - 1);
		}, 1000);

		if (countDown === 0) {
			clearInterval(timer);
			setIsError(false);
		}

		return () => clearInterval(timer);
	}, [countDown, setIsError]);

	return (
		<div className="z-20 fixed bottom-0 left-0  top-0 right-0 bg-black  bg-opacity-75 p-4 flex items-center justify-center">
			<div className="card-shadow bg-lightest rounded-lg p-4 w-full max-w-md mx-auto">
				<div className="flex justify-end">
					<span
						onClick={() => setIsError(false)}
						class="material-symbols-outlined text-dark label-text"
					>
						close
					</span>
				</div>
				<img
					src={triangle_danger_icon}
					alt="commitment icon"
					className="w-20 text-center mx-auto"
				/>
				<h3
					className={`subtitle-heading text-center border-b-2 border-opacity-35 border-dark pb-3 mb-4`}
				>
					Alert
				</h3>
				<p className="mb-10 text-center">{alertMessage}</p>

				<p className="text-3xl text-center label-text  numbers-shadow">
					{countDown}
				</p>
			</div>
		</div>
	);
}
