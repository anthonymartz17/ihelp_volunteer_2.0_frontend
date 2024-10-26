import React from "react";

export default function AvatarFrame({
	avatar,
	size,
	bgColor = "secondaryLight",
}) {
	return (
		<div className={`w-${size} pl-3 flex flex-col items-center justify-center`}>
			<img
				src={avatar}
				alt=""
				className={` rounded-full card-shadow   bg-${bgColor} p-3 `}
			/>
		</div>
	);
}
