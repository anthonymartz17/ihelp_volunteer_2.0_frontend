import React from "react";
import oopsIcon from "../../assets/icons/oops_icon1.svg";

export default function AlertMessage({ setIsError, alertMessage }) {
	return (
		<div className="z-20 fixed bottom-0 left-0  top-0 right-0 bg-black  bg-opacity-75 p-2 flex items-center justify-center">
			<div className="card-shadow bg-lightest rounded-lg p-4 w-full max-w-md mx-auto">
				<div className="flex  bg-red-500">
					<span class="material-symbols-outlined text-dark">close</span>
				</div>
				<img
					src={oopsIcon}
					alt="commitment icon"
					className="w-20 text-center mx-auto"
				/>
				<h3
					className={`subtitle-heading text-center border-b-2 border-opacity-35 border-dark pb-3 mb-4 text-red-600`}
				>
					Alert
				</h3>
				<p className="mb-10 text-center">{alertMessage}</p>
			</div>
		</div>
	);
}
// onClick={() => setIsAlertOpen(false)}
