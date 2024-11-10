import React from "react";
import commitIcon from "../../assets/icons/commit_icon.svg";

export default function ConfirmationAlert({
	onHandleTaskCommitment,
	onSetIsAlertOpen,
	alertMessage,
}) {
	return (
		<div className="z-20  fixed bottom-0 left-0  top-0 right-0 bg-black  bg-opacity-75 p-4 flex items-center justify-center">
			<div className="card-shadow bg-lightest rounded-lg p-4 w-full max-w-md mx-auto">
				<img
					src={commitIcon}
					alt="commitment icon"
					className="w-20 text-center mx-auto"
				/>
				<h3 className="subtitle-heading text-center border-b-2 border-opacity-35 border-dark pb-3 mb-4">
					Please Confirm Decision
				</h3>
				<p className="mb-10 text-center">{alertMessage}</p>
				<div className="flex justify-end gap-3 mt-4">
					<button
						onClick={() => onSetIsAlertOpen(false)}
						type="button"
						className="label-text bg-dark w-full rounded py-3 text-lightest "
					>
						Cancel
					</button>
					<button
						onClick={() => {
							onHandleTaskCommitment();
							onSetIsAlertOpen(false);
						}}
						type="button"
						className="label-text  bg-secondary w-full rounded py-3 text-lightest "
					>
						Commit
					</button>
				</div>
			</div>
		</div>
	);
}
