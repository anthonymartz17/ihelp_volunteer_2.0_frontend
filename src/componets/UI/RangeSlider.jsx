import React, { useState } from "react";

export default function RangeSlider({ min, max, step }) {
	const [minValue, setMinValue] = useState(min);
	const [maxValue, setMaxValue] = useState(max);

	function handleMinChange(event) {
		const value = Math.min(Number(event.target.value), maxValue - step);
		setMinValue(value);
	}

	function handleMaxChange(event) {
		const value = Math.max(Number(event.target.value), minValue + step);
		setMaxValue(value);
	}

	return (
		<div className="w-80 mx-auto my-8">
			{/* Display Min and Max Values */}
			<div className="flex justify-between mb-4">
				<span>Min: {minValue}</span>
				<span>Max: {maxValue}</span>
			</div>

			{/* Slider */}
			<div className="relative w-full">
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={minValue}
					onChange={handleMinChange}
					className="absolute w-full h-1 bg-transparent pointer-events-auto appearance-none z-30"
				/>
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={maxValue}
					onChange={handleMaxChange}
					className="absolute w-full h-1 bg-transparent pointer-events-auto appearance-none z-30"
				/>

				{/* Track */}
				<div className="absolute top-1/2 h-1 w-full bg-gray-300 -translate-y-1/2 z-10"></div>

				{/* Range Highlight */}
				<div
					className="absolute top-1/2 h-1 bg-blue-500 -translate-y-1/2 z-20"
					style={{
						left: `${(minValue / max) * 100}%`,
						width: `${((maxValue - minValue) / max) * 100}%`,
					}}
				></div>
			</div>
		</div>
	);
}
