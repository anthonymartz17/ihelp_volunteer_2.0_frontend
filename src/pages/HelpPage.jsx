import { useNavigate } from "react-router-dom";
import { useState } from "react";
import helpIcon from "../assets/icons/help.svg";
import faqIcon from "../assets/icons/faq_icon.svg";
import triangleIcon from "../assets/icons/triangle_danger_icon.svg";

const reportCategories = [
	{ id: 1, category: "Technical Issues" },
	{ id: 2, category: "Task or Request Problems" },
	{ id: 3, category: "Volunteer Behavior" },
	{ id: 4, category: "Safety or Environment Concerns" },
	{ id: 5, category: "Points or Hours Discrepancies" },
	{ id: 6, category: "Inappropriate or Offensive Requests" },
];

const links = [
	{
		id: 1,
		primaryTitle: "Report an Issue",
		secondaryTitle: "Send Us Details of Your Concerns",
		url: "/report-issue",
		icon: triangleIcon,
	},
	{
		id: 2,
		primaryTitle: "FAQs",
		secondaryTitle: "Your questions answered here.",
		url: "/faqs",
		icon: faqIcon,
	},
	{
		id: 3,
		primaryTitle: "911 Assistance",
		secondaryTitle: "Contact Emergency Services",
		url: "/emergency-services",
		icon: helpIcon,
	},
];

export default function HelpPage() {
	const navigate = useNavigate();
	const [emergencyCallOpen, setEmergencyCallOpen] = useState(false);

	function handleNavigate(link) {
		if (link.id === 3) {
			setEmergencyCallOpen(true);
		} else {
			// navigate(link.url);
		}
	}

	return (
		<div className="p-4 mt-5 min-h-[85vh]">
			<h1 className="subtitle-heading text-lightest mb-5">Safety Toolkit</h1>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<div className="flex justify-between items-center mb-3 border-b border-opacity-40 border-lightest py-2 ">
							<div className="flex items-center">
								<img src={link.icon} alt={link.primaryTitle} className="w-6" />
								<div className="ml-4">
									<h3 className="text-lightest ">{link.primaryTitle}</h3>
									<p className="text-lightest body-text">
										{link.secondaryTitle}
									</p>
								</div>
							</div>
							<span className="material-symbols-outlined text-light">
								chevron_right
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
