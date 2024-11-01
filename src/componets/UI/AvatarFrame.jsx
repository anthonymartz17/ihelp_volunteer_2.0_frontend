import React from "react";

export default function AvatarFrame({ avatar, size, bgColor }) {
	return (
		<div className={`w-${size} pl-3 flex flex-col items-center justify-center`}>
			<img
				src={avatar}
				alt=""
				className={` rounded-full border border-light border-opacity-50 card-shadow  bg-${bgColor} p-3 `}
			/>
		</div>
	);
}
