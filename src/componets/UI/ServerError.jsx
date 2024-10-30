import React from "react";
import serverErrorGraphic from "../../assets/graphics/server_error.svg";
export default function ServerError() {
	return (
		<div className="h-[60vh] text-center flex flex-col items-center justify-center ">
			<img
				className="w-[50%]"
				src={serverErrorGraphic}
				alt="server error graphic"
			/>
			<p className="text-2xl text-light font-bold mb-4">
				Oops! Something went wrong.
			</p>
			<p className="body-text text-light">
				Please try again later or contact support.
			</p>
		</div>
	);
}
