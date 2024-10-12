import RequestCard from "../componets/RequestCard";

/*
task status:
1. open
2. assigned
3. in progress
4. completed
5. cancelled
*/

const requests = [
	{
		id: 1,
		date: "2023-06-01",
		time: "10:00 AM",
		category: "errands",
		points: 30,
		category_id: 1,
		tasks_total: 3,
		tasks_assigned: 2,
		task_status_id: 1,
	},
	{
		id: 2,
		date: "2023-06-02",
		time: "11:30 AM",
		category: "cleaning",
		points: 50,
		category_id: 2,
	},
	{
		id: 3,
		date: "2023-06-03",
		time: "2:00 PM",
		category: "technology",
		points: 20,
		category_id: 3,
	},
	{
		id: 4,
		date: "2023-06-04",
		time: "9:15 AM",
		category: "pet care",
		points: 40,
		category_id: 4,
	},
	{
		id: 5,
		date: "2023-06-05",
		time: "4:45 PM",
		category: "various",
		points: 25,
		category_id: 5,
	},
];

export default function RequestsPage() {
	return (
		<div className="p-4 mt-10 ">
			<div className="flex justify-between items-center mb-4">
				<h1 className="subtitle-heading text-lightest mb-6">Requests</h1>
				<div className="flex justify-between items-center bg-light w-[100px] rounded-lg p-3 input-shadow">
					<span class="material-symbols-outlined">tune</span>
					<span className="label-text">Filter</span>
				</div>
			</div>

			<ul className="grid grid-cols-1 md:grid-cols-2  gap-4 overflow-y-auto h-[71.5vh] rounded-lg p-1 no-scrollbar">
				{requests.map((request, index) => (
					<li key={request.id}>
						<RequestCard request={request} index={index} />
					</li>
				))}
			</ul>
		</div>
	);
}
