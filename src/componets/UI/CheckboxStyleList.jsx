import { useEffect, useState } from "react";
import errandIcon from "../../assets/icons/errand_icon_dark.svg";
import cleaningIcon from "../../assets/icons/cleaning_icon_dark.svg";
import technologyIcon from "../../assets/icons/technology_icon_dark.svg";
import petCareIcon from "../../assets/icons/pet_care_icon_dark.svg";
import variousIcon from "../../assets/icons/various_icon_dark.svg";
import mealPrep from "../../assets/icons/mealprep_icon_dark.svg";

const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};

const categories = [
	{
		category_id: 1,
		name: "errands",
	},
	{
		category_id: 2,
		name: "cleaning",
	},
	{
		category_id: 3,
		name: "tech",
	},
	{
		category_id: 4,
		name: "pet care",
	},
	{
		category_id: 5,
		name: "various",
	},
	{
		category_id: 6,
		name: "mealPrep",
	},
];

export default function CheckboxStyleList() {
	const [selectedCategories, setSelectedCategories] = useState(new Set());

	function handleCategoryChange(categoryId) {
		setSelectedCategories((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(categoryId)) {
				newSet.delete(categoryId);
			} else {
				newSet.add(categoryId);
			}
			return newSet;
		});
	}

	useEffect(() => {
		console.log(Array.from(selectedCategories));
	}, [selectedCategories]);
	return (
		<ul className="bg-lightest bg-opacity-50 w-full text-dark grid grid-cols-3 gap-1 gap-y-3 p-2 rounded-lg">
			{categories.map((category) => (
				<li
					key={category.category_id}
					className="flex justify-between items-center"
				>
					<label
						htmlFor={category.category_id}
						className="bg-lightest relative w-[100%] text-center flex items-center gap-2 p-1 rounded-md input-shadow"
					>
						<img
							src={categoryIcons[category.category_id]}
							alt={`${category.name} icon`}
							className="w-8"
						/>
						<span>{category.name}</span>

						<input
							onChange={() => handleCategoryChange(category.category_id)}
							id={category.category_id}
							type="checkbox"
							className="absolute hidden"
						/>
					</label>
				</li>
			))}
		</ul>
	);
}
