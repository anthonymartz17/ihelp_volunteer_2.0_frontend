import errandIcon from "../assets/icons/errand_icon.svg";
import cleaningIcon from "../assets/icons/cleaning_icon.svg";
import technologyIcon from "../assets/icons/technology_icon.svg";
import petCareIcon from "../assets/icons/pet_care_icon.svg";
import variousIcon from "../assets/icons/various_icon.svg";
import mealPrep from "../assets/icons/mealprep_icon.svg";
import coins from "../assets/icons/coin.svg";
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
import BottomBlopShape from "../assets/graphics/bottom_blob_shape.svg";

const tasks = [
	{
		id: 1,
		request_id: 1,
		category_id: 1,
		category_name: "errands",
		points: 10,
		date: "june 1, 2023",
		status: "completed",
		status_id: 4,
	},
	{
		id: 2,
		request_id: 1,
		category_id: 2,
		category_name: "cleaning",
		points: 10,
		date: "june 1, 2023",
		status: "completed",
		status_id: 4,
	},
	{
		id: 3,
		request_id: 1,
		category_id: 3,
		category_name: "technology",
		points: 10,
		date: "june 1, 2023",
		status: "assigned",
		status_id: 2,
	},
	{
		id: 4,
		request_id: 1,
		category_id: 4,
		category_name: "pet care",
		points: 10,
		date: "june 1, 2023",
		status: "completed",
		status_id: 4,
	},
];
const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};
export default function Commitments() {
	
		// navigate(`/account/quest/request/${requestDetail.id}/task/:id`);
	return (
		<div className="p-4  h-[80vh] relative ">
			<h1 className="subtitle-heading text-lightest mb-10">Commitments</h1>

			<div className="mb-4">
				<SwitchToggleButton option1={"Pending"} option2={"Completed"} />
			</div>

			<div className="mb-[10em]">
				<table className="text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
					<thead className="label-text text-lightest bg-tertiary sticky top-0">
						<tr>
							<th scope="col" className="px-6 py-3 w-1/3">
								Type
							</th>
							<th scope="col" className="px-6 py-3 w-1/3">
								Points
							</th>
							<th scope="col" className="px-6 py-3 w-1/3">
								Date
							</th>
						</tr>
					</thead>
					{/* <div className="overflow-y-auto max-h-[40vh] bg-red-700"> */}
					<tbody className="text-lightest  body-text ">
						{tasks.map((task) => (
							<tr
								key={task.id}
								className="odd:bg-red even:bg-lightest even:bg-opacity-20  bg-"
							>
								<td className="p-2">
									<img
										className="w-8"
										src={categoryIcons[task.category_id]}
										alt=""
									/>
									<span>{task.category_name}</span>
								</td>
								<td className="p-2">
									<div className="flex gap-1">
										<img className="w-5" src={coins} alt="" />
										<span>{task.points}</span>
									</div>
								</td>
								<td className="p-2">{task.date}</td>
							</tr>
						))}
					</tbody>
					{/* </div> */}
				</table>
			</div>

			<img
				src={BottomBlopShape}
				alt="blop shape"
				className="absolute bottom-[-8em] left-0 right-0"
			/>
		</div>
	);
}
