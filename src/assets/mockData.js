const requests = [
	{
		id: 1,
		date: "2023-06-01",
		category: "errands",
		hours: 2,
		category_id: 1,
		tasks_total: 4,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 2,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 3,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
			},
		],
	},
	{
		id: 2,
		date: "2023-06-02",
		time: "11:30 AM",
		category: "cleaning",
		tasks_total: 4,
		points: 50,
		hours: 3,
		category_id: 2,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
			{
				volunteer_id: 2,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
			},
		],
	},
	{
		id: 3,
		date: "2023-06-03",
		time: "2:00 PM",
		category: "technology",
		points: 20,
		hours: 1,
		category_id: 3,
		assigned_volunteers: [
			{
				volunteer_id: 1,
				avatar_url:
					"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			},
		],
		tasks_total: 2,
	},
	{
		id: 4,
		date: "2023-06-04",
		time: "9:15 AM",
		category: "pet care",
		points: 40,
		hours: 1,
		category_id: 4,
		assigned_volunteers: [],
		tasks_total: 1,
	},
	{
		id: 5,
		date: "2023-06-05",
		time: "4:45 PM",
		category: "various",
		points: 25,
		hours: 1,
		category_id: 5,
		assigned_volunteers: [],
		tasks_total: 3,
	},
];

const requestDetail = {
	id: 1,
	category: "errands",
	category_id: 1,
	date: "2023-06-01",
	time: "10:00 AM",
	points: 130,
	hours: 2,
	address: {
		street: "123 Main St",
		city: "Amityville",
		state: "NY",
		zip: "11701",
	},
	description: "Need someone to pick up groceries and drop them off at home.",

	tasks: [
		{
			id: 1,
			description: "Pick up groceries from the supermarket.",
			status: "assigned",
			status_id: 2,
			volunteer_id: 1,
			volunteer_username: "Incognito23",
			volunteer_avatar_url:
				"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
			points: 55,
		},
		{
			id: 2,
			description: "Return a package to the post office.",
			status: "open",
			points: 25,
			volunteer_id: null,
			volunteer_avatar_url: null,
			status_id: 1,
		},
		{
			id: 3,
			description: "Pick up dry cleaning from the local shop.",
			status: "open",
			volunteer_id: null,
			volunteer_username: null,
			volunteer_avatar_url: null,
			status_id: 1,
			points: 25,
		},
		{
			id: 4,
			description: "Buy flowers from the florist for a special occasion.",
			status: "assigned",
			volunteer_id: 2,
			volunteer_username: "cloud99",
			volunteer_avatar_url:
				"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Yellow-2-Robot-Avatar-icon.png",
			status_id: 2,
			points: 25,
		},
	],
};

const currentUserProfile = {
	id: 10,
	username: "Christopher",
	avatar_url:
		"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
	total_points: 90,
	start_date: "jun, 2023",
	badges: [1, 4, 5], // badge_ids
	rewards: [
		{
			id: 1,
			reward_name: "Bike",
			reward_description: "A new bike",
			reward_icon_url: "https://pngimg.com/d/bicycle_PNG102562.png",
		},
		{
			id: 2,
			reward_name: "Book",
			reward_description: "A stack of books",
			reward_icon_url: "https://pngimg.com/d/book_PNG51097.png",
		},
		{
			id: 3,
			reward_name: "Gift Card",
			reward_description: "A $50 gift card",
			reward_icon_url:
				"https://images.vexels.com/content/242558/preview/blue-backpack-color-stroke-8e28ad.png",
		},
	],
};
