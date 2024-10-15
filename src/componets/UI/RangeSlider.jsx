import { useEffect, useRef, useState } from "react";

export default function MultiRangeSlider() {
	const [minValue, setMinValue] = useState(25);
	const [maxValue, setMaxValue] = useState(75);

	const inputLeftRef = useRef(null);
	const inputRightRef = useRef(null);
	const thumbLeftRef = useRef(null);
	const thumbRightRef = useRef(null);
	const rangeRef = useRef(null);

	const min = 0;
	const max = 100;

	const setLeftValue = () => {
		const newValue = Math.min(
			parseInt(inputLeftRef.current.value),
			parseInt(inputRightRef.current.value) - 1
		);
		setMinValue(newValue);
		const percent = ((newValue - min) / (max - min)) * 100;

		thumbLeftRef.current.style.left = `${percent}%`;
		rangeRef.current.style.left = `${percent}%`;
	};

	const setRightValue = () => {
		const newValue = Math.max(
			parseInt(inputRightRef.current.value),
			parseInt(inputLeftRef.current.value) + 1
		);
		setMaxValue(newValue);
		const percent = ((newValue - min) / (max - min)) * 100;

		thumbRightRef.current.style.right = `${100 - percent}%`;
		rangeRef.current.style.right = `${100 - percent}%`;
	};

	// useEffect(() => {
	// 	setLeftValue();
	// 	setRightValue();
	// }, []);

	return (
		<div>
			<div>
				<input type="range" id="input-left" min="0" max="100"  />
				<input type="range" id="input-right" min="0" max="100"  />

				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
