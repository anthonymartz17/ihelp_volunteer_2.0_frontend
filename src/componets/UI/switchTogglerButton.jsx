import { useState } from "react";

export default function switchToggleButton({ option1, option2 }) {
	const [selected, setSelected] = useState(option1);

	return (
		<div className="relative grid grid-cols-2 bg-light bg-opacity-55 rounded-xl p-1 w-full ">
			<div
				className={`absolute h-[90%] top-0.5 bottom-0 left-0.5 w-1/2 bg-tertiary rounded-xl transition-transform duration-300 ease-in-out ${
					selected === option2 ? "translate-x-full" : "translate-x-0"
				}`}
			></div>

			<button
				className={` z-10 px-4 py-2 rounded-lg transition duration-300 ${
					selected === option1 ? "text-lightest" : "text-dark"
				}`}
				onClick={() => setSelected(option1)}
			>
				{option1}
			</button>

			<button
				className={`z-10 px-4 py-2 rounded-lg transition duration-300 text-center ${
					selected === option2 ? "text-lightest" : "text-dark"
				}`}
				onClick={() => setSelected(option2)}
			>
				{option2}
			</button>
		</div>
	);
}
